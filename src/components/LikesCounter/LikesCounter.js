import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { like } from "../../services/drawingService"
import styles from "./LikesCounter.module.css";

import heartIcon from "../../images/heart-icon.png";
import heartEmptyIcon from "../../images/heart-empty-icon.png";

export default function LikesCounter({
    likesProp,
    userLikesImageProp,
    imageId
}) {
    const [userLikesImage, setUserLikesImage] = useState(userLikesImageProp);
    const [likes, setLikesCount] = useState(likesProp);
    const { user } = useAuthContext();

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
        <small className={styles.likes}>
            {likes || 0}
            <img src={userLikesImage ? heartIcon : heartEmptyIcon} className={styles.icon} onClick={clickHandler} />
        </small>
    );
};