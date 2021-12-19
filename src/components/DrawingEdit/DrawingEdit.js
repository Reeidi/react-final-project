import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useParams, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { get, edit } from '../../services/drawingService';

import styles from './DrawingEdit.module.css';

export default function DrawingEdit() {
    const navigate = useNavigate();
    const params = useParams();
    const [drawing, setDrawing] = useState({});
    const [author, setAuthor] = useState({});
    const [drawingUrl, setDrawingUrl] = useState('');
    const [authorName, setAuthorName] = useState('');
    const { user } = useAuthContext();

    useEffect(() => {
        get(params.drawingId)
            .then(result => {
                setDrawing(result);
                setAuthor(result.author);
                setAuthorName(result.author.firstName + ' ' + result.author.lastName);
                setDrawingUrl(result.imageUrl);
            })
            .catch(error => console.log(error));
    }, []);

    function onUrlBlur(eventInfo) {
        setDrawingUrl(eventInfo.target.value);
    }

    function submitHandler(eventInfo) {
        eventInfo.preventDefault();

        let formData = new FormData(eventInfo.target);
        let { title, description, drawingUrl } = Object.fromEntries(formData);

        edit(drawing._id, title, description, drawingUrl)
            .then(result => {
                if (result.success) {
                    navigate('/gallery');
                }
            })
            .catch(error => console.log(error));
    }

    const editPage = (
        <div className={styles.container}>
            <div className={styles.containerShadow}>
                <h2 className={styles.title}>{`${author.firstName}'s drawing`}</h2>

                <div className="pad-2">
                    <img src={drawingUrl} alt="" className={drawingUrl ? styles.imageBorder : styles.hidden} />

                    <form method="POST" onSubmit={submitHandler}>
                        <label htmlFor="drawingUrl" className={styles.label}>
                            <strong className={styles.labelStrong}>Drawing URL:</strong>
                            <input type="select" name="drawingUrl" className={styles.input} defaultValue={drawing.imageUrl} onBlur={onUrlBlur} />
                            <strong className="clear"></strong>
                        </label>
                        <label htmlFor="title" className={styles.label}>
                            <strong className={styles.labelStrong}>Title:</strong>
                            <input type="select" name="title" className={styles.input} defaultValue={drawing.title} />
                            <strong className="clear"></strong>
                        </label>
                        <label htmlFor="description" className={styles.label}>
                            <strong className={styles.labelStrong}>Description:</strong>
                            <input type="select" name="description" className={styles.input} defaultValue={drawing.description} />
                            <strong className="clear"></strong>
                        </label>
                        <label htmlFor="authorName" className={styles.label}>
                            <strong className={styles.labelStrong}>Author name:</strong>
                            <input type="text" name="authorName" className={styles.input} defaultValue={authorName} disabled />
                            <strong className="clear"></strong>
                        </label>
                        <label htmlFor="authorAge" className={styles.label}>
                            <strong className={styles.labelStrong}>Author age:</strong>
                            <input type="number" name="authorAge" className={styles.input} defaultValue={author.age} disabled />
                            <strong className="clear"></strong>
                        </label>

                        <div className="pad-2">
                            <input type="submit" className={styles.button} value="Save" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

    //not loaded yet
    if (!author._id){
        return null;
    }

    return author._id == user._id
        ? editPage
        : <Navigate to='/gallery' />;
};