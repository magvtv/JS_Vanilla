const fs = require('fs');
const PDFDocument = require('pdfkit');

function getDaysInCurrentMonth() {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

function generateMonthlyExpensesPDF(outputFile) {
    const expenses = [
        ['Item', 'Monthly Cost (KES)'],
        ['Meals (breakfast and supper)', 6000],
        ['JTL Faiba Bundle 65 GB', 2000],
        ['Monica AI Subscription', 1600],
        ['Gym', 320]
    ];

    const total = expenses.slice(1).reduce((sum, item) => sum + Number(item[1]), 0);
    expenses.push(['Total', total]);

    const daysInMonth = getDaysInCurrentMonth();
    const averageDaily = total / daysInMonth;

    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(outputFile));

    // Add title
    doc.fontSize(18).text("My Monthly Expenses In Juja" , {
        align: 'center'
    });

    doc.moveDown();

    // Table configuration
    const tableTop = 150;
    const tableLeft = 50;
    const rowHeight = 30;
    const colWidths = [300, 150];

    // Draw table
    doc.lineWidth(1);

    // Draw header
    doc.fillColor('#000000').fontSize(12);
    expenses.forEach((row, rowIndex) => {
        const y = tableTop + rowIndex * rowHeight;

        // Draw row background
        if (rowIndex === 0) {
            doc.fillColor('#e0e0e0').rect(tableLeft, y, colWidths[0] + colWidths[1], rowHeight).fill();
        } else if (rowIndex === expenses.length - 1) {
            doc.fillColor('#f0f0f0').rect(tableLeft, y, colWidths[0] + colWidths[1], rowHeight).fill();
        }
        doc.fillColor('#000000');

        // Draw cell borders and text
        doc.moveTo(tableLeft, y).lineTo(tableLeft + colWidths[0] + colWidths[1], y).stroke();
        row.forEach((cell, cellIndex) => {
            const x = tableLeft + (cellIndex === 0 ? 0 : colWidths[0]);
            doc.moveTo(x, y).lineTo(x, y + rowHeight).stroke();
            doc.text(cell.toString(), x + 5, y + 10, {
                width: colWidths[cellIndex] - 10,
                align: cellIndex === 0 ? 'left' : 'right'
            });
        });
    });

    // Draw bottom line
    doc.moveTo(tableLeft, tableTop + expenses.length * rowHeight)
       .lineTo(tableLeft + colWidths[0] + colWidths[1], tableTop + expenses.length * rowHeight)
       .stroke();

    doc.end();
}

generateMonthlyExpensesPDF('./Monthly-Expenses.pdf');
console.log('PDF generated successfully: Monthly-Expenses.pdf');