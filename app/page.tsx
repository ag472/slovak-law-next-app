// This file renders the home page listing Slovak laws.
// It pulls data from the `/api/legal-data` route and paginates the results.
// The page is a client component because it uses state and effects.

"use client";

import { useEffect, useState } from "react";
import LawCard from "../components/LawCard";
import type { Law } from "../types/law";

export default function Home() {
  const [laws, setLaws] = useState<Law[]>([]);
  const [page, setPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    fetch(`/api/legal-data?page=${page}&perPage=${perPage}`)
      .then((res) => res.json())
      .then((data) => setLaws(data.data ?? []))
      .catch((err) => console.error("Error fetching laws", err));
  }, [page]);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Slovak Laws</h1>
      <div className="grid gap-4">
        {laws.map((law) => (
          <LawCard key={law.id} law={law} />
        ))}
      </div>
      <div className="flex justify-center mt-8 gap-4">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 rounded bg-gray-200"
        >
          Prev
        </button>
        <span className="px-4 py-2">Page {page}</span>
        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 rounded bg-gray-200"
        >
          Next
        </button>
      </div>
    </main>
  );
}

