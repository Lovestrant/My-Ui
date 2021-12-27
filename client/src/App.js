import Homepage from './files/Homepage';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<Homepage />}></Route>
        
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
