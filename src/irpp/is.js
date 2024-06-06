// Define the parameters with the new function
const T = [0, 42500, Infinity];
const tau = [0.15, 0.25, 0.25];

// Function to compute the sum from i=0 to i=5 with max(0, min(R, T[i+1]) - T[i])
const calculateIs = (R) => {
    let total_sum = 0;
    for (let i = 0; i < 2; i++) {
        total_sum += Math.max(0, Math.min(R, T[i+1]) - T[i]) * tau[i];
    }
    return total_sum;
};

export default calculateIs;