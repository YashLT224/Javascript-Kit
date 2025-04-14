//Staircase
//Input n=3
//output =3
//explanaition: 1+1+1, 1+2, 2+1


//Problem Explanation:
// You are given a staircase with n steps, and you can climb either 1 step or 2 steps at a time. The task is to find how many distinct ways you can reach the top.

// The explanation you provided gives the possible ways to climb the staircase for n = 3 and n = 4.

function climbStairs(n) {
    let first = 1;  // Base case: ways(1)
    let second = 2; // Base case: ways(2)
    
    for (let i = 3; i <= n; i++) {
      const third = first + second;  // Calculate ways to reach the current step
      first = second;  // Update first to the previous second value
      second = third;  // Update second to the current third value
    }
    
    return second;  // The result will be in 'second' after the loop
  }
  
  console.log(climbStairs(4)); // Output: 5
  