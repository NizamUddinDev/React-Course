import profilePic from '../assets/pupa.jpeg';
// import {card, image, title, description} from '../styles/Card.css';
import style from '../styles/Card.module.css';

const Card = () => {
    return (
        <div className={style.card}>
            <img className={style.image} src={profilePic} alt="profile picture" />
            <h2 className={style.title}>Parkash Kumar</h2>
            <p className={style.description}>
                Hi there, this is Parkash Kumar being a computer scientist
                I worked on variance web based projects using latest techs.
            </p>
        </div>
    )
}

export default Card;