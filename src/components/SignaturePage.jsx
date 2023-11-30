/* eslint-disable react/prop-types */
import { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SignaturePage() {
  const canvasRef = useRef(null);
  const { pdfUrl } = useParams();
  console.log(pdfUrl);


  const handleSaveSignature = () => {
    const signatureDataUrl = canvasRef.current.toDataURL();
    console.log('Signature Data URL:', signatureDataUrl);

    axios.post('http://localhost:3001/generate-signed-pdf', { signatureData: signatureDataUrl }, { responseType: 'blob' })
  .then(response => {
    console.log(response)
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'schedule.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  })
  .catch(error => {
    console.error('Error saving signature:', error);
    // Handle the error as needed
  });
  };

  const handleClearSignature = () => {
    canvasRef.current.clear();
  };

  return (
    <div>
      <iframe title="PDF Viewer" src={pdfUrl} width="100%" height="600px" style={{ border: 'none' }} />
      <SignatureCanvas ref={canvasRef} canvasProps={{ width: 400, height: 200, className: 'signature-canvas' }} />
      <div>
        <button onClick={handleSaveSignature}>Save Signature</button>
        <button onClick={handleClearSignature}>Clear Signature</button>
      </div>
    </div>
  );
}

export default SignaturePage;