import { Document, Page } from 'react-pdf';

const PdfViewer = ({ pdfUrl, pageNumber }) => {
  return (
    <div>
      <Document file={pdfUrl}>
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
};

export default PdfViewer;