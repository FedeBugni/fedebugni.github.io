import { Routes, Route  } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contacts from './pages/Contacts.jsx'
import Giudizio from './pages/Giudizio.jsx'
import Morte from './pages/Morte.jsx'
import Sfilata from './pages/Sfilata.jsx'
import Archive from './pages/Archive.jsx'
import Tempio from './pages/Tempio.jsx'
import EcoLuminoso from './pages/EcoLuminoso.jsx'
import NoPage from './pages/NoPage.jsx'
import Footer from './components/Footer/Footer.jsx'
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tempio' element={<Tempio />} />
          <Route path='/ecoLuminoso' element={<EcoLuminoso />} />
          <Route path='/giudizio' element={<Giudizio />} />
          <Route path='/morte' element={<Morte />} />
          <Route path='/sfilata' element={<Sfilata />} />
          <Route path='/archive' element={<Archive />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App