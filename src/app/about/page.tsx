import './About.css';

export default function AboutPage() {
  return (
    <div className="main-content">
      <article>
        <h1>O projekte</h1>
        
        <section>
          <p>
            Tento projekt poskytuje prístup k oficiálnym právnym predpisom Slovenskej republiky.
            Naše ciele:
          </p>
          
          <ul>
            <li>Zabezpečiť jednoduchý prístup k právnym predpisom</li>
            <li>Poskytovať presné a aktualizované právne informácie</li>
            <li>Podporovať transparentnosť právnego systému</li>
          </ul>
        </section>

        <section>
          <h2>Zdroje údajov</h2>
          <p>
            Informácie sú získavané z oficiálnych zdrojov:
          </p>
          
          <ul>
            <li><a href="https://www.slov-lex.sk/" target="_blank" rel="noopener noreferrer">
              Slovenský právny lexikon (slov-lex.sk)
            </a></li>
            <li><a href="https://www.zbor.sk/" target="_blank" rel="noopener noreferrer">
              Parlament Slovenskej republiky (zbor.sk)
            </a></li>
          </ul>
        </section>

        <section>
          <h2>Kontakt</h2>
          <p>
            Ak máte otázky alebo návrhy na vylepšenie:
          </p>
          
          <p>email: kontakt@slovak-law.sk</p>
        </section>
      </article>
    </div>
  );
}