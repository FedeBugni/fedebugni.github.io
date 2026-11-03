import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Home from "./pages/Home.jsx";
import Tempio from "./pages/Tempio.jsx";
import Sfilata from "./pages/Sfilata.jsx";
import Giudizio from "./pages/Giudizio.jsx";
import EcoLuminoso from "./pages/EcoLuminoso.jsx";
import Tabernacolo from "./pages/Tabernacolo.jsx";
import Sorgente from "./pages/Sorgente.jsx";
import Lcmd from "./pages/Lcmd.jsx";
import MuovoMusica from "./pages/MuovoMusica.jsx";
import NoPage from "./pages/NoPage.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tempio" element={<Tempio />} />
        <Route path="/sfilata" element={<Sfilata />} />
        <Route path="/giudizio" element={<Giudizio />} />
        <Route path="/ecoLuminoso" element={<EcoLuminoso />} />
        <Route path="/tabernacolo" element={<Tabernacolo />} />
        <Route path="/sorgente" element={<Sorgente />} />
        <Route path="/lcmd" element={<Lcmd />} />
        <Route path="/muovoMusica" element={<MuovoMusica />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
