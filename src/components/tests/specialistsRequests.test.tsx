import { vi, describe, test, expect } from "vitest";
import { supabase } from "../../database/supabase";
import {
  deleteSpecialistById,
  fetchAllSpecialists,
  getSpecialistById,
  updateSpecialistById,
} from "../../api/specialistsRequests";
import { Specialist } from "../../../types/types";

vi.mock("../../database/supabase", () => ({
  supabase: {
    from: vi.fn(() => ({
      select: vi.fn(() => Promise.resolve({ data: [], error: null })),
      eq: vi.fn(() => ({
        single: vi.fn(() => Promise.resolve({ data: null, error: null })),
      })),
      update: vi.fn(() => ({
        eq: vi.fn(() =>
          Promise.resolve({ data: [{ name: "Updated Name" }], error: null })
        ),
      })),
      delete: vi.fn(() => ({
        eq: vi.fn(() => Promise.resolve({ data: [{ id: "1" }], error: null })),
      })),
    })),
  },
}));

describe("specialistsRequests.tsx API calls", () => {
  test("fetchAllSpecialists should return specialists data", async () => {
    const mockData = [
      { id: "1", name: "John Doe" },
      { id: "2", name: "Jane Smith" },
    ];

    (supabase.from as unknown as vi.Mock).mockImplementation(() => ({
      select: vi.fn().mockResolvedValue({ data: mockData, error: null }),
    }));

    const result = await fetchAllSpecialists();
    expect(result).toEqual(mockData);
  });

  test("getSpecialistById should return specialist data", async () => {
    const mockData = { id: "1", name: "John Doe" };

    (supabase.from as unknown as vi.Mock).mockImplementation(() => ({
      select: vi.fn().mockImplementation(() => ({
        eq: vi.fn().mockImplementation(() => ({
          single: vi.fn().mockResolvedValue({ data: mockData, error: null }),
        })),
      })),
    }));

    const result = await getSpecialistById("1");
    expect(result).toEqual(mockData);
  });

  test("updateSpecialistById should return updated specialist data", async () => {
    const mockUpdatedData: Partial<Specialist> = { full_name: "John Updated" };

    (supabase.from as unknown as vi.Mock).mockImplementation(() => ({
      update: vi.fn().mockImplementation(() => ({
        eq: vi.fn().mockResolvedValue({ data: [mockUpdatedData], error: null }),
      })),
    }));

    const result = await updateSpecialistById(mockUpdatedData, "1");
    expect(result).toEqual([mockUpdatedData]);
  });

  test("deleteSpecialistById should return deleted specialist data", async () => {
    const mockDeletedData = { id: "1" };

    (supabase.from as unknown as vi.Mock).mockImplementation(() => ({
      delete: vi.fn().mockImplementation(() => ({
        eq: vi.fn().mockResolvedValue({ data: [mockDeletedData], error: null }),
      })),
    }));

    const result = await deleteSpecialistById("1");
    expect(result).toEqual([mockDeletedData]);
  });
});
