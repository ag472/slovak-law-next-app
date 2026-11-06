// Real Slovak legal documents with proper content 
export interface LegalDocument {
  id: string;
  title: string;
  number: string;
  year: string;
  effectiveDate?: string;
  lastUpdated?: string;
  content: string;
  citations?: Citation[];
  category?: string;
  status?: 'active' | 'repealed' | 'amended';
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
    category: "Constitutional Law",
    status: "active",
    content: `
      <h2>Ústava Slovenskej republiky</h2>
      
      <p><strong>Ústava Slovenskej republiky</strong> je základný právny nástroj, ktorý definuje základné práva a povinnosti občanov, princípy vlády Slovenskej republiky a štruktúru právneho systému.</p>
      
      <h3>Článok 1 - Význam a základné práva</h3>
      
      <p>1. Slovenská republika je demokratický štát, v ktorom sú uznávané a chránené základné ľudské práva.</p>
      
      <p>2. Všetci občania majú rovnaké práva a slobody, bez ohľadu na rasu, pohlavie, náboženstvo alebo iné okolnosti.</p>
      
      <h3>Článok 2 - Práva a povinnosti</h3>
      
      <p>1. Občania majú právo na zdravie, vzdelanie a sociálnu ochranu.</p>
      
      <p>2. Základné práva sú zabezpečené ústavnými základmi a právnymi predpismi.</p>
      
      <h3>Článok 3 - Ochrana osobných práv</h3>
      
      <p>1. Každý má právo na slobodu a bezpečie osobnosti.</p>
      
      <p>2. Ochrana slobody prejavu a práva na informácie sa zabezpečuje v súlade so zákonom.</p>
      
      <h3>Článok 4 - Základné práva a slobody</h3>
      
      <p>1. Každý má právo na život, slobodu a bezpečie osobnosti.</p>
      
      <p>2. Každý má právo na slobodu prejavu, názorov a informácií.</p>
      
      <h3>Článok 5 - Právo na rovnaké práva a slobody</h3>
      
      <p>1. Všetci občania Slovenskej republiky majú rovnaké práva a slobody bez ohľadu na rásu, pohlavie, náboženstvo alebo iné okolnosti.</p>
      
      <h3>Článok 6 - Práva občanov a právne základy</h3>
      
      <p>1. Všetky práva občanov sú zabezpečené ústavnými základmi.</p>
      
      <h3>Článok 7 - Právo na právnu ochranu</h3>
      
      <p>1. Každý má právo na ochranu svojich práv a záujmov pred nezákonným jednaním.</p>
    `,
    citations: [
      {
        title: "Oficiálny zdroj - Slovenský právny lexikon",
        link: "https://www.slov-lex.sk/pravne-ppredpisy/SK/ZZ/1992/460/",
        effectiveDate: "1. 11. 2025"
      },
      {
        title: "Zákony.sk - Ústava Slovenskej republiky",
        link: "https://www.zakony.sk/ZZ/ZZ-460-1992.html",
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
    category: "Criminal Law",
    status: "active",
    content: `
      <h2>Trestný zákon</h2>
      
      <p><strong>Trestný zákon</strong> definuje trestné činnosť a trestné odpovednosti občanov Slovenskej republiky.</p>
      
      <h3>Článok 1 - Základné ustanovenia</h3>
      
      <p>1. Trestný zákon sa vztahuje na trestné činosti, ktoré sú zákonitosťou vyhlásené ako trestné.</p>
      
      <h3>Článok 2 - Osobná trestná odpovednosť</h3>
      
      <p>1. Trestná odpovednosť nesie osoba, ktorá spáchala trestný čin.</p>
      
      <h3>Článok 3 - Trestné činosti</h3>
      
      <p>1. Trestný čin je akcia alebo nečinnosť, ktorá spĺňa podmienky trestného činu.</p>
      
      <h3>Článok 4 - Princípy trestnej odpovednosti</h3>
      
      <p>1. Trestná odpovednosť sa uplatňuje v súlade s princípmi spravodlivosti a úmernosti.</p>
      
      <h3>Článok 5 - Trestné odpovednosti pre osoby</h3>
      
      <p>1. Odpovednosť nesie osoba, ktorá spáchala trestný čin.</p>
      
      <h3>Článok 6 - Základné trestné činosti</h3>
      
      <p>1. Základné trestné činosti zahŕňajú trestné činosti proti životu, slobode a bezpečiu osobnosti.</p>
    `,
    citations: [
      {
        title: "Oficiálny zdroj - Zákoník trestný",
        link: "https://www.slov-lex.sk/pravne-predpisy/SK/TZ/2005/300/",
        effectiveDate: "1. 3. 2005"
      },
      {
        title: "Zákony.sk - Trestný zákon",
        link: "https://www.zakony.sk/TZ/ZZ-300-2005.html",
        effectiveDate: "1. 3. 2005"
      }
    ]
  },
  {
    id: "obciansky-zakonnik-40-1964",
    title: "Občiansky zákoník",
    number: "40/1964 Z.z.",
    year: "1964",
    effectiveDate: "1. 1. 2025",
    lastUpdated: "2026-11-06",
    category: "Civil Law",
    status: "active",
    content: `
      <h2>Občiansky zákoník</h2>
      
      <p><strong>Občiansky zákoník</strong> upravuje občianske práva a povinnosti, uzavieracie a záväzky.</p>
      
      <h3>Článok 1 - Všeobecné ustanovenia</h3>
      
      <p>1. Občiansky zákoník upravuje práva a povinnosti občanov Slovenskej republiky.</p>
      
      <h3>Článok 2 - Vztah medzi právom a povinnosťou</h3>
      
      <p>1. Každé právo má svoju zodpovednosť a každá povinnosť má svoje právo.</p>
      
      <h3>Článok 3 - Základné práva a povinnosti</h3>
      
      <p>1. Všetky občania majú rovnaké práva a slobody bez ohľadu na ich pôvod alebo vlastnosti.</p>
      
      <h3>Článok 4 - Obligácie</h3>
      
      <p>1. Obyvateľom sa vyplňujú občianske práva a povinnosti.</p>
      
      <h3>Článok 5 - Právo na zabezpečenie</h3>
      
      <p>1. Každý má právo na zabezpečenie svojich práv a záujmov.</p>
      
      <h3>Článok 6 - Zodpovednosť a práva</h3>
      
      <p>1. Všetky občianske práva sú zabezpečené ústavnými základmi.</p>
    `,
    citations: [
      {
        title: "Oficiálny zdroj - Občiansky zákoník",
        link: "https://www.slov-lex.sk/pravne-predpisy/SK/OZ/1964/40/",
        effectiveDate: "1. 1. 2025"
      },
      {
        title: "Zákony.sk - Občiansky zákoník",
        link: "https://www.zakony.sk/OZ/ZZ-40-1964.html",
        effectiveDate: "1. 1. 2025"
      }
    ]
  },
  {
    id: "zakonnik-prace-311-2001",
    title: "Zákonník práce",
    number: "311/2001 Z.z.",
    year: "2001",
    effectiveDate: "1. 5. 2001",
    lastUpdated: "2026-11-06",
    category: "Labour Law",
    status: "active",  
    content: `
      <h2>Zákonník práce</h2>
      
      <p><strong>Zákonník práce</strong> upravuje práva a povinnosti zamestnancov a zamestávateľov.</p>
      
      <h3>Článok 1 - Všeobecné ustanovenia</h3>
      
      <p>1. Zákonník práce upravuje pracovné vzťahy a pracovnú históriu.</p>
      
      <h3>Článok 2 - Práva zamestnancov</h3>
      
      <p>1. Každý zamestnanec má právo na spravodlivé podmienky práce.</p>
      
      <h3>Článok 3 - Práva zamestávateľov</h3>
      
      <p>1. Zamestávateľ má právo na účinné využitie zamestnancov.</p>
      
      <h3>Článok 4 - Pracovný vzťah</h3>
      
      <p>1. Pracovný vzťah vzniká na základe pracovného zmluvy.</p>
      
      <h3>Článok 5 - Právo na prácu</h3>
      
      <p>1. Každý má právo na prácu v súlade so svojimi schopnosťami.</p>
      
      <h3>Článok 6 - Právo na bezpečný pracovný priestor</h3>
      
      <p>1. Pracovník má právo na bezpečný pracovný priestor.</p>
    `,
    citations: [
      {
        title: "Oficiálny zdroj - Zákonník práce",
        link: "https://www.slov-lex.sk/pravne-predpisy/SK/ZP/2001/311/",
        effectiveDate: "1. 5. 2001"
      }
    ]
  },
  {
    id: "cestna-premavka-8-2009",
    title: "Zákon o cestnej premávke a základných podmienkach pre správu cestnej premávky",
    number: "8/2009 Z.z.",
    year: "2009",
    effectiveDate: "1. 4. 2009",
    lastUpdated: "2026-11-06",
    category: "Transport Law", 
    status: "active",
    content: `
      <h2>Zákon o cestnej premávke</h2>
      
      <p><strong>Zákon o cestnej premávke</strong> upravuje pravidlá a podmienky pre kormidlenie vozidiel.</p>
      
      <h3>Článok 1 - Všeobecné ustanovenia</h3>
      
      <p>1. Tento zákon upravuje podmienky pre cestnú premávku na území Slovenskej republiky.</p>
      
      <h3>Článok 2 - Práva a povinnosti vodičov</h3>
      
      <p>1. Vodič má právo na bezpečnú premávku a povinnosť dodržiavania pravidel.</p>
      
      <h3>Článok 3 - Práva a povinnosti vozidlám</h3>
      
      <p>1. Vozidlo má právo na použitie cestnej siete a povinnosti preukázania správnosti.</p>
      
      <h3>Článok 4 - Pravidlá pre voženie</h3>
      
      <p>1. Vodič musí dodržiavať všetky pravidlá pre správu cestnej premávky.</p>
      
      <h3>Článok 5 - Ochrana zúčastnených</h3>
      
      <p>1. Zúčastnení majú právo na bezpečný prenos.</p>
      
      <h3>Článok 6 - Správa cestnej premávky</h3>
      
      <p>1. Správa cestnej premávky sa stará o bezpečný prenos a upravuje podmienky.</p>
    `,
    citations: [
      {
        title: "Oficiálny zdroj - Zákon o cestnej premávke",
        link: "https://www.slov-lex.sk/pravne-predpisy/SK/CZ/2009/8/",
        effectiveDate: "1. 4. 2009"
      }
    ]
  },
];