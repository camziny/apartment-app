"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

type DeleteButtonProps = {
  apartmentId: string;
};

export default function DeleteButton({ apartmentId }: DeleteButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    setIsDeleting(true);

    try {
      const response = await fetch(`/api/apartments/${apartmentId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Apartment deleted successfully!");
        router.push("/");
        router.refresh();
      } else {
        const error = await response.json();
        toast.error(`Failed to delete apartment: ${error.message}`);
        setIsDeleting(false);
      }
    } catch (error) {
      console.error("Error during delete:", error);
      toast.error("Failed to delete apartment. Please try again.");
      setIsDeleting(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          type="button"
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
          disabled={isDeleting}
        >
          {isDeleting ? "Deleting..." : "Delete Apartment"}
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the
            apartment.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
