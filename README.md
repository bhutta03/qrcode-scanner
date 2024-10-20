# QR Code Scanner - Web Application

This project is a simple yet powerful **QR Code Scanner** web application. It allows users to either upload a QR code image or use their device’s camera to scan a QR code in real-time. The app is built using **HTML**, **CSS**, and **JavaScript** along with the **ZXing** library for QR code detection and decoding.

## Features

- **QR Code Scanning via Image Upload**: Upload an image containing a QR code, and the app will detect and display the decoded information.
- **Camera-Based QR Code Scanning**: Use the device's camera to scan and decode QR codes in real-time.
- **Responsive Design**: Optimized for both desktop and mobile screens.
- **User-Friendly Interface**: Simple, clean interface with real-time feedback.
- **Formatted Output**: The app recognizes URLs, WiFi configurations, and general text, displaying them in a well-structured format.

## How to Use

1. **Upload a QR Code Image**:
   - Click on the **Upload Image** link.
   - Select an image with a QR code from your device.
   - The decoded result will appear below the upload area.

2. **Scan QR Code with Camera**:
   - Click on the **Scan QR Code** link.
   - Allow access to the camera.
   - Hold the QR code in front of the camera, and the app will automatically scan it and display the result.

## Technologies Used

- **ZXing (Zebra Crossing)**: An open-source library for decoding QR codes.
- **HTML5 & CSS3**: Used for layout and styling.
- **JavaScript**: Handles the scanning functionality and manages interactions between the user and the QR reader.
- **FileReader API**: Reads the uploaded QR code images for processing.

## Project Structure

- **index.html**: Main structure of the application.
- **styles.css**: Styling for the layout and user interface.
- **scanner.js**: JavaScript file for QR code handling and interaction logic.

## Installation

To run this project locally:

1. Clone the repository:

    ```bash
    git clone https://github.com/bhutta03/qr-code-scanner.git
    ```

2. Navigate to the project folder and open the `index.html` file in your browser.

## Live Demo

You can try out the live demo of the [Qr Code Scanner](https://qr-code-scanner-plum.vercel.app/).

---

**Enjoy using this QR Code Scanner!**
