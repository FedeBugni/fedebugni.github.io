import musicaDSK1 from "../assets/MuovoMusica/SEMPO_HP_DSK_1480×700_MuovoMusica_01.jpg";
import musicaMBL1 from "../assets/MuovoMusica/SEMPO_HP_MBL_730×800_MuovoMusica_01a.jpg";
import musicaDSK2 from "../assets/MuovoMusica/SEMPO_HP_DSK_1480×700_MuovoMusica_02.jpg";
import musicaMBL2 from "../assets/MuovoMusica/SEMPO_HP_MBL_730×800_MuovoMusica_02b.jpg";
import musica1 from "../assets/MuovoMusica/SEMPO_HP_DSK_MBL_730×800_MuovoMusica_01.jpg";
import musica2 from "../assets/MuovoMusica/SEMPO_HP_DSK_MBL_730×800_MuovoMusica_02.jpg";
import LazyImage from "../Components/LazyImage/LazyImage.jsx";

const MuovoMusica = () => {
  return (
    <div className="container">
      <div className="testo">
        <div className="titolo">
          <h2>Muovo Musica</h2>
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
          <source media="(max-width: 786px)" srcSet={musicaMBL1} />
          <LazyImage src={musicaDSK1} alt="musica" />
        </picture>
      </div>
      <div className="img1">
        <picture>
          <source media="(max-width: 786px)" srcSet={musicaMBL2} />
          <LazyImage src={musicaDSK2} alt="musica" />
        </picture>
      </div>
      <div className="img2">
        <div>
          <LazyImage src={musica1} alt="musica" />
        </div>
        <div>
          <LazyImage src={musica2} alt="musica" />
        </div>
      </div>
    </div>
  );
};

export default MuovoMusica;
