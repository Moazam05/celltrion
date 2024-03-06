import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
const pdfDownloader = async (rootElementId, fileName = "sample.pdf") => {
  
  const input = document.getElementById(rootElementId);
  const canvas = await html2canvas(input, { scrollY: -window.scrollY, scrollX: -window.scrollX, scale: 2 });
  const image = canvas.toDataURL('image/jpeg', 0.5);
  const pdf = new jsPDF('p', 'px', 'a4');

    const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const widthRatio = pageWidth / canvas.width;
  const heightRatio = pageHeight / canvas.height;
  const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;

  const canvasWidth = canvas.width * ratio;
  const canvasHeight = canvas.height * ratio;

  const marginX = (pageWidth - canvasWidth) / 2;
  const marginY = (pageHeight - canvasHeight) / 2;

    pdf.addImage(image, 'JPEG', marginX, marginY, canvasWidth, canvasHeight);
    pdf.save(fileName);
    //pdf.output('datauri', fileName)

}

export default pdfDownloader;