import EventCard from "../../EventCard/EventCard";
import ScheduleItem from "../../ScheduleItem/ScheduleItem";

import styles from "./SchedulePage.module.css";

export default function SchedulePage() {
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
                                    <EventCard
                                        date="April 10, 2022"
                                        text="Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, velillum dolore."
                                    />
                                    <EventCard
                                        date="March 22, 2022"
                                        text="Teugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum "
                                    />
                                </div>
                                <div className="box-2 last">
                                    <EventCard
                                        date="April 04, 2022"
                                        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."
                                    />
                                    <EventCard
                                        date="March 14, 2022"
                                        text="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus."
                                    />
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