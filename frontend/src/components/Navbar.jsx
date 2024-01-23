import {Link} from 'react-router-dom'
import '../../src/index.css'
function Navbar() {
  return (
    <header>
    <div className="container">
        <Link to="/">
            <h1>Home</h1>
        </Link>
        <Link to="/add">
            <h1>Add Vendor</h1>
        </Link>
        <Link to="/vendors">
            <h1>Vendors</h1>
        </Link>
    </div>
    </header>
  )
}

export default Navbar