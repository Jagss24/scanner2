// Access the camera feed and display it

const cameraElement = document.getElementById('camera');

async function startCamera() {
    try {
        const constraints = {
            video: {
                facingMode: 'environment'
            }
        }
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        cameraElement.srcObject = stream;
    } catch (error) {
        console.error('Error accessing camera:', error);
    }
}

const StudentID = [4185794, 3736511, 4185788, 4185797, 3736515, 3736503, 3736456, 3736512, 3736531, 4185764, 35325235, 5235235, 4185754];
StudentID.sort((a, b) => a - b)


// Initialize QuaggaJS for barcode scanning
Quagga.init({
    inputStream: {
        name: 'Live',
        type: 'LiveStream',
        target: cameraElement
    },
    decoder: {
        readers: ['code_39_reader', 'code_128_reader', 'upc_reader'] // You can specify additional reader types here
    }
}, function (err) {
    if (err) {
        console.error('Error initializing Quagga:', err);
        return;
    }
    Quagga.start();
});

let scanning = true
let alreadyscanned = false
// Listen for successful barcode scans
Quagga.onDetected(function (data) {
    if (!scanning) {
        return; // If not scanning, ignore detected results
    }

    scanning = false;

    document.getElementById('result').innerHTML = `
            <h2>Processing...</h2>
        `;
    const rollNumber = data.codeResult.code;
    const Id = parseInt(rollNumber)
    const index = binarySearch(StudentID, Id);

    if (alreadyscanned) {
        if (index === 1) {
            document.getElementById('result').innerHTML = `
         <h3>Already scanned once</h3>
        <h2>WELCOME <br> TO <br> GALACTIC x NEON</h2>
        `;
        }
        else {
            document.getElementById('result').innerHTML = `
            <h3>Already scanned once</h3>
            <h2>Failed</h2>
            <p>No matching student found</p>
        `;
        }
    }
    else {
        if (index === 1) {
            document.getElementById('result').innerHTML = `
            <h2>WELCOME <br> TO <br> GALACTIC x NEON</h2
        `;
        }
        else {
            document.getElementById('result').innerHTML = `
            <h2>Failed</h2>
            <p>No matching student found</p>
        `;
        }
    }
    alreadyscanned = true

    setTimeout(() => {
        document.getElementById('result').innerHTML = 'Scan again to view'; // Clear the result after 3 seconds
        scanning = true; // Resume scanning
        alreadyscanned = false
    }, 2000)
});

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midRollno = arr[mid];

        if (midRollno === target) {
            return 1; // Found the roll number
        } else if (midRollno < target) {
            left = mid + 1; // Continue searching in the right half
        } else {
            right = mid - 1; // Continue searching in the left half
        }
    }

    return -1; // Roll number not found
}
startCamera();

const cameraContainer = document.querySelector('.camera-container');

// Add a click event listener to the camera container
cameraContainer.addEventListener('click', focusOnBarcode);

async function focusOnBarcode(event) {
    // Pause the Quagga scanner
    Quagga.stop();

    // Get the clicked point's coordinates
    const clickedX = event.clientX;
    const clickedY = event.clientY;

    // Get the size of the video frame
    const videoWidth = cameraElement.videoWidth;
    const videoHeight = cameraElement.videoHeight;

    // Convert clicked coordinates to relative coordinates within the video frame
    const relativeX = clickedX / cameraContainer.offsetWidth * videoWidth;
    const relativeY = clickedY / cameraContainer.offsetHeight * videoHeight;

    // Use the Quagga locate method to focus on the barcode at the clicked point
    Quagga.locate({
        x: relativeX,
        y: relativeY
    });

    // Resume the Quagga scanner
    Quagga.start();
}
