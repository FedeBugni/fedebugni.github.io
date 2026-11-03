import sorgenteDSK from "../assets/Sorgente/SEMPO_HP_DSK_1480×700_Sorgente.jpg";
import sorgenteMBL from "../assets/Sorgente/SEMPO_HP_MBL_730×800_Tempio_01a.jpg";
import sorgente1 from "../assets/Sorgente/SEMPO_HP_DSK_MBL_730×800_Sorgente_01.jpg";
import sorgente2 from "../assets/Sorgente/SEMPO_HP_DSK_MBL_730×800_Sorgente_02.jpg";
import sorgente3 from "../assets/Sorgente/SEMPO_HP_DSK_MBL_730×800_Sorgente_03.jpg";
import sorgente4 from "../assets/Sorgente/SEMPO_HP_DSK_MBL_730×800_Sorgente_04.jpg";
import sorgente5 from "../assets/Sorgente/SEMPO_HP_DSK_MBL_730×800_Sorgente_05.jpg";
import sorgente6 from "../assets/Sorgente/SEMPO_HP_DSK_MBL_730×800_Sorgente_06.jpg";
import LazyImage from "../Components/LazyImage/LazyImage.jsx";

const Sorgente = () => {
  return (
    <div className="container">
      <div className="testo">
        <div className="titolo">
          <h2>Sorgente</h2>
          <p>Cascina Cappuccina - Melegnano</p>
        </div>
        <div className="descrizione">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. It is a
            long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout.
          </p>
        </div>
      </div>
      <div className="img1">
        <picture>
          <source media="(max-width: 786px)" srcSet={sorgenteMBL} />
          <LazyImage src={sorgenteDSK} alt="sorgente" />
        </picture>
      </div>
      <div className="img2">
        <div>
          <LazyImage src={sorgente1} alt="sorgente" />
        </div>
        <div>
          <LazyImage src={sorgente2} alt="sorgente" />
        </div>
      </div>
      <div className="img2">
        <div>
          <LazyImage src={sorgente3} alt="sorgente" />
        </div>
        <div>
          <LazyImage src={sorgente4} alt="sorgente" />
        </div>
      </div>
      <div className="img2">
        <div>
          <LazyImage src={sorgente5} alt="sorgente" />
        </div>
        <div>
          <LazyImage src={sorgente6} alt="sorgente" />
        </div>
      </div>
    </div>
  );
};

export default Sorgente;
