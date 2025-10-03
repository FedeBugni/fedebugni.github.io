import giudizio1 from '../assets/SempoStudio-Giudizio-ArtDate 07.jpg'
import giudizio2 from '../assets/SempoStudio-Giudizio-ArtDate 03.jpg'
import giudizio3 from '../assets/SempoStudio-Giudizio-ArtDate 04.jpg'
import giudizio4 from '../assets/SempoStudio-Giudizio-ArtDate 02.jpg'
import giudizio5 from '../assets/SempoStudio-Giudizio-ArtDate 05.jpg'
import giudizio6 from '../assets/SempoStudio-Giudizio-ArtDate 01.jpg'
import giudizio7 from '../assets/SempoStudio-Giudizio-ArtDate 06.jpg'

const Giudizio = () => {
    return (
        <div className='container'>
            <div className='testo'>
                <div className='titolo'>
                    <h2>Giudizio</h2>
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
                <img src={giudizio1} alt='giudizio'/>
            </div>
            <div className='img2'>
                <div>
                    <img src={giudizio2} alt='giudizio'/>
                </div>
                <div>
                    <img src={giudizio3} alt='giudizio'/>
                </div>
                <div>
                    <img src={giudizio4} alt='giudizio'/>
                </div>
                <div>
                    <img src={giudizio5} alt='giudizio'/>
                </div>
                <div>
                    <img src={giudizio6} alt='giudizio'/>
                </div>
                <div>
                    <img src={giudizio7} alt='giudizio'/>
                </div>
            </div>

        </div>
    )
}

export default Giudizio