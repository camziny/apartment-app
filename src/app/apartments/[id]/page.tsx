import { Suspense } from "react";
import { ApartmentData } from "@/types";
import { getApartment } from "@/server/db/queries";
import Link from "next/link";
import ApartmentFormClient from "@/components/ApartmentFormClient";

async function fetchApartment(id: string): Promise<ApartmentData> {
  const apartment = await getApartment(Number(id));
  if (!apartment) {
    throw new Error("Apartment not found");
  }
  return apartment;
}

export default async function ApartmentSettings({
  params,
}: {
  params: { id: string };
}) {
  const apartment = await fetchApartment(params.id);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-3xl bg-white p-6 border border-gray-300 rounded-md shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <Link
            href="/"
            className="flex items-center text-blue-500 hover:text-blue-600 transition duration-200"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            Back
          </Link>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <ApartmentFormClient apartment={apartment} />
        </Suspense>
      </div>
    </div>
  );
}
