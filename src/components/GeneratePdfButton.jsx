/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function GeneratePdfButton(data) {
    const navigate = useNavigate();
    // console.log(data)

    const handleGeneratePdf = (data) => {
        axios
            .get('http://localhost:3001/get-pdf', data, { responseType: 'blob' })
            .then((response) => {
                const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
                const pdfUrl = URL.createObjectURL(pdfBlob);
                console.log(pdfUrl);
                navigate(`/sign-pdf/${encodeURIComponent(pdfUrl)}`);
            })
            .catch((error) => console.error('Error generating PDF:', error));
    };

    return (
        <div>
            <button onClick={() => handleGeneratePdf(data)}>Generate PDF</button>
        </div>
    );
}

export default GeneratePdfButton;
