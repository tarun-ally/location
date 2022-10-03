import './App.scss';

import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';

import img_1 from './media/sean-stratton-ObpCE_X3j6U-unsplash.jpg'

import Dashboard from './components/dashboard';
import NavBar from './components/dashboard/navBar';
import AddingData from './components/dashboard/newStateAndLocation';
import Update from './components/update';
import Delete from './components/delete';

function App() {
  return (
    <><div className='dashboard' >
      <NavBar />

    </div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/adding-data" exact element={<AddingData />} />
          <Route path="/update-data" exact element={<Update />} />
          <Route path="/delete-data" exact element={<Delete />} />



        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
