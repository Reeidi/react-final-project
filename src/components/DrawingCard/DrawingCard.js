import { useState } from "react";
import { Link } from "react-router-dom";
import { like } from "../../services/drawingService"
import { useAuthContext } from '../../contexts/AuthContext';
import styles from "./DrawingCard.module.css";

import heartIcon from "../../images/heart-icon.png";
import heartEmptyIcon from "../../images/heart-empty-icon.png";

export default function DrawingCard({
    imageUrl,
    imageId,
    title,
    authorName,
    authorAge,
    userLikesImageProp,
    likesProp
}) {
    const { user } = useAuthContext();
    const [userLikesImage, setUserLikesImage] = useState(userLikesImageProp);
    const [likes, setLikesCount] = useState(likesProp);

    function clickHandler(eventInfo) {
        if (user && !userLikesImage) {
            like(imageId)
                .then(result => {
                    if (result.success) {
                        setUserLikesImage(true);
                        setLikesCount(result.likesCount);
                    }
                })
                .catch(error => console.log(error));
        }
    }

    return (
        <li className={styles.card}>
            <strong className={styles.strongText}>{title}</strong>
            <Link to={`/drawing/${imageId}`}>
                <img src={imageUrl} alt="" className={styles.imageBorder} />
            </Link>
            <div className={styles.info}>
                <small className={styles.subtitle}>{`${authorName}, ${authorAge}`}</small>
                <small className={styles.likes}>
                    {likes || 0}
                    <img src={userLikesImage ? heartIcon : heartEmptyIcon} className={styles.icon} onClick={clickHandler} />
                </small>
            </div>
        </li>
    );
};