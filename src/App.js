import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routs } from './routes/Router/Router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routs}>
      </RouterProvider>
    </div>
  );
}

export default App;
