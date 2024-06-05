// Define the parameters with the new function
const T = [0, 11295, 28787, 82342, 177106, Infinity];
const tau = [0, 0.11, 0.30, 0.41, 0.45, 0.45];

// Function to compute the sum from i=0 to i=5 with max(0, min(R, T[i+1]) - T[i])
const calculateIrpp = (R) => {
    let total_sum = 0;
    for (let i = 0; i < 5; i++) {
        total_sum += Math.max(0, Math.min(R, T[i+1]) - T[i]) * tau[i];
    }
    return total_sum;
};

export default calculateIrpp;