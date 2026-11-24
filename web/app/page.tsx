import Image from "next/image";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

const pillars = [
  {
    id: "educacion",
    number: "01",
    label: "Aprender",
    title: "Educación Jurídica",
    description:
      "Clases individuales con abogados especializados y sesiones pensadas para cada necesidad de aprendizaje.",
    detail:
      "Una forma cercana de profundizar en el derecho y seguir creciendo.",
  },
  {
    id: "servicios",
    number: "02",
    label: "Orientarse",
    title: "Servicios Jurídicos Especializados",
    description:
      "Asesorías, mentorías entre profesionales y elaboración de documentos jurídicos.",
    detail:
      "Conocimiento especializado para acompañar distintos retos jurídicos.",
  },
  {
    id: "comunidad",
    number: "03",
    label: "Compartir",
    title: "Comunidad Académica",
    description:
      "Círculos de estudio, clubes jurídicos, conversatorios, talleres, seminarios y espacios de colaboración.",
    detail:
      "Encuentros para intercambiar ideas y construir conocimiento en conjunto.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow eyebrow-light">Un espacio para el conocimiento jurídico</p>
            <h1 id="hero-title">
              El conocimiento jurídico
              <span>nos conecta.</span>
            </h1>
            <p className="hero-description">
              Aprende de especialistas, encuentra orientación jurídica y forma
              parte de una comunidad que impulsa el conocimiento y el crecimiento
              profesional.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#pilares">
                Descubre ORBI
                <ArrowDownRight size={17} aria-hidden="true" />
              </a>
              <a className="button button-secondary-light" href="#invitacion">
                Para estudiantes y profesionales
              </a>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <svg
                className="orbit-art"
                viewBox="0 0 900 250"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="450"
                  cy="125"
                  rx="336"
                  ry="74"
                  transform="rotate(-12 450 125)"
                  stroke="rgba(242, 237, 252, .64)"
                  strokeWidth="1.2"
                />
                <ellipse
                  cx="450"
                  cy="125"
                  rx="270"
                  ry="54"
                  transform="rotate(15 450 125)"
                  stroke="rgba(188, 164, 245, .72)"
                  strokeWidth="1.2"
                />
                <ellipse
                  cx="450"
                  cy="125"
                  rx="205"
                  ry="37"
                  transform="rotate(-27 450 125)"
                  stroke="rgba(188, 164, 245, .42)"
                  strokeWidth="1"
                />
                <circle cx="450" cy="125" r="31" fill="#7952D6" />
                <circle cx="172" cy="91" r="5" fill="#F2EDFC" />
                <circle cx="686" cy="70" r="5" fill="#F0A168" />
                <circle cx="626" cy="188" r="4" fill="#BCA4F5" />
              </svg>
              <span className="orbit-wordmark">orbi</span>
              <div className="orbit-labels">
                {pillars.map((pillar) => (
                  <span key={pillar.number}>
                    <b>{pillar.number}</b> {pillar.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="pillars-section"
          id="pilares"
          aria-labelledby="pillars-title"
        >
          <div className="section-shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Tres formas de crecer</p>
                <h2 id="pillars-title">
                  El derecho, desde distintas perspectivas.
                </h2>
              </div>
              <p className="section-intro">
                ORBI reúne aprendizaje, orientación especializada y comunidad
                académica en un mismo espacio.
              </p>
            </div>
            <div className="pillars-list">
              {pillars.map((pillar) => (
                <article className="pillar" id={pillar.id} key={pillar.id}>
                  <div className="pillar-meta">
                    <span>{pillar.number}</span>
                    <span>{pillar.label}</span>
                  </div>
                  <div>
                    <h3>{pillar.title}</h3>
                    <p className="pillar-description">{pillar.description}</p>
                  </div>
                  <p className="pillar-detail">{pillar.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="value-section" aria-labelledby="value-title">
          <div className="section-shell value-grid">
            <div className="value-heading">
              <p className="eyebrow">Una mirada integral</p>
              <h2 id="value-title">
                El conocimiento crece cuando <em>circula.</em>
              </h2>
            </div>
            <div className="value-content">
              <p>
                Aprender, buscar orientación y compartir ideas son parte de un
                mismo camino. ORBI conecta estas experiencias para acercar el
                conocimiento jurídico a quienes quieren seguir creciendo.
              </p>
              <div className="value-sequence" aria-label="Los pilares de ORBI">
                <span>Aprendizaje</span>
                <i aria-hidden="true" />
                <span>Especialización</span>
                <i aria-hidden="true" />
                <span>Comunidad</span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="audience-section"
          id="invitacion"
          aria-labelledby="audience-title"
        >
          <div className="section-shell audience-grid">
            <div className="audience-heading">
              <p className="eyebrow">Un lugar para seguir creciendo</p>
              <h2 id="audience-title">
                El derecho también se construye en comunidad.
              </h2>
            </div>
            <div className="audience-list">
              <article>
                <span className="audience-number">01</span>
                <div>
                  <h3>Para estudiantes</h3>
                  <p>
                    Acércate a nuevas perspectivas, aprende de especialistas y
                    encuentra espacios para conversar sobre el derecho.
                  </p>
                </div>
                <a href="#educacion" aria-label="Ver educación jurídica">
                  <ArrowRight size={20} aria-hidden="true" />
                </a>
              </article>
              <article>
                <span className="audience-number">02</span>
                <div>
                  <h3>Para profesionales</h3>
                  <p>
                    Comparte tu experiencia, participa en intercambios
                    académicos y contribuye al crecimiento de la comunidad.
                  </p>
                </div>
                <a href="#servicios" aria-label="Ver servicios jurídicos">
                  <ArrowRight size={20} aria-hidden="true" />
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="cta-section" aria-labelledby="cta-title">
          <div className="section-shell cta-panel">
            <div>
              <p className="eyebrow eyebrow-light">El conocimiento nos acerca</p>
              <h2 id="cta-title">Descubre una nueva forma de conectar con el derecho.</h2>
            </div>
            <a className="button button-primary" href="#pilares">
              Explorar los pilares
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-grid">
          <div className="footer-brand">
            <a href="#inicio" aria-label="ORBI, volver al inicio">
              <Image
                src="/orbi-logo-white.png"
                alt=""
                width={272}
                height={327}
                sizes="272px"
              />
            </a>
            <p>Educación, servicios jurídicos y comunidad académica.</p>
          </div>
          <div className="footer-column">
            <h2>Explora ORBI</h2>
            <a href="#educacion">Educación Jurídica</a>
            <a href="#servicios">Servicios Jurídicos</a>
            <a href="#comunidad">Comunidad Académica</a>
          </div>
          <div className="footer-column">
            <h2>Para quiénes</h2>
            <a href="#invitacion">Estudiantes</a>
            <a href="#invitacion">Profesionales del derecho</a>
          </div>
          <div className="footer-column footer-note">
            <h2>Conocimiento que conecta</h2>
            <p>Un espacio para aprender, compartir y crecer en comunidad.</p>
          </div>
        </div>
        <div className="section-shell footer-bottom">
          <span>© ORBI</span>
          <a href="#inicio">Volver al inicio ↑</a>
        </div>
      </footer>
    </>
  );
}
