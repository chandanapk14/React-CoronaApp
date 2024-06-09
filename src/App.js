import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddDetails from './components/AddDetails';
import Search from './components/Search';
import ViewAll from './components/ViewAll';
import DeleteDetails from './components/DeleteDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddDetails/>}/>
        <Route path="/Search" element={<Search/>}/>
        <Route path="/Delete" element={<DeleteDetails/>}/>
        <Route path="/View" element={<ViewAll/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
