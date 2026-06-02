import Hero from '../components/Hero/Hero'
import '../index.css'
import { Link } from 'react-router-dom'
import tempio from "../assets/SempoStudio-Tempio-01.png";
import sfilata from "../assets/SempoStudio-Sfilata-Briup.jpg";
import morte from "../assets/Lavorare con la morte è difficile.png";
import eco1 from "../assets/SempoStudio-ECO_LUMINOSO-01.jpeg";
import giudizio from "../assets/SempoStudio-Giudizio-ArtDate 07.jpg";
import LazyImage from "../components/LazyImage/LazyImage";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="home-container">
          <Link to="/tempio" className="div-home">
              <LazyImage src={tempio} alt='tempio'/>
              <div className="overlay">
                  <h1>Tempio</h1>
                  <p>Cascina Cappuccina - Melegnano</p>
              </div>
          </Link>

          <Link to="/sfilata" className="div-home">
              <LazyImage src={sfilata} alt='sfilata'/>
              <div className="overlay">
                  <h1>Sfilata Briup</h1>
                  <p>Cascina Cappuccina - Melegnano</p>
              </div>
          </Link>

          <div className="div-home2">
              <Link to="/giudizio" className="div-home2-img1">
                  <LazyImage src={giudizio} alt='giudizio'/>
                  <div className="overlay">
                      <h1>Il Giudizio</h1>
                      <p>Cascina Cappuccina - Melegnano</p>
                  </div>
              </Link>

              <div className="div-home3">
                  <Link to="/morte" className="div-home3-img1">
                      <LazyImage src={morte} alt='morte'/>
                      <div className="overlay">
                          <h1>Lavorare con la Morte è difficile</h1>
                          <p>Cascina Cappuccina - Melegnano</p>
                      </div>
                  </Link>

                  <Link to="/ecoLuminoso" className="div-home3-img2">
                      <LazyImage src={eco1} alt='eco'/>
                      <div className="overlay">
                          <h1>Eco Luminoso</h1>
                          <p>Cascina Cappuccina - Melegnano</p>
                      </div>
                  </Link>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Home