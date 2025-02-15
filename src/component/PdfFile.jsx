import {PDFDocument, StandardFonts} from 'pdf-lib'

const PdfDoc = await PDFDocument.create();
const curierFont = await PdfDoc.embedFont(StandardFonts.Courier);
const  page = PdfDoc.addPage();
page.drawText('Some boring latin text in the Courier font',{
    font : curierFont,
})

const PdfFile = () =>{
   <div>

   </div>
}
export default PdfFile;