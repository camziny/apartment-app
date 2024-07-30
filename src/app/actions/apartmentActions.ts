"use server";

import { createApartment } from "@/server/db/queries";
import { ApartmentFormData } from "@/types";

export async function createApartmentAction(formData: FormData) {
  const data: ApartmentFormData = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    address: formData.get("address") as string,
    city: formData.get("city") as string,
    state: formData.get("state") as string,
    zipCode: formData.get("zipCode") as string,
  };

  try {
    await createApartment(data);
  } catch (error) {
    console.error("Error registering apartment:", error);
    throw new Error("Failed to create apartment");
  }
}
