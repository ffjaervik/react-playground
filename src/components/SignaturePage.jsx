/* eslint-disable react/prop-types */
import { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { useParams } from 'react-router-dom';

function SignaturePage() {
  const canvasRef = useRef(null);
  const { pdfUrl } = useParams();
  console.log(pdfUrl);

  const handleSaveSignature = () => {
    const signatureDataUrl = canvasRef.current.toDataURL();
    console.log('Signature Data URL:', signatureDataUrl);
    // You can now send `signatureDataUrl` to the server or save it as needed.
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