import { useEffect, useState } from "react";
import { getAll } from "../../../services/eventService";
import EventCard from "../../EventCard/EventCard";
import ScheduleItem from "../../ScheduleItem/ScheduleItem";

import styles from "./SchedulePage.module.css";

export default function SchedulePage() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        getAll()
            .then(result => setEvents(result.result))
            .catch(error => console.log(error));
    }, []);

    return (
        <section id="content">
            <div className="container_12">
                <div className="grid_4 bot-1">
                    <h2 className={`top-6 ${styles.sectionTitle}`}>About Schedule</h2>
                    <p className={styles.sideTextTitle}><strong>At vero eos et accusam et justo duo dolores et ea rebum.</strong></p>
                    <p className={styles.sideText}>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor. Loremsum dolor sit
                        amet, consetetur sadipscing elitr, sed diam nonumy.</p>
                    <p className={styles.sideText}>Eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum <br />
                        dolor sit amet.</p>
                </div>
                <div className="grid_8">
                    <div className="block-1 top-5">
                        <div className="block-1-shadow">
                            <h2 className={styles.sectionTitle}>Schedule</h2>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th>Monday</th>
                                        <th>Wednesday</th>
                                        <th>Friday</th>
                                        <th className="last">Saturday</th>
                                    </tr>
                                    <tr>
                                        <ScheduleItem time="11:00" courseName="Composition" teacher="Peter Stanton" />
                                        <ScheduleItem time="11:00" courseName="Composition" teacher="Peter Stanton" />
                                        <ScheduleItem time="11:00" courseName="Composition" teacher="Peter Stanton" />
                                        <ScheduleItem time="11:00" courseName="Composition" teacher="Peter Stanton" />
                                    </tr>
                                    <tr>
                                        <ScheduleItem time="13:00" courseName="Color science" teacher="Helen Perton" />
                                        <ScheduleItem time="13:00" courseName="Color science" teacher="Helen Perton" />
                                        <ScheduleItem time="13:00" courseName="Color science" teacher="Helen Perton" />
                                        <ScheduleItem time="13:00" courseName="Color science" teacher="Helen Perton" />
                                    </tr>
                                    <tr>
                                        <ScheduleItem time="16:00" courseName="Human anatomy" teacher="Jesica Murray" />
                                        <ScheduleItem time="16:00" courseName="Human anatomy" teacher="Jesica Murray" />
                                        <ScheduleItem time="16:00" courseName="Human anatomy" teacher="Jesica Murray" />
                                        <ScheduleItem time="16:00" courseName="Human anatomy" teacher="Jesica Murray" />
                                    </tr>
                                </tbody>
                            </table>
                            <h2 className={styles.sectionTitle}>Events Schedule</h2>
                            <div className="wrap">
                                <div className="box-2">
                                    {
                                        events
                                            .filter((event, index) => index % 2 === 0)
                                            .map(event => <EventCard key={event._id} date={event.title} text={event.description} />)
                                    }
                                </div>
                                <div className="box-2 last">
                                    {
                                        events
                                            .filter((event, index) => index % 2 !== 0)
                                            .map(event => <EventCard key={event._id} date={event.title} text={event.description} />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        </section>
    );
};