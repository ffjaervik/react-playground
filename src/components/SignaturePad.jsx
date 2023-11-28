import { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const SignaturePad = ({ onSign }) => {
  const signatureRef = useRef(null);

  const handleClear = () => {
    signatureRef.current.clear();
  };

  const handleSave = () => {
    const signatureData = signatureRef.current.toDataURL();
    onSign(signatureData);
  };

  return (
    <div>
      <SignatureCanvas ref={signatureRef} canvasProps={{ width: 500, height: 200, className: 'signature-canvas' }} />
      <div>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleSave}>Save Signature</button>
      </div>
    </div>
  );
};

export default SignaturePad;
