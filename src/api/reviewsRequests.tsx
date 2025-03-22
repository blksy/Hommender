import { Review } from "../../types/types";
import { supabase } from "../database/supabase";

export const addOrder = async (newRequest: Review) => {
  const { data, error } = await supabase
    .from("reviews")
    .insert([newRequest])
    .select();

  if (error) {
    console.error("Failed to add new review", error);
    throw error;
  }
  return data;
};

export const getReviewById = async (id: string) => {
  const { data: review, error } = await supabase
    .from("reviews")
    .select("")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Failed to fetch review data", error);
    throw error;
  }
  return review;
};

export const getReviewsBySpecialistId = async (specialistId: string) => {
  const { data: reviews, error } = await supabase
    .from("reviews")
    .select("*")
    .eq("specialist_id", specialistId);

  if (error) {
    console.error("Failed to fetch reviews for specialist", error);
    throw error;
  }
  return reviews;
};

export const deleteReviewById = async (id: string) => {
  const { data, error } = await supabase
    .from("reviews")
    .delete()
    .eq("id", id)
    .select();

  if (error) {
    console.error("Failed to delete review", error);
    throw error;
  }
  return data;
};
