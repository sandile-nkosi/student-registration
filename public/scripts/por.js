const printElement = document.getElementById('por');

function generatePDF(){
  html2pdf()
  .from(printElement)
  .save();
}