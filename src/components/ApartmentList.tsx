import { getApartments } from "@/server/db/queries";
import Link from "next/link";
import ApartmentLink from "@/components/ApartmentLink";
import { Apartment } from "@/types";
import dynamic from "next/dynamic";

const ApartmentSearch = dynamic(() => import("@/components/ApartmentSearch"), {
  ssr: false,
});

export default async function ApartmentList() {
  const apartments: Apartment[] = await getApartments();

  return (
    <div className="z-10 w-full max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-200 mb-10">
        My Apartments
      </h1>
      <div className="p-4 items-center">
        <ApartmentSearch />
      </div>
      {apartments.length === 0 && (
        <div className="flex flex-col items-center">
          <Link href="/add-apartment" className="text-4xl text-gray-200 mb-4">
            +
          </Link>
          <Link
            href="/add-apartment"
            className="text-lg text-gray-200 underline"
          >
            Add an apartment
          </Link>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {apartments.map((apartment: Apartment) => (
          <ApartmentLink key={apartment.id} apartmentId={apartment.id}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center transition-transform transform hover:scale-105">
              <div className="p-4 w-full">
                <h2 className="text-xl text-gray-800 font-semibold mb-2">
                  {apartment.name}
                </h2>
                <p className="text-gray-600 mb-2">{apartment.description}</p>
                <p className="text-gray-700 font-semibold">
                  {apartment.city}, {apartment.state}
                </p>
              </div>
            </div>
          </ApartmentLink>
        ))}
        {apartments.length > 0 && (
          <div className="flex flex-col items-center">
            <Link href="/add-apartment" className="text-4xl text-gray-200 mb-4">
              +
            </Link>
            <Link
              href="/add-apartment"
              className="text-lg text-gray-200 underline"
            >
              Add another
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
