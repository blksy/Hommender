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
      select: vi.fn(() =>
        Promise.resolve({
          data: [{ id: "54dea75c-0808-43d2-98ff-e9142ae99882" }],
          error: null,
        })
      ),
      eq: vi.fn(() => ({
        single: vi.fn(() =>
          Promise.resolve({
            data: { id: "76176480-1725-42da-aec8-53e7417eee71" },
            error: null,
          })
        ),
      })),
      update: vi.fn(() => ({
        eq: vi.fn(() =>
          Promise.resolve({ data: [{ full_name: "Ivy Updated" }], error: null })
        ),
      })),
      delete: vi.fn(() => ({
        eq: vi.fn(() =>
          Promise.resolve({
            data: [{ id: "54dea75c-0808-43d2-98ff-e9142ae99882" }],
            error: null,
          })
        ),
      })),
    })),
  },
}));

describe("specialistsRequests.tsx API calls", () => {
  test("fetchAllSpecialists should return specialists data", async () => {
    const mockData = [
      {
        address: "111 Hill St",
        id: "54dea75c-0808-43d2-98ff-e9142ae99882",
        description: "Plumbing services expert",
        full_name: "Ivy Adams",
        phone: "1122334455",
        reviews: null,
        role: "specialist",
        services: [
          "Repairing Leaks",
          "Pipe Installation",
          "24/7 Emergency Repairs",
        ],
        user_id: null,
      },
      {
        address: "222 Lake St",
        description: "Electrical services specialist",
        full_name: "Jake Turner",
        id: "606c5207-3c73-4591-a8c4-b921be0a564e",
        phone: "2233445566",
        reviews: null,
        role: "specialist",
        services: [
          "Lighting installation",
          "Wiring and rewiring",
          "Electrical repairs",
        ],
        user_id: null,
      },
      {
        address: "777 Valley St",
        description: "Painter",
        full_name: "Olivia Hall",
        id: "76176480-1725-42da-aec8-53e7417eee71",
        phone: "7788990011",
        reviews: null,
        role: "specialist",
        services: [
          "Interior Painting",
          "Surface Preparation",
          "Exterior Painting",
        ],
        user_id: null,
      },
      {
        id: "797ce684-aa0d-419c-8c4e-9f0fc8248ff3",
        address: "444 River St",
        description: "General handyman",
        full_name: "Liam Davis",
        phone: "4455667788",
        reviews: null,
        role: "specialist",
        services: ["Carpentry", "Plumbing", "Furniture assembly", "Repairs"],
        user_id: null,
      },
      {
        address: "888 Coast St",
        description: "Carpenter",
        full_name: "Paul Walker",
        id: "49bd629d-8b60-43e8-8d48-038ce1491481",
        phone: "8899001122",
        reviews: null,
        role: "specialist",
        services: ["Renovation and repair", "Framing", "Decking", "Flooring"],
        user_id: null,
      },
      {
        address: "333 Forest St",
        description: "HVAC technician",
        full_name: "Kelly Brown",
        id: "80e74923-43e6-4144-a11f-9e93e957772a",
        phone: "3344556677",
        reviews: null,
        role: "specialist",
        services: [
          "Air conditioning",
          "Heating",
          "Installation",
          "Ventilation",
        ],
        user_id: null,
      },
      {
        address: "666 Mountain St",
        description: "Roofing specialist",
        full_name: "Noah Garcia",
        id: "c11fbf68-4a61-4944-ac3d-a68aafa6ef59",
        phone: "6677889900",
        reviews: null,
        role: "specialist",
        services: [
          "Roof repair",
          "Roof installation",
          "Roof inspection",
          "Chimney inspection",
        ],
        user_id: null,
      },
      {
        address: "osiedle Bolesława Chrobrego, 16/111",
        description: "testowy opis",
        full_name: "Bartosz Oleksy",
        id: "ef34a251-db73-4f73-9b24-d56de57ca257",
        phone: "605992154",
        reviews: null,
        role: "specialist",
        services: ["cos tam", "cos tam", "cos", "tam"],
        user_id: "ef34a251-db73-4f73-9b24-d56de57ca257",
      },
      {
        address: "test",
        description: "test",
        full_name: "test",
        id: "23bc0ac8-af7f-49c4-82f8-f7254a15ff5a",
        phone: "+48123123123",
        reviews: null,
        role: "specialist",
        services: ["test"],
        user_id: null,
      },
      {
        address: "555 Ocean St",
        description: "Landscaping professional",
        full_name: "Mia Evans",
        id: "c4599a1c-c7f0-4065-a74d-ab62970f6ac3",
        phone: "5566778899",
        reviews: null,
        role: "specialist",
        services: ["Landscape design", "Pruning", "Planting", "Lawn mowing"],
        user_id: null,
      },
    ];
    (supabase.from as unknown as vi.Mock).mockImplementation(() => ({
      select: vi.fn().mockResolvedValue({ data: mockData, error: null }),
    }));

    const result = await fetchAllSpecialists();
    console.log(result);
    expect(result).toEqual(mockData);
  });

  test("getSpecialistById should return specialist data", async () => {
    const mockData = {
      id: "54dea75c-0808-43d2-98ff-e9142ae99882",
      full_name: "Ivy Adams",
      address: "111 Hill St",
      description: "Plumbing services expert",
      phone: "1122334455",
      role: "specialist",
      services: [
        "Repairing Leaks",
        "Pipe Installation",
        "24/7 Emergency Repairs",
      ],
      user_id: null,
      reviews: null,
    };

    (supabase.from as unknown as vi.Mock).mockImplementation(() => ({
      select: vi.fn().mockImplementation(() => ({
        eq: vi.fn().mockImplementation(() => ({
          single: vi.fn().mockResolvedValue({ data: mockData, error: null }),
        })),
      })),
    }));

    const result = await getSpecialistById(
      "54dea75c-0808-43d2-98ff-e9142ae99882"
    );
    console.log(result);
    expect(result).toEqual(mockData);
  });

  test("updateSpecialistById should return updated specialist data", async () => {
    const mockUpdatedData = { full_name: "Ivy Updated" };

    (supabase.from as unknown as vi.Mock).mockReturnValue({
      update: vi.fn().mockReturnValue({
        eq: vi.fn().mockResolvedValue({ data: [mockUpdatedData], error: null }),
      }),
    });
    const result = await updateSpecialistById(
      mockUpdatedData,
      "54dea75c-0808-43d2-98ff-e9142ae99882"
    );
    console.log(result);
    expect(result).toEqual([mockUpdatedData]);
  });

  test("deleteSpecialistById should return deleted specialist data", async () => {
    const mockDeletedData = { id: "54dea75c-0808-43d2-98ff-e9142ae99882" };

    (supabase.from as unknown as vi.Mock).mockReturnValue({
      delete: vi.fn().mockReturnValue({
        eq: vi.fn().mockResolvedValue({ data: [mockDeletedData], error: null }),
      }),
    });

    const result = await deleteSpecialistById(
      "54dea75c-0808-43d2-98ff-e9142ae99882"
    );
    console.log(result);
    expect(result).toEqual([mockDeletedData]);
  });
});
