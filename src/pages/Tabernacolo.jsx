import tabernacoloDSK1 from "../assets/Tabernacolo/SEMPO_HP_DSK_1480×700_Tabernacolo_01a.jpg";
import tabernacoloMBL1 from "../assets/Tabernacolo/SEMPO_HP_MBL_730×800_Tabernacolo_01a.jpg";
import tabernacolo1 from "../assets/Tabernacolo/SEMPO_HP_DSK_MBL_730×800_Tabernacolo_01.jpg";
import tabernacolo2 from "../assets/Tabernacolo/SEMPO_HP_DSK_MBL_730×800_Tabernacolo_02.jpg";
import tabernacolo3 from "../assets/Tabernacolo/SEMPO_HP_DSK_MBL_730×800_Tabernacolo_03.jpg";
import tabernacolo4 from "../assets/Tabernacolo/SEMPO_HP_DSK_MBL_730×800_Tabernacolo_04.jpg";
import tabernacoloDSK2 from "../assets/Tabernacolo/SEMPO_HP_DSK_1480×700_Tabernacolo_02a.jpg";
import tabernacoloMBL2 from "../assets/Tabernacolo/SEMPO_HP_MBL_730×800_Tabernacolo_02a.jpg";
import tabernacolo5 from "../assets/Tabernacolo/SEMPO_HP_DSK_MBL_730×800_Tabernacolo_05.jpg";
import tabernacolo6 from "../assets/Tabernacolo/SEMPO_HP_DSK_MBL_730×800_Tabernacolo_06.jpg";
import tabernacolo7 from "../assets/Tabernacolo/SEMPO_HP_DSK_MBL_730×800_Tabernacolo_07.jpg";
import tabernacolo8 from "../assets/Tabernacolo/SEMPO_HP_DSK_MBL_730×800_Tabernacolo_08.jpg";
import LazyImage from "../Components/LazyImage/LazyImage.jsx";

const Tabernacolo = () => {
  return (
    <div className="container">
      <div className="testo">
        <div className="titolo">
          <h2>Tabernacolo</h2>
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
          <source media="(max-width: 786px)" srcSet={tabernacoloMBL1} />
          <LazyImage src={tabernacoloDSK1} alt="tabernacolo" />
        </picture>
      </div>
      <div className="img2">
        <div>
          <LazyImage src={tabernacolo1} alt="tabernacolo" />
        </div>
        <div>
          <LazyImage src={tabernacolo2} alt="tabernacolo" />
        </div>
      </div>
      <div className="img2">
        <div>
          <LazyImage src={tabernacolo3} alt="tabernacolo" />
        </div>
        <div>
          <LazyImage src={tabernacolo4} alt="tabernacolo" />
        </div>
      </div>
      <div className="img1">
        <picture>
          <source media="(max-width: 786px)" srcSet={tabernacoloMBL2} />
          <LazyImage src={tabernacoloDSK2} alt="tabernacolo" />
        </picture>
      </div>
      <div className="img2">
        <div>
          <LazyImage src={tabernacolo5} alt="tabernacolo" />
        </div>
        <div>
          <LazyImage src={tabernacolo6} alt="tabernacolo" />
        </div>
      </div>
      <div className="img2">
        <div>
          <LazyImage src={tabernacolo7} alt="tabernacolo" />
        </div>
        <div>
          <LazyImage src={tabernacolo8} alt="tabernacolo" />
        </div>
      </div>
    </div>
  );
};

export default Tabernacolo;
