

// ASCII



/**
 * @param {number} n
 * @return {boolean}
 https://leetcode.com/problems/nim-game/
 */
// var canWinNim = function(n) {
//     return n % 4 !== 0;
// };

var canWinNim = function(n) {
    let result = [null,true,true,true,false];

    for (let i = 5; i <= n; i++) {
        let threeStones = result[i - 3];
        let twoStones = result[i - 2];
        let oneStones = result[i - 1];

        result.push(!(threeStones && twoStones && oneStones))
    }

    return result[n];
};


/*

Tools: 
- 

Notes: 
- Cannot perform approach where we generate every round
  - Number of stones we start of with is too large
  - Exponential behavior 
- Other example cases 
- If, during the friend's turn, we can force them to an 
  unfavorable number, we can win 

- Base Cases: 
    - If it's my turn, and there's 1, 2, or 3 stones left, return true
    - If it's my turn, and there's 4 stones left, return false 



                            stones,turn
                                10,"my"
                    /            |                \
                   9,"f"         8,"f"             7,"f"
            /       |    \
          8,"my"   7,"my"  6,"my"



n = 1 ==> true 
n = 2 ==> true 
n = 3 ==> true 
n = 4 ==> false 
n = 5 ==> true 
n = 6 ==> true
n = 7 ==> true
n = 8 ==> false
n = 9 ==> true
n = 10 ==> true
n = 11 ==> true
n = 12 ==> false



[N,T,T,T,F,T,T,T,F]
 0 1 2 3 4 5 6 7 8 9               
                            
                        5,my
                /        |         \
              4,f        3,f        2,f
        /      |    \
      3,my    2,my   3,my


Example 1:

Input: n = 4
Output: false
Explanation: These are the possible outcomes:
1. You remove 1 stone. Your friend removes 3 stones, including the last stone. Your friend wins.
2. You remove 2 stones. Your friend removes 2 stones, including the last stone. Your friend wins.
3. You remove 3 stones. Your friend removes the last stone. Your friend wins.
In all outcomes, your friend wins.


Example 2:

Input: n = 1
Output: true


Example 3:

Input: n = 2
Output: true
 
