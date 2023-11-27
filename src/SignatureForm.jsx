import { useRef } from 'react';
import SignaturePad from 'react-signature-pad';

const SignatureForm = () => {
    const signaturePadRef = useRef();

    const clearSignature = () => {
        signaturePadRef.current.clear();
    };

    const saveSignature = () => {
        // const signatureDataUrl = signaturePadRef.current.toDataURL();
        // Send the signatureDataUrl to the server (e.g., via API)
        // for processing and saving.
        // Example API call:
        // fetch('/api/save-signature', {
        //   method: 'POST',
        //   body: JSON.stringify({ signature: signatureDataUrl }),
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        // })
        // .then(response => response.json())
        // .then(data => {
        //   console.log('Signature saved:', data);
        // })
        // .catch(error => {
        //   console.error('Error saving signature:', error);
        // });
    };

    return (
        <div>
            <SignaturePad ref={signaturePadRef} />
            <button onClick={clearSignature}>Clear Signature</button>
            <button onClick={saveSignature}>Save Signature</button>
        </div>
    );
};

export default SignatureForm;
