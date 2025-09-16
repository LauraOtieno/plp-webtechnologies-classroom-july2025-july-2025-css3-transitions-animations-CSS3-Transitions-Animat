// --- Part 2: Functions ---

// Global variable
let globalCounter = 0;

// Function with parameters and return value
function calculateArea(width, height) {
  let area = width * height; // Local variable
  return area;
}

// Function to increase a global counter
function incrementCounter() {
  globalCounter++;
  console.log("Counter is now:", globalCounter);
}

// Function that dynamically updates DOM text
function displayArea(width, height) {
  const area = calculateArea(width, height);
  document.getElementById("areaResult").textContent = `Area: ${area}`;
}
