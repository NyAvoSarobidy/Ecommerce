import { Routes, Route } from 'react-router-dom';
import Main from './main';
import routes from './routes/routes';

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Main />}>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
   
  );
}

export default App;
