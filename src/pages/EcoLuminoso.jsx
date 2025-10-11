import eco1 from '../assets/SempoStudio-ECO_LUMINOSO-01.jpeg'

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
            <div className='video'>
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/k7FQCVYaAds?si=Nh80nvzwI0iNO-jU&controls=0&showinfo=0&rel=0&modestbranding=1&autoplay=1"
                    allow="autoplay"
                    frameBorder="0"
                >
                </iframe>
            </div>
        </div>
    )
}

export default ecoLuminoso