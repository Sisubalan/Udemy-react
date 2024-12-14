import one from "../assets/images/sale image.jpg"

function Saleimage() {
    return (
        <div class="sale-image">
            <img src={one} alt="one"></img>
            <div class="sale-image__offer">
                <h2>Udemy Flash Sale! 24 hours To Save.</h2>
                <p>Get the top Courses for just 499. Just ond day to save but a lifetime to learn</p>
            </div>
        </div>
            )
}

export default Saleimage