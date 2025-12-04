import { Link } from "react-router-dom"
import { Nav } from "../Nav/Nav"


export const Header=()=>{
    return(
        <header>
            <h2><Link to='/'>Electronic Home</Link>
            </h2><Nav/>
        </header>
    )
}