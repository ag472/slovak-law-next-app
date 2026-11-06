import { Metadata } from 'next';
// CSS import removed - using Tailwind classes directly

export interface LegalDocument {
  id: string;
  title: string;
  number: string;
  year: string;
  effectiveDate?: string;
  lastUpdated?: string;
  content: string;
  citations?: Citation[];
}

export interface Citation {
  title: string;
  link: string;
  effectiveDate?: string;
}

export default function LegalDocument({
  document,
  isOnline = true
}: {
  document: LegalDocument;
  isOnline?: boolean;
}) {
  return (
    <div className="legal-document">
      <header>
        <h1>{document.title}</h1>
        <p className="document-meta">
          {document.number} / {document.year}
        </p>
      </header>

      <div className="citation-info" role="complementary">
        <h2>Citácia a zdroje</h2>
        {document.citations && document.citations.length > 0 ? (
          <ul>
            {document.citations.map((citation, index) => (
              <li key={index}>
                <a href={citation.link} target="_blank" rel="noopener noreferrer">
                  {citation.title}
                </a>
                {citation.effectiveDate && (
                  <span> (Platný od: {citation.effectiveDate})</span>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>Žiadne citácie k dispozícii</p>
        )}
      </div>

      <div className="document-content">
        {document.content}
      </div>

      <footer className="disclaimer" role="contentinfo">
        <strong>Upozornenie:</strong> Tento web slúži len na informačné účely. 
        Nejedná sa o právne poradenstvo.
      </footer>
    </div>
  );
}