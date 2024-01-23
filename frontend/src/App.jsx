import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Vendors from '../pages/Vendors'
import VendorForms from './components/VendorForms'
import VendorDetails from './components/VendorDetails'
import VendorEdit from './components/VendorEdit'
import Landing from '../pages/Landing'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className="pages">
          <Routes>
            <Route 
              path='/'
              element={<Landing/>}
            />
            <Route 
              path='/vendors'
              element={<Vendors/>}
            />
            <Route 
              path='/add'
              element={<VendorForms/>}
            />
            <Route 
              path='/bank/:id'
              element={<VendorDetails/>}
            />
            <Route
              path='/edit/:id'
              element={<VendorEdit/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App