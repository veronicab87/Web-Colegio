import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FaFacebook, FaInstagram, FaYoutube, FaHome, FaEnvelope, FaImages, FaSearch, FaCalendarAlt, FaNewspaper, FaVideo } from 'react-icons/fa';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [searchQuery, setSearchQuery] = useState('');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Search query:', searchQuery);
  };

  const backgroundImageStyle = {
    backgroundImage: 'url(/images/insta.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  };

  return (
    <div className="App" style={backgroundImageStyle}>
      <header className="header text-white p-3">
        <span className="icon">🏠</span>
        <span className="icon">📞</span>
        <span className="icon">🔗</span>
        <img src="images/escudo.jpg" alt="Logo" className="logo" />
        
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="btn btn-danger m-2" onClick={() => handleNavClick('inicio')}>
                  <FaHome /> Inicio
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-warning m-2" onClick={() => handleNavClick('admisiones')}>
                  <FaEnvelope /> Matriculas
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-success m-2" onClick={() => handleNavClick('galeria')}>
                  <FaImages /> Galería
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-info m-2" onClick={() => handleNavClick('contacto')}>
                  <FaEnvelope /> Contacto
                </button>
              </li>
            </ul>
            <form className="d-flex" onSubmit={handleSearchSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Buscar"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button className="btn btn-outline-success" type="submit">
                <FaSearch />
              </button>
            </form>
          </div>
        </nav>
      </header>
      <div className="banner text-dark p-5">
        <h1>Bienvenidos al Liceo Moderno San Cayetano</h1>
      </div>
      <div className="container mt-4" style={{ flex: 1 }}>
        {activeSection === 'inicio' && (
          <div className="bg-light p-4 rounded">
            <h2><strong>Inicio</strong></h2>
            <p><strong>Bienvenidos al Liceo Moderno San Cayetano.</strong></p>
            <p>El Liceo Moderno San Cayetano se identifica con varios símbolos que reflejan sus valores y su identidad educativa. Entre estos símbolos se encuentran:</p>
            <ul>
              <li><strong>El Escudo:</strong> Simboliza el amor, la justicia y la sabiduría de Dios.</li>
              <li><strong>La Cruz:</strong> Representa el amor a Dios, razón primordial de nuestras vidas.</li>
              <li><strong>La Themis:</strong> "Señora de la justicia" simboliza el actuar justo en nuestro diario vivir.</li>
              <li><strong>El Libro y la Antorcha:</strong> Simbolizan la luz del conocimiento, cimientos que deseamos inculcar en nuestros educandos.</li>
              <li><strong>El Color Blanco:</strong> Refleja la paz, pureza y transparencia de la infancia.</li>
              <li><strong>El Color Azul:</strong> Representa la frescura, la espiritualidad, la libertad, la experiencia, la lealtad y la honradez.</li>
              <li><strong>El Color Vino Tinto:</strong> Simboliza la excelencia y las metas a lograr durante nuestra formación académica.</li>
            </ul>
            <p>El Liceo Moderno San Cayetano es de ti y para ti señor. Guíanos en este camino para hacer grandes obras en tu nombre, por tu mano de amor, sabiduría y grandeza sobre esta institución y todos los que hacemos parte de ella. Gracias Dios por tantas bendiciones. Tuyos son el poder y la gloria por los siglos de los siglos. Amén.</p>
            <h3><strong>Himno del Liceo Moderno San Cayetano</strong></h3>
            <p><strong>Estrofa 1:</strong></p>
            <p>Caminantes en el mundo siempre iremos, Construyendo nuestra vida en el amor, De la mano de Jesús que es nuestro hermano, Abrazando la justicia y el perdón.</p>
            <p><strong>Estrofa 2:</strong></p>
            <p>Con esfuerzo y con trabajo aprenderemos Los valores y ampliaremos la visión. En las aulas crecen todos los conceptos, Disciplina y excelencia con vigor.</p>
            <p><strong>Estrofa 3:</strong></p>
            <p>Aflanzando los valores aprendidos, Se fortalece la familia y nuestra unión, Se transforma nuestro ambiente en armonia, Y la paz se vive en toda la nación.</p>
            <p><strong>Coro:</strong></p>
            <p>Liceistas de San Cayetano, Gran orgullo es nuestra institución, Te preocupas de la gran tarea De educarnos con gracia y con amor. Liceistas de San Cayetano, Gran orgullo es nuestra institución, Te preocupas de la gran tarea De formar un futuro mejor.</p>
            <p><strong>Autor:</strong> Profesor Delvy Rojas</p>
            
            {/* New Section for News, Activities Banner, and YouTube Link */}
            <div className="news-section mt-4">
              <h3><FaNewspaper /> Noticias del Liceo</h3>
              <ul>
                <li>Esta semana Izada de bandera el viernes 23 de agosto 2024</li>
                <li>Semana del Deporte.</li>
                <li>Nuestra cooperatica tiene nuevos productos para todos.</li>
              </ul>
            </div>
            <div className="activities-banner mt-4">
              <h3><FaCalendarAlt /> Actividades</h3>
              <p>Consulta nuestro <a href="https://www.youtube.com/channel/UC123456789" target="_blank" rel="noopener noreferrer">canal de YouTube</a> para ver más actividades y eventos.</p>
            </div>
          </div>
        )}
        {activeSection === 'admisiones' && (
          <div className="bg-light p-4 rounded">
            <h2>Admisiones</h2>
            <form>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" className="form-control" name="nombre" />
              </div>
              <div className="mb-3">
                <label className="form-label">Apellido</label>
                <input type="text" className="form-control" name="apellido" />
              </div>
              <div className="mb-3">
                <label className="form-label">Correo Electrónico</label>
                <input type="email" className="form-control" name="email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Teléfono</label>
                <input type="tel" className="form-control" name="telefono" />
              </div>
              <div className="mb-3">
                <label className="form-label">Mensaje</label>
                <textarea className="form-control" name="mensaje"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
          </div>
        )}
        {activeSection === 'galeria' && (
          <div className="bg-light p-4 rounded">
            <h2>Galería</h2>
            <div className="row">
              <div className="col-md-4">
                <img src="images/uniforme.jpg" alt="Uniforme" className="img-fluid" />
              </div>
              <div className="col-md-4">
            
              </div>
              <div className="col-md-4">
                <img src="images/sudadera.jpg" alt="Sudadera" className="img-fluid" />
              </div>
              <div className="col-md-4">
                <img src="images/cole2.jpg" alt="Foto 1" className="img-fluid" />
              </div>
              <div className="col-md-4">
                <img src="images/cole3.jpg" alt="Foto 2" className="img-fluid" />
              </div>
              <div className="col-md-4">
                <img src="images/cole4.jpg" alt="Foto 3" className="img-fluid" />
              </div>
              <div className="col-md-4">
                <img src="images/cole5.jpg" alt="Foto 4" className="img-fluid" />
              </div>
              <div className="col-md-4">
                <img src="images/cole6.jpg" alt="Foto 5" className="img-fluid" />
              </div>
            </div>
          </div>
        )}
        {activeSection === 'contacto' && (
          <div className="bg-light p-4 rounded">
            <div className="col-md-4">
                <img src="images/insta.jpg" alt="Foto 5" className="img-fluid" />
              </div>
  
            <h2>Contacto</h2>
            <p><strong>Sede A:</strong> Carrera 87 M 74-06 sur</p>
            <p><strong>Sede B:</strong> Caarrera 87 M 73b 70 sur</p>
            <p>Teléfono: 320 6203546</p>
            <p>liceomodernosancayetano@hotamil.com</p>
            
          </div>
        )}
      </div>






      <footer className="footer">
        <p>© 2024 Liceo Moderno San Cayetano. Todos los derechos reservados.</p>
        <span class="icon">🏠</span>
        <span class="icon">📞</span>
        <span class="icon">🔗</span>
      </footer>
    </div>
  );
}

export default App;


