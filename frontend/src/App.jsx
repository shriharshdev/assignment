import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from './components/Navbar'
import VendorForms from './components/VendorForms'
import VendorDetails from './components/VendorDetails'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className="pages">
          <Routes>
            <Route 
              path='/'
              element={<Home/>}
            />
            <Route 
              path='/add'
              element={<VendorForms/>}
            />
            <Route 
              path='bank/:id'
              element={<VendorDetails/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App