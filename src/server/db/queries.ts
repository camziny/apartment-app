import prisma from "./client";
import { ApartmentFormData, Apartment } from "@/types";

export async function getApartments() {
  return await prisma.apartment.findMany();
}

export async function getApartment(id: number) {
  return await prisma.apartment.findUnique({
    where: { id },
  });
}

export async function createApartment(data: ApartmentFormData) {
  return await prisma.apartment.create({
    data,
  });
}

export async function updateApartment(id: number, data: ApartmentFormData) {
  return await prisma.apartment.update({
    where: { id },
    data,
  });
}

export async function deleteApartment(id: number) {
  return await prisma.apartment.delete({
    where: { id },
  });
}

export async function searchApartments(query: string): Promise<Apartment[]> {
  return prisma.apartment.findMany({
    where: {
      name: {
        contains: query,
        mode: "insensitive",
      },
    },
  });
}
