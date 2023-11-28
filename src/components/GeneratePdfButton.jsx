
import axios from 'axios';

function GeneratePdfButton() {
  const handleGeneratePdf = () => {
    // Trigger the Express API endpoint to generate and download the PDF
    axios.post('http://localhost:3001/generate-pdf', {}, { responseType: 'blob' })
      .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'schedule.pdf');
        document.body.appendChild(link);
        link.click();
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
