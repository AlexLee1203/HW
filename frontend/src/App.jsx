import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Teams from './pages/Teams';
import TeamDetail from './pages/TeamDetail';
import Schedule from './pages/Schedule';
import Standings from './pages/Standings';
import styles from './App.module.css';

export default function App() {
  return (
    <BrowserRouter basename="/HW">
      <div className={styles.layout}>
        <Navbar />
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/teams/:code" element={<TeamDetail />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/standings" element={<Standings />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
