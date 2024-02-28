import { BrowserRouter } from 'react-router-dom';
import './App.css';
import "./styles/reset.css"
import { MyRoutes } from './router/MyRoutes';

function App() {
  return (
    <div className='App'>
        <BrowserRouter>
        <MyRoutes/>
        </BrowserRouter>
    </div>
  );
}

export default App;
