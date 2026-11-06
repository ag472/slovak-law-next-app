import SearchBar from '@/components/SearchBar';
import './HomePage.css';

export default function HomePage() {
  const handleSearch = (query: string) => {
    // In a real app, this would trigger search API call
    console.log('Searching for:', query);
  };

  return (
    <div className="main-content">
      <header>
        <h1>Slovenské právne predpisy</h1>
        <p>Oficiálne zdroje právneho systému SR</p>
      </header>

      <section className="hero">
        <SearchBar onSearch={handleSearch} />
      </section>

      <section className="features">
        <h2>Aké sú výhody našej služby?</h2>
        <ul>
          <li>✅ Plná podpora server-side rendering (SSR)</li>
          <li>✅ Vyhľadávanie právnych predpisov</li>
          <li>✅ Prístup bez internetu (PWA)</li>
          <li>✅ Všetky právne texty s citáciou</li>
          <li>✅ Plné zabezpečenie právnych informácií</li>
        </ul>
      </section>

      <section className="about">
        <h2>O projekte</h2>
        <p>
          Tento projekt poskytuje jednoduchý prístup k oficiálnym právnym predpisom Slovenskej republiky.
          Všetky informácie sú získavané z oficiálnych zdrojov a sú aktualizované pravidelne.
        </p>
        <p>
          Viac informácií nájdete na stránke{' '}
          <a href="/about" aria-label="Viac informácií o projekte">
            O projekte
          </a>.
        </p>
      </section>

      <footer className="disclaimer">
        <strong>Upozornenie:</strong> Tento web slúži len na informačné účely.
        Nejedná sa o právne poradenstvo. Všetky právne informácie sú poskytované v súlade s oficiálnymi zdrojmi.
      </footer>
    </div>
  );
}