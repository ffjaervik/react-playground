/* eslint-disable react/prop-types */

const Schedule = ({ schedule }) => {
  // console.log(schedule)


    return (
        <div>
            <h2>Schedule Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Start</th>
                        <th>End</th>
                    </tr>
                </thead>
                <tbody>
                    {schedule[0].days.map((day) => (
                        <tr key={day.day}>
                            <td>{day.day}</td>
                            <td>{day.start}</td>
                            <td>{day.end}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Schedule;
