let numbers = {
    0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen",
    16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen", 20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety",
    100: "hundred", 1000: "thousand", 1000000: "million"
};

say = function (number) {
    if (number === 100 || number === 1000 || number === 1000000) {
        return "one " + numbers[number];
    }
    else {
        if (number in numbers) {
            return numbers[number];
        } else {
            if (number < 100) {
                return numbers[number - number % 10] + "-" + numbers[number % 10];
            } else {
                if (number < 1000) {
                    tens = number % 100;
                    ten = Math.floor(tens / 10);
                    if (number % 10 != 0 && ten===0) { //exemple 200
                        return numbers[Math.floor(number / 100)] + " " + numbers[100] + " and " + numbers[number % 10];
                    } else {
                        if (number % 10 === 0 && ten===0) {
                            return numbers[Math.floor(number / 100)] + " " + numbers[100]
                        } else {
                            return numbers[Math.floor(number / 100)] + " " + numbers[100] + " " + say(number % 100);
                        }
                    }
                } else {
                    if (number < 1000000) {
                        u = number % 10;
                        z = Math.floor(number % 100 / 10);
                        s = Math.floor(number % 1000 / 100);
                        console.log(u + " " + z + " " + s);
                        if (number < 10000) {
                            if (s === 0 && z === 0) {
                                return numbers[Math.floor(number / 1000)] + " " + numbers[1000] + " and " + numbers[number % 10];
                            } else {
                                return numbers[Math.floor(number / 1000)] + " " + numbers[1000] + " " + say(number % 1000);
                            }
                        } else {
                            if (number > 10000) {
                                if (z === 0 && s === 0 && u === 0) {
                                    return say(Math.floor(number / 1000)) + " " + numbers[1000];
                                }
                                else {
                                    return say(Math.floor(number / 1000)) + " " + numbers[1000] + " " + say(number % 1000);
                                }
                            }
                        }

                    }
                }
            }
        }
    }
}

module.exports = {
    say
}