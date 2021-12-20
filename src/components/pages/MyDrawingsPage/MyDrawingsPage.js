import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../../../services/drawingService";
import DrawingCard from "../../DrawingCard/DrawingCard";
import { useAuthContext } from "../../../contexts/AuthContext";

import styles from "./MyDrawingsPage.module.css";

export default function MyDrawingsPage() {
    const { user } = useAuthContext();
    const [drawings, setDrawings] = useState([]);

    useEffect(() => {
        getAll()
            .then(result => {
                let filtered = result.filter(drawing => drawing.author._id === user._id);
                setDrawings(filtered);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <section id="content">
            <div className={styles.container}>
                <div className={styles.containerPaperEffect}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>{user.firstName}'s drawings</h2>
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
                    <div className={styles.buttonDiv}>
                        <Link to="/drawing/create" className={styles.button}>Add drawing</Link>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        </section>
    );
};