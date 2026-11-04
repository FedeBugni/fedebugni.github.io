import lcmdDSK1 from "../assets/LCMD/SEMPO_HP_DSK_1480×700_LCMD_01a.jpg";
import lcmdMBL1 from "../assets/LCMD/SEMPO_HP_MBL_730×800_LCMD_01a.jpg";
import lcmd1 from "../assets/LCMD/SEMPO_HP_DSK_MBL_730×800_LCMD_01.jpg";
import lcmd2 from "../assets/LCMD/SEMPO_HP_DSK_MBL_730×800_LCMD_02.jpg";
import lcmd5 from "../assets/LCMD/SEMPO_HP_DSK_MBL_730×800_LCMD_03-1.jpg";
import lcmd3 from "../assets/LCMD/SEMPO_HP_DSK_MBL_730×800_LCMD_03.jpg";
import lcmdDSK2 from "../assets/LCMD/SEMPO_HP_DSK_1480×700_LCMD_02a.jpg";
import lcmdMBL2 from "../assets/LCMD/SEMPO_HP_MBL_730×800_LCMD_02a.jpg";
import lcmd6 from "../assets/LCMD/SEMPO_HP_DSK_MBL_730×800_LCMD_04-1.jpg";
import lcmd4 from "../assets/LCMD/SEMPO_HP_DSK_MBL_730×800_LCMD_04.jpg";
import LazyImage from "../Components/LazyImage/LazyImage.jsx";

const Lcmd = () => {
  return (
    <div className="container">
      <div className="testo">
        <div className="titolo">
          <h2>Lavorare con la morte è difficile</h2>
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
          <source media="(max-width: 730px)" srcSet={lcmdMBL1} />
          <LazyImage src={lcmdDSK1} alt="lcmd" />
        </picture>
      </div>
      <div className="img2">
        <div>
          <LazyImage src={lcmd1} alt="lcmd" />
        </div>
        <div>
          <LazyImage src={lcmd2} alt="lcmd" />
        </div>
      </div>
      <div className="img2">
        <div>
          <LazyImage src={lcmd3} alt="lcmd" />
        </div>
        <div>
          <LazyImage src={lcmd4} alt="lcmd" />
        </div>
      </div>

      <div className="esposizione">
        <p>Briup</p>
      </div>

      <div className="img1">
        <picture>
          <source media="(max-width: 730px)" srcSet={lcmdMBL2} />
          <LazyImage src={lcmdDSK2} alt="lcmd" />
        </picture>
      </div>
      <div className="img2">
        <div>
          <LazyImage src={lcmd5} alt="lcmd" />
        </div>
        <div>
          <LazyImage src={lcmd6} alt="lcmd" />
        </div>
      </div>

      <div className="esposizione">
        <p>Villa Cabella</p>
      </div>
    </div>
  );
};

export default Lcmd;
