import { Link } from "react-router-dom";
import styles from "./DrawingCard.module.css";

import LikesCounter from "../LikesCounter/LikesCounter";

export default function DrawingCard({
    imageUrl,
    imageId,
    title,
    authorName,
    authorAge,
    userLikesImageProp,
    likesProp
}) {
    return (
        <li className={styles.card}>
            <strong className={styles.strongText}>{title}</strong>
            <Link to={`/drawing/${imageId}`}>
                <img src={imageUrl} alt="" className={styles.imageBorder} />
            </Link>
            <div className={styles.info}>
                <small className={styles.subtitle}>{`${authorName}, ${authorAge}`}</small>
                <LikesCounter likesProp={likesProp} userLikesImageProp={userLikesImageProp} imageId={imageId} />
            </div>
        </li>
    );
};