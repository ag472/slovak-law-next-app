// Mock legal data - in real app this would connect to official sources
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

// This would be replaced with real API calls in production
export const mockLegalDocuments: LegalDocument[] = [
  {
    id: "ustava-460-1992",
    title: "Ústava Slovenskej republiky",
    number: "460/1992 Z.z.",
    year: "1992",
    effectiveDate: "1. 11. 2025",
    lastUpdated: "2026-11-06",
    content: `
      <h2>Ústava Slovenskej republiky</h2>
      
      <p><strong>Ústava Slovenskej republiky</strong> je základný právny nástroj, ktorý definuje základné práva a povinnosti občanov, princípy vlády Slovenskej republiky a štruktúru právneho systému.</p>
      
      <h3>Článok 1 - Význam a základné práva</h3>
      
      <p>1. Slovenská republika je demokratický štát, v ktorom sú uznávané a chránené základné ľudské práva.</p>
      
      <p>2. Všetci občania majú rovnaké práva a slobody, bez ohľadu na rás, pohlavie, náboženstvo alebo iné okolnosti.</p>
      
      <h3>Článok 2 - Práva a povinnosti</h3>
      
      <p>1. Občania majú právo na zdravie, vzdelanie a sociálnu ochranu.</p>
      
      <p>2. Základné práva sú zabezpečené ústavnými základmi a právnymi predpismi.</p>
    `,
    citations: [
      {
        title: "Oficiálny zdroj - Slovenský právny lexikon",
        link: "https://www.slov-lex.sk/pravne-predpisy/SK/ZZ/1992/460/",
        effectiveDate: "1. 11. 2025"
      }
    ]
  },
  {
    id: "trestny-zakon-300-2005",
    title: "Trestný zákon",
    number: "300/2005 Z.z.",
    year: "2005",
    effectiveDate: "1. 3. 2005",
    lastUpdated: "2026-11-06",
    content: `
      <h2>Trestný zákon</h2>
      
      <p><strong>Trestný zákon</strong> definuje trestné činnosť a trestné odpovednosti občanov Slovenskej republiky.</p>
      
      <h3>Článok 1 - Základné ustanovenia</h3>
      
      <p>1. Trestný zákon sa vztahuje na trestné činosti, ktoré sú zákonitosťou vyhlásené ako trestné.</p>
      
      <h3>Článok 2 - Osobná trestná odpovednosť</h3>
      
      <p>1. Trestná odpovednosť nesie osoba, ktorá spáchala trestný čin.</p>
    `,
    citations: [
      {
        title: "Oficiálny zdroj - Zákoník trestný",
        link: "https://www.slov-lex.sk/pravne-predpisy/SK/TZ/2005/300/",
        effectiveDate: "1. 3. 2005"
      }
    ]
  },
];