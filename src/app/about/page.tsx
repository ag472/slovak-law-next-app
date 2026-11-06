// CSS import removed - using Tailwind classes directly

export default function AboutPage() {
  return (
    <div className="main-content">
      <article>
        <h1>O projekte</h1>
        
        <section className="about-intro">
          <p>
            Tento projekt je moderný online nástroj pre prístup k oficiálnym právnym predpisom Slovenskej republiky.
            Naše ciele:
          </p>
          
          <ul>
            <li>Poskytovať jednoduchý a rýchly prístup k právnym predpisom</li>
            <li>Zabezpečiť presné a aktuálne právne informácie</li>
            <li>Podporovať transparentnosť právného systému Slovenska</li>
            <li>Umožniť jednoduché vyhľadávanie právnych dokumentov</li>
          </ul>
        </section>

        <section className="data-sources">
          <h2>Zdroje údajov</h2>
          <p>
            Informácie sú získavané z oficiálnych zdrojov:
          </p>
          
          <div className="source-grid">
            <div className="source-card">
              <h3>Slovenský právny lexikon</h3>
              <p><a href="https://www.slov-lex.sk/" target="_blank" rel="noopener noreferrer">
                https://www.slov-lex.sk/
              </a></p>
              <p className="source-description">
                Oficiálny zdroj právnych predpisov Slovenskej republiky
              </p>
            </div>

            <div className="source-card">
              <h3>Parlament Slovenskej republiky</h3>
              <p><a href="https://www.zbor.sk/" target="_blank" rel="noopener noreferrer">
                https://www.zbor.sk/
              </a></p>
              <p className="source-description">
                Zákony a právne predpisy vyhlásené parlamentom
              </p>
            </div>

            <div className="source-card">
              <h3>Ministerstvo spravedlivity SR</h3>
              <p><a href="https://www.msj.sk/" target="_blank" rel="noopener noreferrer">
                https://www.msj.sk/
              </a></p>
              <p className="source-description">
                Právne zdroje a informácie pre právnikov
              </p>
            </div>
          </div>
        </section>

        <section className="project-details">
          <h2>Technické detaily</h2>
          
          <div className="tech-stack">
            <h3>Použité technológie</h3>
            <ul>
              <li>Next.js 14 s App Router - Server-side rendering pre SEO</li>
              <li>TypeScript - Typová bezpečnosť a lepšia údržba</li>
              <li>TailwindCSS - Moderné štýlovanie s responsive designom</li>
              <li>API endpoint pre vyhľadávanie - Rýchle hľadanie právnych predpisov</li>
            </ul>
          </div>

          <h3>Bezpečnosť a práva</h3>
          <p>
            Všetky právne informácie sú poskytované v súlade s oficiálnymi zdrojmi.
            Tento web slúži len na informačné účely a nejedná sa o právne poradenstvo.
          </p>
          
          <div className="disclaimer">
            <strong>Upozornenie:</strong> Nezodpovedáme za presnosť všetkých právnych informácií,
            ktoré môžu byť aktualizované alebo zmenené. Všetky právne informácie sú poskytované v súlade 
            s oficiálnymi zdrojmi a sú k dispozícii iba na informačné účely.
          </div>
        </section>

        <section className="contact">
          <h2>Kontakt</h2>
          <p>
            Ak máte otázky alebo návrhy na vylepšenie:
          </p>
          
          <p>email: kontakt@slovak-law.sk</p>
          
          <p>
            V prípade technických problémov alebo návrhov na vylepšenie,
            môžete tiež zaslať správu do našeho GitHub repozitára:
          </p>
          
          <p><a href="https://github.com/slovak-law/slovak-law-next" target="_blank" rel="noopener noreferrer">
            https://github.com/slovak-law/slovak-law-next
          </a></p>
        </section>

        <section className="contributing">
          <h2>Prispievanie k projektu</h2>
          
          <p>
            Projekt je otvorený pre prispievania. Ak máte návrhy na vylepšenie alebo chcete pridať 
            chýbajúci právny dokument, môžete:
          </p>
          
          <ul>
            <li>Otvoriť issue na GitHub</li>
            <li>Pripraviť pull request s vylepšením</li>
            <li>Poskytnúť zdrojové informácie pre nový dokument</li>
          </ul>

          <p>
            Všetky doplnkové informácie by mali pochádzať z oficiálnych zdrojov, ktoré sú uverenými 
            a aktuálnymi.
          </p>
        </section>
      </article>
    </div>
  );
}