export default function EventCard({
    date,
    text
}) {
    return (
        <div>
            <p><strong>{date}</strong></p>
            <p>
                {text}
                <a href="#" className="link"> More...</a>
            </p>
        </div>
    );
};