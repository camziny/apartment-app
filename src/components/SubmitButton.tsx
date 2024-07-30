"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type SubmitButtonProps = {
  formId: string;
};

export default function SubmitButton({ formId }: SubmitButtonProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    setIsSubmitting(true);

    const form = document.getElementById(formId) as HTMLFormElement;
    if (!form) {
      console.error(`Form with id ${formId} not found.`);
      toast.error("Failed to find form");
      setIsSubmitting(false);
      return;
    }

    try {
      await form.requestSubmit();
      toast.success("Apartment created successfully!");
      router.push("/");
    } catch (error) {
      console.error("Error during form submission:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <button
      type="button"
      className="bg-slate-300 text-gray-800 py-3 px-6 rounded hover:bg-slate-400 transition duration-200"
      onClick={handleSubmit}
      disabled={isSubmitting}
    >
      {isSubmitting ? "Submitting..." : "Submit"}
    </button>
  );
}
