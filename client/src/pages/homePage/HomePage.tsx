import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <main>
        <div className="hero-container">
          <h1 className="title-hero">Bienvenue dans ton inventaire</h1>
        </div>
        <section>
          <div className="container-new">
            <h2>Les nouveautés</h2>
            <div className="bar" />
          </div>
        </section>
      </main>
    </>
  );
}
