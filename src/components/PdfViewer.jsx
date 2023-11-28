import React from 'react';

function PdfViewer({ location }) {
  const { pdfUrl } = location.state;

  return (
    <div>
      <iframe src={pdfUrl} width="100%" height="500px" title="Embedded PDF"></iframe>
      {/* Add the signature pad and related components here */}
    </div>
  );
}

export default PdfViewer;
