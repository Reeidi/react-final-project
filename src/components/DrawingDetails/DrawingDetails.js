import styles from './DrawingDetails.module.css';

export default function DrawingDetails({
    imageUrl,
    author,
    info
}) {
    return (
        <div className="block-1 top-5">
            <div className="block-1-shadow">
                <h2 className="clr-6 p6">{`${author.name}'s drawing`}</h2>

                <div className="pad-3">
                    <img src={imageUrl} alt="" className="img-border img-indent" />
                    <div className="extra-wrap clr-6">
                        <p><strong>{author.name}, {author.age} years old</strong></p>
                        <p>{info}</p>
                    </div>

                    <div className="btns pad-2">
                        <a href="#" className="link-2">Edit</a>
                        <a href="#" className="link-2">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    );
};