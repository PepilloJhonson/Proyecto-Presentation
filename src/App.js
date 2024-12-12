import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import fotoPerfil from "./assets/fotoPerfil.jpg"; // Importa la imagen

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Navbar Fija */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#top">Mi CV</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#about">Sobre mí</a></li>
              <li className="nav-item"><a className="nav-link" href="#experience">Experiencia</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Habilidades</a></li>
              <li className="nav-item"><a className="nav-link" href="#education">Educación</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section con fondo degradado */}
      <section className="bg-hero text-white py-5" id="top" style={{ marginTop: '60px' }}>
        <div className="container text-center" data-aos="fade-down">
          <img
            src={fotoPerfil}
            alt="Foto de perfil"
            className="rounded-circle mb-3 shadow hero-img"
          />
          <h1 className="mb-0 fw-bold">JOSE BRYAN MAMANI ESCOBAR</h1>
          <p className="text-white mb-0 fs-5">Desarrollador Frontend</p>
          <p className="text-white">Cochabamba, Bolivia</p>
          <a 
            href="/CV-Jose Bryan Mamani Escobar.pdf"  
            className="btn btn-outline-light mt-3" 
            target="_blank" 
            rel="noreferrer" 
            download="CV-Jose Bryan Mamani Escobar.pdf"
          >
            Descargar CV (PDF)
          </a>
        </div>
      </section>

      <div className="container my-5">
        {/* Sobre mí */}
        <div className="card mb-5 p-4" id="about" data-aos="fade-up">
          <div className="card-body">
            <h2 className="card-title section-title"><i className="bi bi-person-fill"></i>Sobre mí</h2>
            <p className="lead">
              Soy un desarrollador frontend apasionado por crear interfaces de
              usuario claras, intuitivas y atractivas. Tengo experiencia con
              React, JavaScript, HTML, CSS, y disfruto aprender nuevas tecnologías.
            </p>
          </div>
        </div>

        {/* Experiencia Laboral */}
        <div className="card mb-5 p-4" id="experience" data-aos="fade-up">
          <div className="card-body">
            <h2 className="card-title section-title"><i className="bi bi-briefcase-fill"></i>Experiencia Laboral</h2>
            <div className="mb-4">
              <h5 className="mb-1 fw-semibold">Desarrollador Frontend - Empresa X (2020 - Presente)</h5>
              <ul className="list-unstyled ms-3">
                <li>• Desarrollo de componentes React reutilizables</li>
                <li>• Optimización de rendimiento y UX</li>
                <li>• Trabajo conjunto con diseñadores y backend</li>
              </ul>
            </div>
            <div>
              <h5 className="mb-1 fw-semibold">Desarrollador Web - Empresa Y (2018 - 2020)</h5>
              <ul className="list-unstyled ms-3">
                <li>• Creación de sitios web responsivos</li>
                <li>• Mantenimiento y soporte técnico</li>
                <li>• Mejores prácticas de SEO</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Habilidades (Modificado) */}
        <div className="card mb-5 p-4" id="skills" data-aos="fade-up">
          <div className="card-body">
            <h2 className="card-title section-title"><i className="bi bi-lightning-fill"></i>Habilidades</h2>
            <div className="mt-2">
              <span className="badge rounded-pill bg-primary m-1 px-3 py-2">
                <a href="https://es.react.dev/" target="_blank" rel="noreferrer" className="text-white text-decoration-none">React</a>
              </span>
              <span className="badge rounded-pill bg-primary m-1 px-3 py-2">
                <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank" rel="noreferrer" className="text-white text-decoration-none">JavaScript</a>
              </span>
              <span className="badge rounded-pill bg-primary m-1 px-3 py-2">
                <a href="https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/HTML_basics" target="_blank" rel="noreferrer" className="text-white text-decoration-none">HTML</a>
              </span>
              <span className="badge rounded-pill bg-primary m-1 px-3 py-2">
                <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank" rel="noreferrer" className="text-white text-decoration-none">CSS</a>
              </span>
              <span className="badge rounded-pill bg-primary m-1 px-3 py-2">
                <a href="https://git-scm.com/" target="_blank" rel="noreferrer" className="text-white text-decoration-none">Git</a>
              </span>
              <span className="badge rounded-pill bg-primary m-1 px-3 py-2">
                <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer" className="text-white text-decoration-none">Bootstrap</a>
              </span>
            </div>
          </div>
        </div>

        {/* Educación */}
        <div className="card mb-5 p-4" id="education" data-aos="fade-up">
          <div className="card-body">
            <h2 className="card-title section-title"><i className="bi bi-book-fill"></i>Educación</h2>
            <h5 className="mb-1 fw-semibold">Ingeniería en Sistemas - Tecnologico Boliviano Aleman TECBA (2021 - 2024)</h5>
            <ul className="list-unstyled ms-3">
              <li>• Especialización en desarrollo web</li>
              <li>• Proyectos estudiantiles destacados</li>
            </ul>
          </div>
        </div>

        {/* Contacto */}
        <div className="card p-4" id="contact" data-aos="fade-up">
          <div className="card-body text-center">
            <h2 className="card-title section-title"><i className="bi bi-envelope-fill"></i>Contacto</h2>
            <p className="mb-1 fs-5"><strong>Email:</strong> <a href="mailto:tuemail@ejemplo.com" className="text-decoration-none">josemamani21@tecba.edu.bo.com</a></p>
            <p className="mb-0 fs-5"><strong>GitHub:</strong> <a href="https://github.com/tuusuario" className="text-decoration-none" target="_blank" rel="noreferrer">github.com/pepillojhson</a></p>
            <p className="mb-1 fs-5"><strong>Telefono:</strong> <a href="telefono" className="text-decoration-none" target="_blank" rel="noreferrer">76996722</a></p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-muted py-3">
        <small>© {new Date().getFullYear()} Jose Bryan Mamani Escobar. Todos los derechos reservados.</small>
      </footer>
    </>
  );
};

export default App;
