import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

import styles from './DrawingEdit.module.css';

export default function DrawingEdit({
    imageUrl = "https://i.imgur.com/ID6PElU.png",
    author = {},
    info
}) {
    const [drawingUrl, setDrawingUrl] = useState(imageUrl);

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
                            <input type="select" name="drawingUrl" id="drawingUrl" className={styles.input} onBlur={onUrlBlur}/>
                            <strong className="clear"></strong>
                        </label>
                        <label htmlFor="title" className={styles.label}>
                            <strong className={styles.labelStrong}>Title:</strong>
                            <input type="select" name="title" id="title" className={styles.input}/>
                            <strong className="clear"></strong>
                        </label>
                        <label htmlFor="description" className={styles.label}>
                            <strong className={styles.labelStrong}>Description:</strong>
                            <input type="select" name="description" id="description" className={styles.input}/>
                            <strong className="clear"></strong>
                        </label>
                        <label htmlFor="authorName" className={styles.label}>
                            <strong className={styles.labelStrong}>Author name:</strong>
                            <input type="text" name="authorName" id="authorName" className={styles.input} disabled />
                            <strong className="clear"></strong>
                        </label>
                        <label htmlFor="authorAge" className={styles.label}>
                            <strong className={styles.labelStrong}>Author age:</strong>
                            <input type="number" name="authorAge" id="authorAge" className={styles.input} disabled />
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