// index.js
const { exec } = require('child_process');

// Fungsi untuk membuka file HTML dalam web browser
function openHtmlFileInBrowser(htmlFilePath) {
    if (process.platform === 'win32') {
        exec(`start ${htmlFilePath}`);
    } else if (process.platform === 'darwin') {
        exec(`open ${htmlFilePath}`);
    } else {
        exec(`xdg-open ${htmlFilePath}`);
    }
}

// Panggil fungsi untuk membuka file HTML pada browser
openHtmlFileInBrowser('index.html'); // Ganti 'index.html' dengan nama file HTML yang ingin Anda buka
