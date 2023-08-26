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

const StudentID = [3916735, 4185798, 3736490, 3896173, 3814525, 3881383, 4185794,
    4185787,
    3904707,
    3925849,
    4056930,
    3992564,
    3736460,
    4622927,
    3736475,
    4481638,
    3736528,
    4628875,
    4829611,
    4185796,
    4722326,
    3736548,
    3874743,
    3736503,
    4477847,
    4057578,
    3814528,
    3905226,
    3881386,
    4477845,
    3843233,
    3834314,
    4484109,
    3832212,
    4515262,
    4556559,
    3882824,
    4484106,
    3918033,
    3736507,
    4529200,
    4757777,
    4185792,
    3736502,
    4477846,
    4185786,
    4733689,
    4185784,
    3906737,
    3871567,
    3890174,
    3817776,
    3824451,
    4731360,
    3824447,
    4640568,
    4491062,
    4496024,
    3890175,
    3924705,
    3824457,
    4736733,
    4704126,
    4534669,
    4479866,
    3736531,
    4479865,
    4624419,
    3736476,
    4554927,
    4510073,
    4675413,
    4617553,
    3828745,
    3736420,
    3736421,
    4617756,
    3736433,
    3849671,
    4713280,
    3736546,
    3888541,
    4719220,
    3830714,
    4613114,
    3871568,
    3871566,
    3924996,
    3869380,
    4735475,
    4624198,
    3736552,
    3920498,
    3736470,
    4484108,
    4069298,
    4484111,
    3890176,
    3736534,
    4056930,
    3814529,
    4524199,
    4494386,
    3920578,
    4478081,
    3835941,
    3736428,
    4680323,
    3904707,
    4613507,
    3736509,
    3835941,
    4479869,
    4534499,
    3827526,
    3843239,
    3917345,
    3736557,
    4673662,
    4544853,
    3736482,
    3736539,
    3824816,
    3904706,
    3736425,
    3814527,
    3837650,
    3736545,
    3736525,
    3827524,
    3920497,
    3824452,
    3736429,
    3842477,
    4489664,
    3824449,
    3894577,
    3736483,
    3831709,
    3736519,
    4640567,
    4481639,
    4436618,
    3824455,
    4622927,
    4436619,
    4664959,
    4465975,
    4630042,
    3815545,
    4496026,
    3888539,
    3916250,
    4057289,
    3882823,
    4018731,
    4511502,
    3736532,
    3921894,
    3882829,
    3736484,
    3736518,
    4826959,
    4185782,
    3736544,
    3824461,
    4489663,
    3736515,
    4617758,
    3736529,
    3992953,
    3873873,
    4007359,
    3916734,
    4617757,
    4482174,
    3843238,
    3736508,
    4795826,
    4489665,
    3873789,
    3889418,
    3736516,
    4484110,
    4534498,
    3834318,
    4431948,
    3736537,
    3897923,
    3834317,
    3904801,
    3824459,
    3843237,
    4547377,
    4671975,
    3736522,
    3736491,
    4523384,
    4517483,
    3736479,
    3831708,
    3824453,
    4215786,
    3873062,
    4638199,
    4671976,
    4535354,
    4617755,
    4491063,
    3736423,
    4543971,
    3736445,
    3736481,
    4510072,
    4477978,
    3888540,
    3834508,
    3736500,
    3888542,
    4494388,
    3736541,
    4489666,
    3736474,
    3824462,
    3736495,
    3736488,
    4185789,
    3824456,
    4484107,
    3824450,
    4479864,
    4525520,
    4525969,
    4623428,
    4486274,
    3732661,
    4185785,
    3736512,
    4818943,
    3736510,
    3736530,
    4529199,
    4545426,
    4628932,
    3920495,
    3736535,
    4529201,
    4481830,
    3736505,
    4479868,
    3905611,
    4535356,
    4713279,
    4544852,
    4481829,
    3736520,
    3736448,
    4479863,
    4496027,
    4538003,
    4666039,
    4536553,
    3736428,
    4453845,
    3834313,
    4436620,
    4523385,
    3736451,
    3736439,
    4547373,
    3736441,
    3918303,
    3736524,
    3736456,
    3736472,
    4546838,
    3736457,
    4554783,
    3889417,
    4622365,
    3736452,
    4824696,
    3736431,
    3873260,
    4820607,
    3736443,
    3847595,
    3736437,
    3736461,
    4632296,
    4484105,
    4480025,
    4679109,
    4716422,
    3871564,
    3824458,
    3834316,
    3815546,
    3831710,
    3927327,
    3824448,
    4185783,
    3736486,
    3736498,
    3736496,
    3736521,
    3736523,
    3736549,
    3736550,
    3736458,
    4515261,
    3736468,
    3732610,
    3736514,
    3828373,
    3736494,
    4185797,
    3736469,
    3917344,
    4503981,
    4713323,
    3736459,
    4185793,
    4185780,
    4665355,
    4722112,
    3834458,
    4185788,
    4636420,
    3824460,
    3736467,
    3736543,
    4624420,
    3736497,
    3736453,];
StudentID.sort((a, b) => a - b)
const ScannedId = []

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
    ScannedId.sort((a, b) => a - b)
    if (!binarySearch(ScannedId, Id)) {
        ScannedId.push(Id)
    }
    const isIdInStudent = binarySearch(StudentID, Id);
    const isIdInScanned = binarySearch(ScannedId, Id)
    if (isIdInScanned && isIdInStudent) {
        document.getElementById('result').innerHTML = `
         <h3>Already scanned once</h3>
        <h2>WELCOME <br> TO <br> GALACTIC x NEON</h2>
        `;
    }
    else if (isIdInStudent) {
        document.getElementById('result').innerHTML = `
            <h2>WELCOME <br> TO <br> GALACTIC x NEON</h2>
        `;
    }

    else if (isIdInScanned) {
        document.getElementById('result').innerHTML = `
            <h3>Already scanned once</h3>
            <h2>Failed</h2>
            
        `;
    }
    else {
        document.getElementById('result').innerHTML = `
            <h2>Failed</h2>
            <p>No matching student found</p>
        `;
    }

    document.getElementById('showdata').innerHTML = `${ScannedId}`
    setTimeout(() => {
        document.getElementById('result').innerHTML = 'Scan again to view'; // Clear the result after 3 seconds
        scanning = true; // Resume scanning
    }, 2000)
});

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midRollno = arr[mid];

        if (midRollno === target) {
            return true; // Found the roll number
        } else if (midRollno < target) {
            left = mid + 1; // Continue searching in the right half
        } else {
            right = mid - 1; // Continue searching in the left half
        }
    }

    return false; // Roll number not found
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
