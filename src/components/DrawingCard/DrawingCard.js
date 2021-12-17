import { Link } from "react-router-dom";
import styles from "./DrawingCard.module.css";

import heartIcon from "../../images/Heart-icon.png";

export default function DrawingCard({
    imageUrl,
    imageId,
    title,
    authorName,
    authorAge,
    likes
}) {
    return (
        <li className={styles.card}>
            <strong className={styles.strongText}>{title}</strong>
            <Link to={`/drawing/${imageId}`}>
                <img src={imageUrl} alt="" className={styles.imageBorder} />
            </Link>
            <div className={styles.info}>
                <small className={styles.subtitle}>{`${authorName}, ${authorAge}`}</small>
                <small className={styles.likes}>
                    {likes}
                    <img src={heartIcon} className={styles.icon} />
                </small>
            </div>
        </li>
    );
};