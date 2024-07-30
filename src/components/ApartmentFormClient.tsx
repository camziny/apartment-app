"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ApartmentFormData } from "@/types";
import UpdateButton from "./UpdateButton";
import DeleteButton from "./DeleteButton";
import { toast } from "sonner";

type ApartmentFormClientProps = {
  apartment: ApartmentFormData & { id: number };
};

export default function ApartmentFormClient({
  apartment,
}: ApartmentFormClientProps) {
  const [formData, setFormData] = useState<ApartmentFormData>({
    name: apartment.name,
    description: apartment.description,
    address: apartment.address,
    city: apartment.city,
    state: apartment.state,
    zipCode: apartment.zipCode,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/apartments/${apartment.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Apartment updated successfully!");
        router.push(`/apartments/${apartment.id}`);
        router.refresh();
      } else {
        const errorData = await response.json();
        console.error("Failed to update apartment", errorData.message);
        toast.error(`Failed to update apartment: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error during update:", error);
      toast.error("Failed to update apartment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form
      id="apartment-update-form"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Apartment Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter apartment name"
          className="border border-gray-300 bg-gray-50 text-black p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter description"
          className="border border-gray-300 bg-gray-50 text-black p-2 rounded w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter address"
          className="border border-gray-300 bg-gray-50 text-black p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label
          htmlFor="city"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter city"
          className="border border-gray-300 bg-gray-50 text-black p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label
          htmlFor="state"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          State
        </label>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="Enter state"
          className="border border-gray-300 bg-gray-50 text-black p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label
          htmlFor="zipCode"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          ZIP Code
        </label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          placeholder="Enter ZIP code"
          className="border border-gray-300 bg-gray-50 text-black p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <UpdateButton
        formId="apartment-update-form"
        apartmentId={apartment.id.toString()}
      />
      <div className="mt-4">
        <DeleteButton apartmentId={apartment.id.toString()} />
      </div>
    </form>
  );
}
