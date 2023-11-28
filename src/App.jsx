// src/App.js
import { useState } from 'react';
import PdfViewer from './components/PdfViewer';
import SignaturePad from './components/SignaturePad';
import './App.css';
import PdfGenerator from './components/PdfGenerator';

const App = () => {
  const [pdfUrl, setPdfUrl] = useState('/path/to/your/pdf/document.pdf');
  const [pageNumber, setPageNumber] = useState(1);
  const [signatureData, setSignatureData] = useState(null);

  const handleSign = (data) => {
    setSignatureData(data);
  };

  return (
    <div className="app-container">
      <div className="pdf-container">
        <PdfViewer pdfUrl={pdfUrl} pageNumber={pageNumber} />
      </div>
      <div className="signature-container">
        <SignaturePad onSign={handleSign} />
      </div>
      {signatureData && (
        <div className="signature-preview">
          <img src={signatureData} alt="Signature" />
        </div>
      )}
      <PdfGenerator/>
    </div>
  );
};

export default App;
