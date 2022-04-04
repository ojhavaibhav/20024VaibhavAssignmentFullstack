import React from "react"
import { Link} from "react-router-dom"

function HomeComp() {
    return(
        <>
        <p>This is my Home component</p>
        <nav>
            <ul>
                <li><Link to = {"/firstcomp"}>firstcomp</Link></li>
                <li><Link to={"/secondcomp"}>secondcomp</Link></li>
                
            </ul>
        </nav>
        
        </>
    )
}

export default HomeComp