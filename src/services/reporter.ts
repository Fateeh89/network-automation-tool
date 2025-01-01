import * as XLSX from 'xlsx';
import * as pdf from 'pdfkit';
import * as fs from 'fs';

export class Reporter {
    private data: any[];

    constructor(data: any[]) {
        this.data = data;
    }

    public generateExcelReport(filePath: string): void {
        const worksheet = XLSX.utils.json_to_sheet(this.data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Report');
        XLSX.writeFile(workbook, filePath);
    }

    public generatePdfReport(filePath: string): void {
        const doc = new pdf();
        doc.pipe(fs.createWriteStream(filePath));
        doc.fontSize(25).text('Performance Report', { align: 'center' });
        doc.moveDown();

        this.data.forEach((item) => {
            doc.fontSize(12).text(JSON.stringify(item, null, 2));
            doc.moveDown();
        });

        doc.end();
    }
}