import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Beranda from './pages/beranda';
import Kontak from './pages/kontak';
import Tentang from './pages/tentang';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Beranda/>} />
        <Route path='/kontak' element={<Kontak/>}/>
        <Route path='/tentang' element={<Tentang/>}/>
      </Routes>
    </Router>
  )
}

export default App