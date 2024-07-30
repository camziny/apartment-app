import { NextResponse } from "next/server";
import {
  getApartment,
  updateApartment,
  deleteApartment,
} from "@/server/db/queries";
import { ApartmentFormData } from "@/types";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const apartment = await getApartment(Number(params.id));
    if (!apartment) {
      return NextResponse.json(
        { message: "Apartment not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(apartment);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch apartment" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data: ApartmentFormData = await request.json();
    await updateApartment(Number(params.id), data);
    return NextResponse.json({ message: "Apartment updated successfully" });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update apartment" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await deleteApartment(Number(params.id));
    return NextResponse.json({ message: "Apartment deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete apartment" },
      { status: 500 }
    );
  }
}
