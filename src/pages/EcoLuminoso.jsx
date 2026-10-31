import ecoDSK from "../assets/Eco Luminoso/SEMPO_HP_DSK_1480×700_EcoLuminoso.jpg";
import ecoMBL from "../assets/Eco Luminoso/SEMPO_HP_MBL_730×800_EcoLuminoso_01a.jpg";
import eco1 from "../assets/Eco Luminoso/SEMPO_HP_DSK_MBL_730×800_EcoLuminoso_01.jpg";
import eco2 from "../assets/Eco Luminoso/SEMPO_HP_DSK_MBL_730×800_EcoLuminoso_02.jpg";
import eco3 from "../assets/Eco Luminoso/SEMPO_HP_DSK_MBL_730×800_EcoLuminoso_03.jpg";
import eco4 from "../assets/Eco Luminoso/SEMPO_HP_DSK_MBL_730×800_EcoLuminoso_04.jpg";
import LazyImage from "../Components/LazyImage/LazyImage.jsx";

const ecoLuminoso = () => {
  return (
    <div className="container">
      <div className="testo">
        <div className="titolo">
          <h2>Eco Luminoso</h2>
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

      <div className="video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/tsesPvl_jcg?si=1T0b7vwIj8W4bhQ6&controls=0&showinfo=0&rel=0&modestbranding=1&autoplay=1"
          allow="autoplay"
          frameBorder="0"
          title="Eco Luminoso"
        ></iframe>
      </div>

      <div className="img1">
        <LazyImage src={eco1} alt="eco" />
      </div>
    </div>
  );
};

export default ecoLuminoso;
