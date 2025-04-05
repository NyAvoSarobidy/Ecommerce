import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './composants/navbar';

function Main() {
  const location = useLocation();

  // Conditionner l'affichage du Navbar en fonction de la route
  const isHomePage = location.pathname === '/'; // Vérifie si l'URL est la page d'accueil

  return (
    <>
      {!isHomePage && <Navbar />} {/* Affiche le Navbar sauf sur la page d'accueil */}
      <main>
        <Outlet /> {/* Affiche la page en fonction de la route */}
      </main>
    </>
  );
}

export default Main;
