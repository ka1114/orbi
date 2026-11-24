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
      "Clases virtuales con abogados especializados, en sesiones individuales o paquetes.",
    image: "/educacion.jpg",
    imageAlt: "Libro abierto en una escena de lectura y estudio.",
    tags: ["Clases individuales", "Paquetes de formación"],
  },
  {
    id: "servicios",
    number: "02",
    label: "Orientarse",
    title: "Servicios Jurídicos Especializados",
    description:
      "Asesorías, mentorías y redacción de documentos con el abogado que elijas.",
    image: "/servicios.jpg",
    imageAlt: "Profesional con traje en una oficina luminosa.",
    tags: ["Asesorías", "Mentorías", "Documentos"],
  },
  {
    id: "comunidad",
    number: "03",
    label: "Compartir",
    title: "Comunidad Académica",
    description:
      "Círculos, clubes, talleres y seminarios para aprender en conjunto.",
    image: "/comunidad.jpg",
    imageAlt: "Tres profesionales conversan en una sala de reuniones.",
    tags: ["Círculos de estudio", "Talleres", "Seminarios"],
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
                <circle cx="450" cy="125" r="31" fill="#4A0A6B" />
                <circle cx="172" cy="91" r="5" fill="#F2EDFC" />
                <circle cx="686" cy="70" r="5" fill="#F0A168" />
                <circle cx="626" cy="188" r="4" fill="#BCA4F5" />
              </svg>
              <span className="orbit-wordmark">
                <Image
                  src="/orbi-logo-white.png"
                  alt=""
                  width={272}
                  height={327}
                  sizes="155px"
                />
              </span>
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
                  <div className="pillar-image-frame">
                    <Image
                      src={pillar.image}
                      alt={pillar.imageAlt}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 40vw, 33vw"
                      loading="lazy"
                      className="pillar-image"
                    />
                  </div>
                  <div className="pillar-meta">
                    <span>{pillar.number}</span>
                    <span>{pillar.label}</span>
                  </div>
                  <div className="pillar-copy">
                    <h3>{pillar.title}</h3>
                    <p className="pillar-description">{pillar.description}</p>
                  </div>
                  <ul className="pillar-tags" aria-label={`Temas de ${pillar.title}`}>
                    {pillar.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <a className="pillar-link" href="#invitacion">
                    Conocer más <span aria-hidden="true">→</span>
                  </a>
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
          <div className="section-shell audience-shell">
            <div className="audience-heading">
              <p className="eyebrow">Empieza en ORBI</p>
              <h2 id="audience-title">Elige cómo quieres empezar.</h2>
              <p className="audience-intro">
                Aprende, consulta o comparte tu conocimiento con la comunidad
                jurídica.
              </p>
            </div>
            <div className="audience-grid">
              <article className="audience-card audience-card-student">
                <div className="audience-image-frame">
                  <Image
                    src="/estudiante.jpg"
                    alt="Persona trabajando con un computador portátil al aire libre."
                    fill
                    sizes="(min-width: 1200px) 588px, (min-width: 1024px) 50vw, 100vw"
                    loading="lazy"
                    className="audience-image"
                  />
                </div>
                <div className="audience-card-panel">
                  <p className="audience-card-label">
                    Para estudiantes y profesionales
                  </p>
                  <h3>Aprende y consulta con abogados especializados</h3>
                  <p className="audience-card-description">
                    Reserva clases, asesorías, mentorías o redacción de
                    documentos con el abogado que elijas.
                  </p>
                  <ul className="audience-card-items">
                    <li>Clases individuales y paquetes</li>
                    <li>Asesorías y documentos jurídicos</li>
                    <li>Círculos, talleres y seminarios</li>
                  </ul>
                  <div className="audience-card-actions">
                    {/* TODO: enlazar a registro de estudiante */}
                    <a className="audience-button audience-button-student" href="#">
                      Explorar abogados
                      <span className="audience-button-arrow" aria-hidden="true">
                        →
                      </span>
                    </a>
                    <a className="audience-secondary" href="#pilares">
                      Cómo funciona
                    </a>
                  </div>
                </div>
              </article>
              <article className="audience-card audience-card-lawyer">
                <div className="audience-image-frame">
                  <Image
                    src="/abogado.jpg"
                    alt="Abogado con traje sentado frente a una mesa."
                    fill
                    sizes="(min-width: 1200px) 588px, (min-width: 1024px) 50vw, 100vw"
                    loading="lazy"
                    className="audience-image"
                  />
                </div>
                <div className="audience-card-panel">
                  <p className="audience-card-label">Para abogados</p>
                  <h3>Comparte tu conocimiento y llega a nuevos usuarios</h3>
                  <p className="audience-card-description">
                    Ofrece clases, asesorías y mentorías, y dirige actividades de
                    la comunidad académica.
                  </p>
                  <ul className="audience-card-items">
                    <li>Ofrece clases y asesorías</li>
                    <li>Mentoría a otros abogados</li>
                    <li>Dirige círculos y talleres</li>
                  </ul>
                  <div className="audience-card-actions">
                    {/* TODO: enlazar a postulación de abogado */}
                    <a className="audience-button audience-button-lawyer" href="#">
                      Postular mi perfil
                      <span className="audience-button-arrow" aria-hidden="true">
                        →
                      </span>
                    </a>
                    <a className="audience-secondary" href="#pilares">
                      Cómo funciona
                    </a>
                  </div>
                </div>
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
