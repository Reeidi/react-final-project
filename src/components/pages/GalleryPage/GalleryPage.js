import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";
import { getAll } from "../../../services/drawingService";
import DrawingCard from "../../DrawingCard/DrawingCard";

import styles from "./GalleryPage.module.css";

export default function GalleryPage() {
    const { user } = useAuthContext();
    const [drawings, setDrawings] = useState([]);

    useEffect(() => {
        getAll()
            .then(result => setDrawings(result))
            .catch(error => console.log(error));
    }, []);

    const controlButtons = (
        <div className={styles.buttonDiv}>
            <Link to="/mine" className={styles.button}>My drawings</Link>
            <Link to="/drawing/create" className={styles.button}>Add drawing</Link>
        </div>
    );

    return (
        <section id="content">
            <div className={styles.container}>
                <div className={styles.containerPaperEffect}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Our Gallery</h2>

                    {
                        user
                            ? controlButtons
                            : null
                    }

                    <ul>
                        {drawings.map(drawing =>
                            <DrawingCard
                                key={drawing._id}
                                imageUrl={drawing.imageUrl}
                                imageId={drawing._id}
                                title={drawing.title}
                                authorName={drawing.author.firstName}
                                authorAge={drawing.author.age}
                                userLikesImageProp={drawing.userLikesImage}
                                likesProp={drawing.votes.length}
                            />)}
                    </ul>
                    <div className="clear"></div>
                </div>
            </div>
        </section>
    );
};