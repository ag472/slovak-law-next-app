import { notFound } from "next/navigation";
import LawCard from "../../../components/LawCard";
import type { Law } from "../../../types/law";

export default async function LawPage({ params }: { params: { id: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/api/legal-data`);
  const { data } = await res.json();

  const law = data.find((l: Law) => l.id === params.id);
  if (!law) {
    notFound();
  }

  return (
    <main className="container mx-auto p-4">
      <LawCard law={law} />
    </main>
  );
}

