import { useEffect, useState } from "react";
import { getAll } from "../../../services/drawingService";
import DrawingCard from "../../DrawingCard/DrawingCard";

import styles from "./GalleryPage.module.css";

export default function GalleryPage() {
    const [drawings, setDrawings] = useState([]);

    useEffect(() => {
        getAll()
            .then(result => setDrawings(result))
            .catch(error => console.log(error));
    }, []);

    return (
        <section id="content">
            <div className={styles.container}>
                <div className={styles.containerShadow}>
                    <h2 className="clr-6" style={{ textAlign: 'center' }}>Our Gallery</h2>
                    <ul>
                        {drawings.map(drawing =>
                            <DrawingCard
                                key={drawing._id}
                                imageUrl={drawing.imageUrl}
                                imageId={drawing._id}
                                title={drawing.title}
                                authorName={'Ivancho'}
                                authorAge={'5'}
                                likes={'500'}
                            />)}
                    </ul>
                    <div className="clear"></div>
                </div>
            </div>
        </section>
    );
};