"use server";

import { updateApartment, deleteApartment } from "@/server/db/queries";
import { ApartmentFormData } from "@/types";

export async function updateApartmentAction(id: string, formData: FormData) {
  const data: ApartmentFormData = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    address: formData.get("address") as string,
    city: formData.get("city") as string,
    state: formData.get("state") as string,
    zipCode: formData.get("zipCode") as string,
  };

  try {
    await updateApartment(Number(id), data);
  } catch (error) {
    throw new Error("Failed to update apartment");
  }
}

export async function deleteApartmentAction(id: string) {
  try {
    await deleteApartment(Number(id));
  } catch (error) {
    throw new Error("Failed to delete apartment");
  }
}
