import styles from './DrawingDetails.module.css';

export default function DrawingDetails({
    imageUrl,
    author,
    info
}) {
    return (
        <div className={styles.container}>
            <div className={styles.containerShadow}>
                <h2 className={styles.title}>{`${author.name}'s drawing`}</h2>

                <div className="pad-2">
                    <img src={imageUrl} alt="" className={styles.imageBorder} />
                    <div className="extra-wrap clr-6">
                        <p><strong>{author.name}, {author.age} years old</strong></p>
                        <p>{info}</p>
                    </div>

                    <div className="pad-2">
                        <input type="submit" className={styles.button} value="Edit" />
                        <input type="submit" className={styles.button} value="Delete" />
                    </div>
                </div>
            </div>
        </div>
    );
};

