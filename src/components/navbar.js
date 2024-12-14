import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser, faBell, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar()
{
    return(
        <div class="Navbar">

        <div class="Navbar__s1">
            <h1 class="Navbar__s1__tittle">Udemy</h1>
        </div>

        <div class="Navbar__s2">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input placeholder="Search for anything here. tech, Business, Art..."></input>
        </div>

        <div class="Navbar__s3">
            <p>Courses</p>

             <div class="mylearning">
                <p>My Learning</p>
                <div class="mylearning__popup">
                    <p>You did not purchase anything yet</p>
                </div>
             </div>
             <FontAwesomeIcon icon={faCartShopping} />
            <FontAwesomeIcon icon={faBell} />
            <FontAwesomeIcon icon={faUser} />
        </div>

        <div class="Navbar__s4">
        <FontAwesomeIcon icon={faBars} />
        </div>


    </div>

    )
}

export default Navbar
