import img_avatar from "../../assets/img_avatar.png"
import "./Card.css"


function Card() {
    return (
        <div className="card">
            <img src={img_avatar} alt="Avatar" className="card-img"/>
            <h2 className="card-title">Bro Code</h2>
            <p className="card-text">I make youtube videos about programming and play video games.</p>
        </div>
    )
}

export default Card
