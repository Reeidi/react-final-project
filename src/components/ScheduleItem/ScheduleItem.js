export default function ScheduleItem({
    time,
    courseName,
    teacher
}) {
    return (
        <td>
            <span className="clr-2">{time}</span>
            <span className="clr-4">{courseName}</span>
            <span className="clr-1">{teacher}</span>
        </td>
    );
};