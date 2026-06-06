import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import QuienesSomos from '../pages/QuienesSomos';
import Formulario from '../pages/Formulario';
import Personaje from '../pages/Personaje';
import Personajepikachu from "../pages/PersonajePikachu";
import PersonajeDragonBallZ from '../pages/PersonajeDragonBallz';

function AppRouter(){
    return(
        <BrowserRouter>
        <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/quienessomos" element={<QuienesSomos />} />
                    <Route path="/formulario" element={<Formulario />} />
                    <Route path="/personaje" element={<Personaje />} />
                    <Route path="/personajepikachu" element={<Personajepikachu />} />
                    <Route path="/personajedragonBallz" element={<PersonajeDragonBallZ />} />
                </Routes>
            </main>
         <Footer />
        </BrowserRouter>
    );
}
export default AppRouter;