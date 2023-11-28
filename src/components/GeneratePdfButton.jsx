import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function GeneratePdfButton() {
  const navigate = useNavigate();

  const handleGeneratePdf = () => {
    axios.post('http://localhost:3001/generate-pdf', {}, { responseType: 'blob' })
      .then(response => {
        const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
        const pdfUrl = URL.createObjectURL(pdfBlob);
        console.log(pdfUrl)
        navigate(`/sign-pdf/${encodeURIComponent(pdfUrl)}`);
      })
      .catch(error => console.error('Error generating PDF:', error));
  };

  return (
    <div>
      <button onClick={handleGeneratePdf}>Generate PDF</button>
    </div>
  );
}

export default GeneratePdfButton;
