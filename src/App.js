import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UserList from './components/UserList';
import Albums from './components/Albums';
import Photos from './components/Photos';

function App() { 

  return (
    <BrowserRouter>
      <div className="App">
        <Link to='/'>List of users</Link>      
        <Routes>
          <Route path='/' element={<UserList />}></Route>
          <Route path='/:id' element={<Albums />}></Route>
          <Route path='/:id/:index' element={<Photos />}></Route>                    
        </Routes>    
      </div>
    </BrowserRouter>
  );  
}

export default App;
