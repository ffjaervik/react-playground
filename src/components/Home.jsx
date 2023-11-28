/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import axios from 'axios';
import Schedule from './Schedule';
import GeneratePdfButton from './GeneratePdfButton';

function Home() {
    const [schedule, setSchedule] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch schedule data from the Express API
        axios
            .get('http://localhost:3001/schedule')
            .then((response) => setSchedule(response.data.schedule))
            .catch((error) => console.error('Error fetching schedule:', error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            {!loading && (
                <>
                    <Schedule schedule={schedule} />
                    <GeneratePdfButton />
                </>
            )}
        </div>
    );
}

export default Home;
