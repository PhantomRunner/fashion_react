import styles from './Card.module.css'
import arrowIcon from './../../fashion-images/icons/arrow.svg'

const Card = (props)=> {
    return (
        <div className={styles.card}>

            <a href="#!" className={styles.card__link}></a>

            <img className={styles.card__img} src={props.img} alt="Card"/>

            <div className={styles.card__body}>

                <div className={styles.card__text}>

                    <div className={styles.title}>{props.title}</div>
                    <div className={styles.muted}>Explore Now!</div>

                </div>

                <div className={styles.card__icon}>

                    <img src={arrowIcon} alt="Arrow"/>

                </div>

            </div>
        </div>
    )
}

export default Card;