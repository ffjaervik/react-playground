import jsPDF from 'jspdf';

const PdfGenerator = () => {
  const generatePdf = () => {
    // Create a new jsPDF instance
    const pdf = new jsPDF();

    // Add content to the PDF
    pdf.text('Hello, this is a generated PDF!', 10, 10);

    // Save the PDF
    pdf.save('generated.pdf');
  };

  return (
    <div>
      <h2>PDF Generator</h2>
      <button onClick={generatePdf}>Generate PDF</button>
    </div>
  );
};

export default PdfGenerator;
