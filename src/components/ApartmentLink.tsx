"use client";

import { useRouter } from "next/navigation";

type ApartmentLinkProps = {
  apartmentId: number;
  children: React.ReactNode;
};

export default function ApartmentLink({
  apartmentId,
  children,
}: ApartmentLinkProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/apartments/${apartmentId}`);
    router.refresh();
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      {children}
    </div>
  );
}
