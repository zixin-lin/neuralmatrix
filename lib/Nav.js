import Link from 'next/link'
//import Image from 'next/dist/client/image';
import {useContext} from 'react'
import AuthContext from '../stores/authContext';
const Navbar = () => {
    const user = useContext(AuthContext)
    return (  
        <nav>
            <div className= "logo">
              <img src = "/dog.jpg" width = {128} height = {77}/>
            </div>
            <Link href = "/"><a>Home page</a></Link>
            <Link href = "/about"><a>About page</a></Link>
            <Link href = "/ninjias"><a>Ninjia listing page</a></Link>
            <Link onClick={login} className="btn">Login/Signup</Link>
        </nav>
    );
}
 
export default Navbar;