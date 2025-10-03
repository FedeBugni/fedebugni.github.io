import eco1 from '../assets/SempoStudio-ECO_LUMINOSO-01.jpeg'
import videoFile from '../assets/SempoStudio-ECO_LUMINOSO.mp4' // Aggiungi questo import

const ecoLuminoso = () => {
    return (
        <div className='container'>
            <div className='testo'>
                <div className='titolo'>
                    <h2>Eco Luminoso</h2>
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
                <img src={eco1} alt='eco'/>
            </div>
            <div className='video1'>
                <video 
                    controls 
                    width="100%" 
                    autoPlay 
                    muted 
                    loop
                >
                    <source src={videoFile} type="video/mp4" />
                    Il tuo browser non supporta il tag video.
                </video>
            </div>
        </div>
    )
}

export default ecoLuminoso