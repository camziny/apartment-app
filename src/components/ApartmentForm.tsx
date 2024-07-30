import React from "react";
import { createApartmentAction } from "@/app/actions/apartmentActions";
import SubmitButton from "./SubmitButton";

export default function ApartmentForm() {
  return (
    <div className="max-w-2xl mx-auto bg-slate-800 p-8 border border-gray-700 rounded-md shadow-lg my-5">
      <h1 className="text-2xl font-bold text-white mb-6">
        Apartment Creation Form
      </h1>
      <form
        id="apartment-form"
        action={createApartmentAction}
        className="space-y-6"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-100 mb-1"
          >
            Apartment Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter apartment name"
            className="border border-gray-600 bg-stone-100 text-gray-800 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-100 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter description"
            className="border border-gray-600 bg-stone-100 text-gray-800 p-3 rounded w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-100 mb-1"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter address"
            className="border border-gray-600 bg-stone-100 text-gray-800 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-100 mb-1"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter city"
            className="border border-gray-600 bg-stone-100 text-gray-800 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-100 mb-1"
          >
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            placeholder="Enter state"
            className="border border-gray-600 bg-stone-100 text-gray-800 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="zipCode"
            className="block text-sm font-medium text-gray-100 mb-1"
          >
            ZIP Code
          </label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            placeholder="Enter ZIP code"
            className="border border-gray-600 bg-stone-100 text-gray-800 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <SubmitButton formId="apartment-form" />
      </form>
    </div>
  );
}
