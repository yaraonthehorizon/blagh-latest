import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";

// Define the shape of the data you expect
interface Hadith {
  id: string;
  text: string;
  narrator: string;
}

// Service function
const getHadiths = async () => {
  return apiClient<Hadith[]>("/hadiths");
};

// The Hook
export const useHadiths = () => {
  return useQuery({
    queryKey: ["hadiths"],
    queryFn: getHadiths,
    // You can add configuration here like staleTime, enabled, etc.
  });
};
