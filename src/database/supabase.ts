import { Database } from "../../types/supabase";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Provide env variables");
}

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
