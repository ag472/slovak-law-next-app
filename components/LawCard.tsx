import Link from "next/link";
import type { Law } from "../types/law";

type Props = { law: Law };

export default function LawCard({ law }: Props) {
  return (
    <article className="border rounded p-4 hover:shadow">
      <h2 className="text-xl font-semibold mb-2">{law.title}</h2>
      <p className="text-gray-700 mb-4">{law.excerpt}</p>
      <Link href={`/law/${law.id}`} className="text-blue-600 underline">
        Read more
      </Link>
    </article>
  );
}

