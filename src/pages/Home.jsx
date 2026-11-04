import Hero from "../Components/Hero/Hero";
import "../index.css";
import { Link } from "react-router-dom";
import tempioDSK from "../assets/Home/SEMPO_HP_DSK_1480×700_Tempio.jpg";
import tempioMBL from "../assets/Home/SEMPO_HP_MBL_786×880_Tempio.jpg";
import sfilataDSK from "../assets/Home/SEMPO_HP_DSK_1480×700_Sfilata.jpg";
import sfilataMBL from "../assets/Home/SEMPO_HP_MBL_786×880_SfilataBriup.jpg";
import ecoLuminoso from "../assets/Home/SEMPO_HP_DSK_MBL_730×800_EcoLuminoso.jpg";
import giudizio from "../assets/Home/SEMPO_HP_DSK_MBL_730×800_Giudizio.jpg";
import tabernacoloDSK from "../assets/Home/SEMPO_HP_DSK_1480×700_Tabernacolo.jpg";
import tabernacoloMBL from "../assets/Home/SEMPO_HP_MBL_786×880_Tabernacolo.jpg";
import musicaDSK from "../assets/MuovoMusica/SEMPO_HP_DSK_1480×700_MuovoMusica_02.jpg";
import musicaMBL from "../assets/MuovoMusica/SEMPO_HP_MBL_730×800_MuovoMusica_02b.jpg";
import tritticoDSK from "../assets/Home/SEMPO_HP_DSK_1480×700_Trittico.jpg";
import tritticoMBL from "../assets/Home/SEMPO_HP_MBL_786×880_Trittico.jpg";
import armature from "../assets/Home/SEMPO_HP_DSK_MBL_730×800_Armature.jpg";
import flussoOleografico from "../assets/Home/SEMPO_HP_DSK_MBL_730×800_FlussoOleografico.jpg";
import sorgente from "../assets/Home/SEMPO_HP_DSK_MBL_730×800_Sorgente.jpg";
import lcmd from "../assets/Home/SEMPO_HP_DSK_MBL_730×800_Lavorareconlamorteèdifficile.jpg";
import LazyImage from "../Components/LazyImage/LazyImage.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="home-container">
        <Link to="/tempio" className="div-home">
          <picture>
            <source media="(max-width: 730px)" srcSet={tempioMBL} />
            <LazyImage src={tempioDSK} alt="tempio" />
          </picture>
          <div className="overlay">
            <h1>Tempio</h1>
            <p>Cascina Cappuccina - Melegnano</p>
          </div>
        </Link>

        <Link to="/sfilata" className="div-home">
          <picture>
            <source media="(max-width: 730px)" srcSet={sfilataMBL} />
            <LazyImage src={sfilataDSK} alt="sfilata" />
          </picture>
          <div className="overlay">
            <h1>Sfilata Briup</h1>
            <p>Cascina Cappuccina - Melegnano</p>
          </div>
        </Link>

        <div className="div-home2">
          <Link to="/giudizio" className="div-home2-img1">
            <LazyImage src={giudizio} alt="giudizio" />
            <div className="overlay">
              <h1>Il Giudizio</h1>
              <p>Cascina Cappuccina - Melegnano</p>
            </div>
          </Link>

          <Link to="/ecoLuminoso" className="div-home2-img1">
            <LazyImage src={ecoLuminoso} alt="eco" />
            <div className="overlay">
              <h1>Eco Luminoso</h1>
              <p>Cascina Cappuccina - Melegnano</p>
            </div>
          </Link>
        </div>

        <Link to="/tabernacolo" className="div-home">
          <picture>
            <source media="(max-width: 730px)" srcSet={tabernacoloMBL} />
            <LazyImage src={tabernacoloDSK} alt="tabernacolo" />
          </picture>
          <div className="overlay">
            <h1>Tabernacolo</h1>
            <p>Cascina Cappuccina - Melegnano</p>
          </div>
        </Link>

        <Link to="/muovoMusica" className="div-home">
          <picture>
            <source media="(max-width: 730px)" srcSet={musicaMBL} />
            <LazyImage src={musicaDSK} alt="muovoMusica" />
          </picture>
          <div className="overlay">
            <h1>Muovo Musica</h1>
            <p>Cascina Cappuccina - Melegnano</p>
          </div>
        </Link>

        <div className="div-home2">
          <Link to="/sorgente" className="div-home2-img1">
            <LazyImage src={sorgente} alt="sorgente" />
            <div className="overlay">
              <h1>Sorgente</h1>
              <p>Cascina Cappuccina - Melegnano</p>
            </div>
          </Link>

          <Link to="/armature" className="div-home2-img1">
            <LazyImage src={armature} alt="armature" />
            <div className="overlay">
              <h1>Armature</h1>
              <p>Cascina Cappuccina - Melegnano</p>
            </div>
          </Link>
        </div>

        <div className="div-home2">
          <Link to="/flussoOleografico" className="div-home2-img1">
            <LazyImage src={flussoOleografico} alt="flussoOleografico" />
            <div className="overlay">
              <h1>Flusso Oleografico</h1>
              <p>Cascina Cappuccina - Melegnano</p>
            </div>
          </Link>

          <Link to="/lcmd" className="div-home2-img1">
            <LazyImage src={lcmd} alt="lcmd" />
            <div className="overlay">
              <h1>Lavorare con la morte è difficile</h1>
              <p>Cascina Cappuccina - Melegnano</p>
            </div>
          </Link>
        </div>

        <Link to="/trittico" className="div-home">
          <picture>
            <source media="(max-width: 730px)" srcSet={tritticoMBL} />
            <LazyImage src={tritticoDSK} alt="trittico" />
          </picture>
          <div className="overlay">
            <h1>Trittico</h1>
            <p>Cascina Cappuccina - Melegnano</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
