import armatureDSK1 from "../assets/Armature/SEMPO_HP_DSK_1480×700_Armature.jpg";
import armatureMBL1 from "../assets/Armature/SEMPO_HP_MBL_730×800_Armature_01a.jpg";
import armature1 from "../assets/Armature/SEMPO_HP_DSK_MBL_730×800_Armature_01.jpg";
import armature2 from "../assets/Armature/SEMPO_HP_DSK_MBL_730×800_Armature_02.jpg";
import armatureDSK2 from "../assets/Armature/SEMPO_HP_DSK_1480×700_Armature-1.jpg";
import armatureMBL2 from "../assets/Armature/SEMPO_HP_MBL_730×800_Armature_01b.jpg";
import armature3 from "../assets/Armature/SEMPO_HP_DSK_MBL_730×800_Armature_03.jpg";
import armature4 from "../assets/Armature/SEMPO_HP_DSK_MBL_730×800_Armature_04.jpg";
import armature5 from "../assets/Armature/SEMPO_HP_DSK_MBL_730×800_Armature_05.jpg";
import armature6 from "../assets/Armature/SEMPO_HP_DSK_MBL_730×800_Armature_06.jpg";
import LazyImage from "../Components/LazyImage/LazyImage.jsx";

const Armature = () => {
  return (
    <div className="container">
      <div className="testo">
        <div className="titolo">
          <h2>Armature</h2>
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
          <source media="(max-width: 730px)" srcSet={armatureMBL1} />
          <LazyImage src={armatureDSK1} />
        </picture>
      </div>

      <div className="img2">
        <div>
          <LazyImage src={armature1} />
        </div>
        <div>
          <LazyImage src={armature2} />
        </div>
      </div>

      <div className="img1">
        <picture>
          <source media="(max-width: 730px)" srcSet={armatureMBL2} />
          <LazyImage src={armatureDSK2} />
        </picture>
      </div>

      <div className="img2">
        <div>
          <LazyImage src={armature3} />
        </div>
        <div>
          <LazyImage src={armature4} />
        </div>
      </div>
      <div className="img2">
        <div>
          <LazyImage src={armature5} />
        </div>
        <div>
          <LazyImage src={armature6} />
        </div>
      </div>

      <div className="esposizione">
        <p>Armature</p>
      </div>
    </div>
  );
};

export default Armature;
