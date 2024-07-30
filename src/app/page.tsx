import Image from "next/image";
import ApartmentForm from "@/components/ApartmentForm";
import ApartmentList from "@/components/ApartmentList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ApartmentList />
    </main>
  );
}
