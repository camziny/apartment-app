"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type UpdateButtonProps = {
  formId: string;
  apartmentId: string;
};

export default function UpdateButton({
  formId,
  apartmentId,
}: UpdateButtonProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    setIsSubmitting(true);

    const form = document.getElementById(formId) as HTMLFormElement;
    if (!form) {
      console.error(`Form with id ${formId} not found.`);
      toast.error("Failed to find the form. Please try again.");
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`/api/apartments/${apartmentId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Apartment updated successfully!");
        router.push(`/`);
        router.refresh();
      } else {
        const errorData = await response.json();
        toast.error("Failed to update aparment");
        console.error("Failed to update apartment", errorData.message);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <button
      type="button"
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
      onClick={handleSubmit}
      disabled={isSubmitting}
    >
      {isSubmitting ? "Updating..." : "Update Apartment"}
    </button>
  );
}
