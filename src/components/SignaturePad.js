/* eslint-disable react/prop-types */
import  { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';

function SignaturePad({ onSign }) {
  const signatureRef = useRef();

  const handleClear = () => {
    signatureRef.current.clear();
  };

  const handleSave = () => {
    const signatureData = signatureRef.current.toDataURL();
    onSign(signatureData);
  };

  return (
    <div>
      <SignatureCanvas ref={signatureRef} canvasProps={{ width: 300, height: 150 }} />
      <button onClick={handleClear}>Clear</button>
      <button onClick={handleSave}>Save Signature</button>
    </div>
  );
}

export default SignaturePad;
