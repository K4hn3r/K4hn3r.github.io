import { ContactLinks } from "./ContactLinks";

function Hero() {
  return (
    <header className="hero">
      <div className="identity">
        <p className="domain">kahner.dev</p>
        <h1>Kahner<br />Rodriguez</h1>
      </div>
      <div className="art" aria-hidden="true">
        <div className="monogram">KR</div>
      </div>
    </header>
  );
}

export function Home() {
  return (
    <main className="page">
      <Hero />
      <ContactLinks />
    </main>
  );
}
