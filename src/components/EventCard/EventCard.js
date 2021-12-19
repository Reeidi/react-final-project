export default function EventCard({
    date,
    text
}) {
    return (
        <div>
            <p><strong>{date}</strong></p>
            <p>
                {text}
                <a href="#" class="link"> More...</a>
            </p>
        </div>
    );
};