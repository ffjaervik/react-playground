// App.jsx
import { useState, useEffect } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
import PdfSignature from './SignatureForm';

function Home() {
    const [schedule, setSchedule] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/schedule/1');
                const data = await response.json();
                setSchedule(data);
                setLoading(false);
                console.log(data);
            } catch (error) {
                console.error('Error fetching schedule data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const redirectToSignature = () => {
        // Redirect to /signature
        navigate('/signature');
    };

    return (
        <>
            <div>
                <h1>Select user to get to signature form:</h1>
            </div>

            {loading ? <p>Loading...</p> : <button onClick={redirectToSignature}>{schedule.name}</button>}

            <Routes>
                {/* Keep this route for the signature page */}
                <Route path="/signature" element={<PdfSignature />} />
                {/* Add a route for an empty path to hide other content */}
                <Route path="/" element={<></>} />
            </Routes>
        </>
    );
}

export default Home;
