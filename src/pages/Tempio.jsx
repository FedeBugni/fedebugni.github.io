import tempioDSK from "../assets/Tempio/SEMPO_HP_DSK_1480×700_Tempio.jpg";
import tempioMBL from "../assets/Tempio/SEMPO_HP_MBL_730×800_Tempio_01a.jpg";
import tempio1 from "../assets/Tempio/SEMPO_HP_DSK_MBL_730×800_Tempio_01.jpg";
import tempio2 from "../assets/Tempio/SEMPO_HP_DSK_MBL_730×800_Tempio_02.jpg";
import tempio3 from "../assets/Tempio/SEMPO_HP_DSK_MBL_730×800_Tempio_03.jpg";
import tempio4 from "../assets/Tempio/SEMPO_HP_DSK_MBL_730×800_Tempio_04.jpg";
import LazyImage from "../Components/LazyImage/LazyImage.jsx";

const tempio = () => {
  return (
    <div className="container">
      <div className="testo">
        <div className="titolo">
          <h2>Tempio</h2>
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
          <source media="(max-width: 786px)" srcSet={tempioMBL} />
          <LazyImage src={tempioDSK} alt="Tempio" />
        </picture>
      </div>
      <div className="img2">
        <div>
          <LazyImage src={tempio2} alt="tempio" />
        </div>
        <div>
          <LazyImage src={tempio3} alt="tempio" />
        </div>
      </div>
    </div>
  );
};

export default tempio;
