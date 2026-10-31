import sfilata1DSK from "../assets/Sfilata/SEMPO_HP_DSK_1480×700_Sfilata.jpg";
import sfilata1MBL from "../assets/Sfilata/SEMPO_HP_MBL_730×800_Sfilata_01a.jpg";
import sfilata2 from "../assets/Sfilata/SEMPO_HP_DSK_MBL_730×800_Sfilata_01.jpg";
import sfilata3 from "../assets/Sfilata/SEMPO_HP_DSK_MBL_730×800_Sfilata_02.jpg";
import sfilata4 from "../assets/Sfilata/SEMPO_HP_DSK_MBL_730×800_Sfilata_03.jpg";
import sfilata5 from "../assets/Sfilata/SEMPO_HP_DSK_MBL_730×800_Sfilata_04.jpg";
import LazyImage from "../Components/LazyImage/LazyImage.jsx";

const sfilata = () => {
  return (
    <div className="container">
      <div className="testo">
        <div className="titolo">
          <h2>Fashion Show</h2>
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
          src="https://www.youtube.com/embed/9dzlndl7W1w?si=uTYjJwtUYk-r0J7n&controls=0&showinfo=0&rel=0&modestbranding=1&autoplay=1"
          allow="autoplay"
          frameBorder="0"
        ></iframe>
      </div>

      <div className="img1">
        <picture>
          <source media="(max-width: 786px)" srcSet={sfilata1MBL} />
          <LazyImage src={sfilata1DSK} alt="Sfilata" />
        </picture>
      </div>

      <div className="img2">
        <div>
          <LazyImage src={sfilata2} alt="sfilata" />
        </div>
        <div>
          <LazyImage src={sfilata3} alt="sfilata" />
        </div>
        <div>
          <LazyImage src={sfilata4} alt="sfilata" />
        </div>
        <div>
          <LazyImage src={sfilata5} alt="sfilata" />
        </div>
      </div>
    </div>
  );
};

export default sfilata;
