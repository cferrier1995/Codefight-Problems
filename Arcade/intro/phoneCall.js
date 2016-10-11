/*

 Some phone usage rate may be described as follows:

 first minute of a talk costs min1 cents,
 each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
 each minute after 10th costs min11 cents.
 You have S cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?

 Example

 For min1 = 3, min2_10 = 1, min11 = 2 and S = 20, the output should be
 phoneCall(min1, min2_10, min11, S) = 14.

 Here's why:

 the first minute costs 3 cents, which leaves you with 20 - 3 = 17 cents;
 the total cost of minutes 2 through 10 is 1 * 9 = 9, so you can talk 9 more minutes and still have 17 - 9 = 8 cents;
 each next minute costs 2 cents, which means that you can talk 8 / 2 = 4 more minutes.
 Thus, the longest call you can make is 1 + 9 + 4 = 14 minutes long.

 Input/Output

 [time limit] 4000ms (js)
 [input] integer min1

 Constraints:
 1 ≤ min1 ≤ 10.

 [input] integer min2_10

 Constraints:
 1 ≤ min2_10 ≤ 10.

 [input] integer min11

 Constraints:
 1 ≤ min11 ≤ 10.

 [input] integer S

 Constraints:
 2 ≤ S ≤ 60.

 [output] integer
 */


function phoneCall(min1, min2_10, min11, S) {
    var totalMinutes = 0;
    if (S >= min1){
        S -= min1;
        totalMinutes += 1;
    }
    console.log("They have " + S + " coins left");
    console.log("They have " + totalMinutes + " minutes");

    if (S >= min2_10){
        var max = 9 * min2_10;
        var result = S - max;
        if (result > 0){
            totalMinutes += 9;
            S -= max;
        }
        else
        {
            totalMinutes += Math.floor(S/min2_10);
            S = 0;
        }
    }
    console.log("They have " + S + " coins left");
    console.log("They have " + totalMinutes + " minutes");
    if (S >= min11){
        totalMinutes += Math.floor(S/min11);
    }
    console.log("They have " + S + " coins left");
    console.log("They have " + totalMinutes + " minutes");
    return totalMinutes;
}
