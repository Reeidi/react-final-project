import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { get } from '../../services/drawingService';

import styles from './DrawingDetails.module.css';

export default function DrawingDetails() {
    const navigate = useNavigate();
    const params = useParams();
    const [drawing, setDrawing] = useState({});
    const [author, setAuthor] = useState({});

    useEffect(() => {
        get(params.drawingId)
            .then(result => {
                setDrawing(result);
                setAuthor(result.author);
            })
            .catch(error => console.log(error));
    }, []);

    const controlButtons = (
        <div className="pad-2">
            <input type="submit" className={styles.button} value="Edit" onClick={() => navigate(`/drawing/${params.drawingId}/edit`)} />
            <input type="submit" className={styles.button} value="Delete" />
        </div>
    );

    return (
        <div className={styles.container}>
            <div className={styles.containerPaperEffect}>
                <h2 className={styles.title}>{`${author.firstName}'s drawing`}</h2>

                <div className="pad-2">
                    <h1>{drawing.title}</h1>
                    <img src={drawing.imageUrl} alt="" className={styles.imageBorder} />
                    <div className="extra-wrap clr-6">
                        <p><strong>{author.firstName} {author.lastName}, {author.age} years old</strong></p>
                        <p>{drawing.description}</p>
                    </div>

                    {
                        drawing.isAuthor
                            ? controlButtons
                            : null
                    }

                </div>
            </div>
        </div>
    );
};
