import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

import styles from './DrawingDetails.module.css';

export default function DrawingDetails() {
    const navigate = useNavigate();
    const params = useParams();

    console.log('params:', params);
    

        let drawing = {title: 'Sunny day', description: 'I drew a nice sunny day because I liked it.', url: 'https://www.oxy.edu/sites/default/files/landing-page/banner-images/art-art-history_main_1440x800.jpg'};
        let author = {name: 'Ivan', age: 5};


    return (
        <div className={styles.container}>
            <div className={styles.containerShadow}>
                <h2 className={styles.title}>{`${author.name}'s drawing`}</h2>

                <div className="pad-2">
                    <img src={drawing.url} alt="" className={styles.imageBorder} />
                    <div className="extra-wrap clr-6">
                        <p><strong>{author.name}, {author.age} years old</strong></p>
                        <p>{drawing.description}</p>
                    </div>

                    <div className="pad-2">
                        <input type="submit" className={styles.button} value="Edit" onClick={() => navigate(`/drawing/${params.drawingId}/edit`)} />
                        <input type="submit" className={styles.button} value="Delete" />
                    </div>
                </div>
            </div>
        </div>
    );
};
