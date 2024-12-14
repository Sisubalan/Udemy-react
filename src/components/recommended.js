import one from "../assets/images/c1.jpg"
import two from "../assets/images/c2.jpg"
import three from "../assets/images/c3.jpg"
import four from "../assets/images/c4.jpg"

function Recommended()
{
    return(
        <div class="Recommended">
    <h1 class="Recommended__tittle">Recommended For You</h1>
    <p>Pick The BestFit</p>
    <div class="Recommended__container">        

    <div class="Course-card">
        <img src={one} alt="one"></img>
        <h3>2023 Python Data Visualisation Masterclass</h3>
        <p>Col Steele</p>
        <p>3.9 ⭐⭐⭐</p>
        <p>₹449 <del>1999</del></p>
    </div>

    <div class="Course-card">
        <img src={two} alt="two"></img>
        <h3>Basic to Advance Java Core Training</h3>
        <p>Col Steele</p>
        <p>4.9⭐⭐⭐⭐</p>
        <p>₹359 <del>1999</del></p>
    </div>

    <div class="Course-card">
        <img src={three} alt="three"></img>
        <h3>Web Development Bootcamp 2023 | Advance </h3>
        <p>Col Steele</p>
        <p>4.9⭐⭐⭐⭐</p>
        <p>₹899 <del>1999</del></p>
    </div>

    <div class="Course-card">
        <img src={four} alt="four"></img>
        <h3>Master UI/UX Designing With Figma</h3>
        <p>Col Steele</p>
        <p>3.5⭐⭐⭐</p>
        <p>₹499 <del>1999</del></p>
    </div>
</div>

</div>
    )
}

export default Recommended