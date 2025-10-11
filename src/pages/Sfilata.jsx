import sfilata1 from '../assets/SempoStudio-Sfilata-Briup.jpg'
import sfilata2 from "../assets/SempoStudio - Sfilata - Briup 05.jpg";
import sfilata3 from "../assets/SempoStudio - Sfilata - Briup 02.jpg";
import sfilata4 from "../assets/SempoStudio - Sfilata - Briup 01.jpg";
import sfilata5 from "../assets/SempoStudio - Sfilata - Briup 07.jpg";

const sfilata = () => {
    return (
        <div className='container'>
            <div className='testo'>
                <div className='titolo'>
                    <h2>Fashion Show</h2>
                    <p>Cascina Cappuccina - Melegnano</p>
                </div>
                <div className='descrizione'>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                </div>
            </div>
            <div className='img1'>
                <img src={sfilata1} alt='sfilata'/>
            </div>
            <div className='video'>
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/hNnYeEhpY9s?si=Nh80nvzwI0iNO-jU&controls=0&showinfo=0&rel=0&modestbranding=1&autoplay=1"
                    allow="autoplay"
                    frameBorder="0"
                >
                </iframe>
            </div>
            <div className='img2'>
                <div>
                    <img src={sfilata2} alt='sfilata'/>
                </div>
                <div>
                    <img src={sfilata3} alt='sfilata'/>
                </div>
                <div>
                    <img src={sfilata4} alt='sfilata'/>
                </div>
                <div>
                    <img src={sfilata5} alt='sfilata'/>
                </div>
            </div>
        </div>
    )
}

export default sfilata