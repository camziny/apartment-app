import { NextResponse } from "next/server";
import { createApartment } from "@/server/db/queries";
import { ApartmentFormData } from "@/types";

export async function POST(request: Request) {
  try {
    const data: ApartmentFormData = await request.json();
    await createApartment(data);
    return NextResponse.json({ message: "Apartment created successfully" });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create apartment" },
      { status: 500 }
    );
  }
}
