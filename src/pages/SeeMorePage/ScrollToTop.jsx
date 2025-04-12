import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Прокручиваем страницу наверх при смене маршрута
  }, [location]); // Срабатывает каждый раз при изменении маршрута

  return null;
}

export default ScrollToTop;
