const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function extractPDF() {
    try {
        const dataBuffer = fs.readFileSync('docs/NamTruongHai_2280602042.pdf');
        const parser = new PDFParse({ data: dataBuffer });
        const result = await parser.getText();
        
        let output = '=== PDF Content ===\n';
        output += 'Number of pages: ' + result.total + '\n\n';
        output += result.text;
        
        fs.writeFileSync('docs/pdf_content.txt', output, 'utf8');
        console.log('PDF content saved to docs/pdf_content.txt');
        console.log('Number of pages:', result.total);
        await parser.destroy();
    } catch (error) {
        console.error('Error:', error);
    }
}

extractPDF();
