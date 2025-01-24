import { Link } from "react-router-dom";


export default function Navbar(){
    return(
        <nav>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/BlogCharacters"><li>Blog</li></Link>
            </ul>
        </nav>
    )
}