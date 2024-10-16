const fileInput = document.getElementById('fileInput');
const uploadResult = document.getElementById('uploadResult');
const uploadedImageContainer = document.getElementById('uploadedImageContainer');
const uploadedImage = document.getElementById('uploadedImage');
const uploadLink = document.getElementById('uploadLink'); // Get the upload label
const cameraResult = document.getElementById('cameraResult');
const video = document.getElementById('video'); // Get video element

const codeReader = new ZXing.BrowserQRCodeReader(); // Create a new QR code reader

// Function to format decoded data
function formatDecodedData(data) {
    // Check if the data is a URL
    if (data.startsWith('http://') || data.startsWith('https://')) {
        return `
            <div class="result-box">
                <strong>URL:</strong> <a href="${data}" target="_blank">${data}</a>
            </div>
        `;
    }
    
    // Check if the data is a WiFi QR code
    if (data.startsWith('WIFI:')) {
        const wifiInfo = data.match(/WIFI:T:(.*?);P:(.*?);S:(.*?);H:(.*?);/);
        if (wifiInfo && wifiInfo.length === 5) {
            return `
                <div class="result-box">
                    Encryption: ${wifiInfo[1]}
                </div>
                <div class="result-box">
                    Network Name: ${wifiInfo[3]}
                </div>
                <div class="result-box">
                    Password: ${wifiInfo[2]}
                </div>
                <div class="result-box">
                    Hide Password: ${wifiInfo[4] === 'true' ? 'true' : 'false'}
                </div>
            `;
        } else {
            return `<strong>Invalid WiFi format. Please check the QR code data.</strong>`;
        }
    }
    
    // For other QR code data
    return `
        <div class="result-box">
            ${data}
        </div>
    `;

}



// Function to handle file upload
fileInput.addEventListener('change', handleFileUpload);

// Function to handle QR code scanning from uploaded image
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.src = e.target.result;
            img.onload = function() {
                codeReader.decodeFromImage(img)
                    .then(result => {
                        const formattedResult = formatDecodedData(result.text);
                        uploadResult.innerHTML = `<pre>${formattedResult}</pre>`; // Wrap in <pre> for code block
                        uploadedImage.src = img.src; // Show uploaded image
                        uploadedImageContainer.style.display = 'block'; // Show image container
                        uploadLink.textContent = 'Upload Another Image'; // Set text to "Upload Another Image"
                        uploadResult.scrollIntoView({ behavior: 'smooth' }); // Scroll to result
                    })
                    .catch(err => {
                        uploadResult.textContent = `Error decoding QR Code: ${err}`;
                    });
            };
        };
        reader.readAsDataURL(file);
    }
}

// Function to start the camera and scan QR codes
function startCamera() {
    codeReader.decodeFromVideoDevice(null, video, (result, err) => {
        if (result) {
            const formattedResult = formatDecodedData(result.text); // Format result
            cameraResult.innerHTML = `<pre>${formattedResult}</pre>`; // Wrap in <pre> for code block
            cameraResult.scrollIntoView({ behavior: 'smooth' }); // Scroll to result
        }
        if (err) {
            console.error(err);
        }
    });
}

// Add event listener for the upload link
uploadLink.addEventListener('click', function() {
    fileInput.value = ''; // Reset the file input
    uploadResult.innerHTML = 'Upload a QR code image to see the result here'; // Reset result text
});
