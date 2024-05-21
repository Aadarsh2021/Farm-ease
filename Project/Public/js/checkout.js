// Smart contract ABI
const contractABI = [
    // Your smart contract ABI here
    [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_customer",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "_crop",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_price",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_deliveryDate",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "length",
                    "type": "uint256"
                }
            ],
            "name": "StringsInsufficientHexLength",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "crop",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "customer",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "delivered",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "deliveryDate",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "farmer",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "generateVerificationQRCode",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "paid",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "price",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
];

// Initialize Web3
async function initWeb3() {
    if (typeof window.ethereum !== 'undefined') {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    } else {
        console.warn('MetaMask not detected!');
    }
}

// Initialize the contract instance
async function initContract() {
    const networkId = await web3.eth.net.getId();
    const contractAddress = '0x334F0f502797C4B77D4aD38D1C851ddCF30f1e84'; // Your contract address here
    window.farmToTableContract = new web3.eth.Contract(contractABI, contractAddress);
}

// Function to handle "Next" button click for step 1
async function handleNextStep1() {
    // Hide step 1 form
    document.querySelector('.step1').style.display = 'none';
    // Show step 2 form
    document.querySelector('.step2').style.display = 'block';
}

// Function to handle "Next" button click for step 2
async function handleNextStep2() {
    try {
        // Call smart contract method to deliver
        await farmToTableContract.methods.deliver().send({ from: web3.eth.defaultAccount });

        // Show success message
        alert('Payment successful! Your order has been placed.');

        // Redirect user to home page
        window.location.href = 'home.html';
    } catch (error) {
        console.error('Error processing payment:', error);
        // Show error message
        alert('Error processing payment. Please try again later.');
    }
}

// Function to initialize the checkout page and attach event listeners
async function initCheckout() {
    // Initialize Web3
    await initWeb3();

    // Initialize the contract instance
    await initContract();

    // Attach event listeners to "Next" buttons
    document.getElementById('next-step1').addEventListener('click', handleNextStep1);
    document.getElementById('next-step2').addEventListener('click', handleNextStep2);
}

// Call the function to initialize the checkout page
initCheckout();
