import { useState } from 'react';
import { useLocation, useNavigate, useMatch } from 'react-router';
import { useParams } from 'react-router-dom';

import styles from './DrawingEdit.module.css';

export default function DrawingEdit() {
    const params = useParams();
    console.log('params:', params);
    console.log('location:', useLocation());

    
        let drawing = {title: 'Sunny day', description: 'I drew a nice sunny day because I liked it.', url: 'https://www.oxy.edu/sites/default/files/landing-page/banner-images/art-art-history_main_1440x800.jpg'};
        let author = {name: 'Ivan', age: 5};
    

    const [drawingUrl, setDrawingUrl] = useState(drawing.url);

    function onUrlBlur(eventInfo) {
        setDrawingUrl(eventInfo.target.value);
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerShadow}>
                <h2 className={styles.title}>{`${author.name}'s drawing`}</h2>

                <div className="pad-2">
                    <img src={drawingUrl} alt="" className={styles.imageBorder} />

                    <form method="POST">
                        <label htmlFor="drawingUrl" className={styles.label}>
                            <strong className={styles.labelStrong}>Drawing URL:</strong>
                            <input type="select" name="drawingUrl" className={styles.input} defaultValue={drawing.url} onBlur={onUrlBlur}/>
                            <strong className="clear"></strong>
                        </label>
                        <label htmlFor="title" className={styles.label}>
                            <strong className={styles.labelStrong}>Title:</strong>
                            <input type="select" name="title" className={styles.input} defaultValue={drawing.title} />
                            <strong className="clear"></strong>
                        </label>
                        <label htmlFor="description" className={styles.label}>
                            <strong className={styles.labelStrong}>Description:</strong>
                            <input type="select" name="description" className={styles.input} defaultValue={drawing.description}/>
                            <strong className="clear"></strong>
                        </label>
                        <label htmlFor="authorName" className={styles.label}>
                            <strong className={styles.labelStrong}>Author name:</strong>
                            <input type="text" name="authorName" className={styles.input} defaultValue={author.name} disabled />
                            <strong className="clear"></strong>
                        </label>
                        <label htmlFor="authorAge" className={styles.label}>
                            <strong className={styles.labelStrong}>Author age:</strong>
                            <input type="number" name="authorAge" className={styles.input} defaultValue={author.age} disabled />
                            <strong className="clear"></strong>
                        </label>
                    </form>

                    <div className="pad-2">
                        <input type="submit" className={styles.button} value="Save" />
                    </div>
                </div>
            </div>
        </div>
    );
};