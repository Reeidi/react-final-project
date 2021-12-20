import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { create } from '../../services/drawingService';

import styles from './DrawingCreate.module.css';

export default function DrawingCreate() {
    const { user } = useAuthContext();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({ drawingUrl: null });
    const [drawingUrl, setDrawingUrl] = useState('');

    function onUrlBlur(eventInfo) {
        let url = eventInfo.target.value;
        if (isUrl(url)) {
            setErrors(errors => ({ ...errors, drawingUrl: null }));
            setDrawingUrl(eventInfo.target.value);
        } else {
            setErrors(errors => ({ ...errors, drawingUrl: 'Invalid URL.' }));
            setDrawingUrl(null);
        }
    }

    async function submitHandler(eventInfo) {
        eventInfo.preventDefault();

        if (errors.drawingUrl) {
            return;
        }

        let formData = new FormData(eventInfo.target);
        let { title, description, drawingUrl } = Object.fromEntries(formData);

        let result = await create(title, description, drawingUrl, user._id);
        if (result) {
            navigate('/gallery');
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerShadow}>
                <h2 className={styles.title}>{`${user.firstName}'s drawing`}</h2>

                <div className="pad-2">
                    <img src={drawingUrl} alt="" className={drawingUrl ? styles.imageBorder : styles.hidden} />

                    <form method="POST" onSubmit={submitHandler}>
                        <label htmlFor="drawingUrl" className={styles.label}>
                            <strong className={styles.labelStrong}>Drawing URL:</strong>
                            <input type="select" name="drawingUrl" className={styles.input} onBlur={onUrlBlur} />
                            <strong className="clear"></strong>
                        </label>
                        <Alert variant='danger' show={errors.drawingUrl}>{errors.drawingUrl}</Alert>

                        <label htmlFor="title" className={styles.label}>
                            <strong className={styles.labelStrong}>Title:</strong>
                            <input type="select" name="title" className={styles.input} />
                            <strong className="clear"></strong>
                        </label>
                        <label htmlFor="description" className={styles.label}>
                            <strong className={styles.labelStrong}>Description:</strong>
                            <input type="select" name="description" className={styles.input} />
                            <strong className="clear"></strong>
                        </label>
                        <label htmlFor="authorName" className={styles.label}>
                            <strong className={styles.labelStrong}>Author name:</strong>
                            <input type="text" name="authorName" className={styles.input} defaultValue={`${user.firstName} ${user.lastName}`} disabled />
                            <strong className="clear"></strong>
                        </label>
                        <label htmlFor="authorAge" className={styles.label}>
                            <strong className={styles.labelStrong}>Author age:</strong>
                            <input type="number" name="authorAge" className={styles.input} defaultValue={user.age} disabled />
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
};

function isUrl(s) {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    return regexp.test(s);
}