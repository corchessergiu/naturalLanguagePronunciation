const BN = require('bn.js');
let numbers = {
    0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen",
    16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen", 20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety",
    100: "hundred", 1000: "thousand", 1000000: "million", 1000000000: "billion", 1_000_000_000_000: "trillion"
};

say = function (number) {
    if (number < 0 || number > 999999999999999999n || typeof (number) === "string") {
        return "wrong input"
    } else {
        if (number === 100 || number === 1000 || number === 1000000 || number === 1000000000) {
            return "one " + numbers[number];
        }
        else {
            if (number in numbers) { //number from 1 to 19 and tens
                return numbers[number];
            } else {
                if (number < 100) { //number from 21 to 99
                    return numbers[number - number % 10] + "-" + numbers[number % 10];
                } else {
                    if (number < 1000) { //number from 101 to 999
                        u = number % 10;
                        z = Math.floor(number % 100 / 10);
                        s = Math.floor(number % 1000 / 100);
                        if (s != 0 && z != 0) {
                            return say(Math.floor(number / 100)) + " " + numbers[100] + " " + say(number % 100);
                        } else {
                            if (z != 0) {
                                return say(Math.floor(number / 100)) + " " + numbers[100] + " " + say(number % 10);
                            } else {
                                if (u != 0 && z === 0) {
                                    return say(Math.floor(number / 100)) + " " + numbers[100] + " and " + say(number % 10);
                                } else {
                                    return say(Math.floor(number / 100)) + " " + numbers[100];
                                }
                            }
                        }
                    } else {
                        if (number < 1_000_000) {    //number from 1001 to 999999     
                            if (number % 1000 < 10 && number % 1000 != 0) {
                                return say(Math.floor(number / 1000)) + " " + numbers[1000] + " and " + say(number % 1000);
                            } if (number % 1000 === 0) {
                                return say(Math.floor(number / 1000)) + " " + numbers[1000];
                            }
                            else {
                                return say(Math.floor(number / 1000)) + " " + numbers[1000] + " " + say(number % 1000);
                            }
                        } else {
                            if (number < 1_000_000_000) { //number from 1_000_001 to 999_999_999
                                if ((Math.floor(number / 1000) % 1000) === 0 && number % 1000 == 0) {
                                    return say(Math.floor(number / 1000000)) + " " + numbers[1000000];
                                } else {
                                    if ((Math.floor(number / 1000) % 1000) != 0 && number % 1000 != 0) {
                                        return say(Math.floor(number / 1000000)) + " " + numbers[1000000] + " " + say(Math.floor(number / 1000) % 1000) + " " + numbers[1000] + " " + say(number % 1000);
                                    } else {
                                        if ((Math.floor(number / 1000) % 1000) === 0 && number % 1000 != 0) {
                                            if (number % 1000 < 10) {
                                                return say(Math.floor(number / 1000000)) + " " + numbers[1000000] + " and " + say(number % 1000000);
                                            } else {
                                                return say(Math.floor(number / 1000000)) + " " + numbers[1000000] + " " + say(number % 1000000);
                                            }
                                        } else {
                                            if ((Math.floor(number / 1000) % 1000) != 0 && number % 1000 === 0) {
                                                return say(Math.floor(number / 1000000)) + " " + numbers[1000000] + " " + say(number % 1000000);
                                            }
                                        }
                                    }
                                }
                            } else {
                                if (number < 1_000_000_000_000) {
                                    if (number % 1000000000 != 0) {
                                        return say(Math.floor(number / 1000000000)) + " " + numbers[1000000000] + " " + say(number % 1000000000);
                                    } else {
                                        return say(Math.floor(number / 1000000000)) + " " + numbers[1000000000];
                                    }
                                } else {
                                    if (number < 1_000_000_000_000_000) {
                                        if (number % 1000000000000 != 0) {
                                            return say(Math.floor(number / 1000000000000)) + " " + numbers[1000000000000] + " " + say(number % 1000000000000);
                                        } else {
                                            return say(Math.floor(number / 1000000000000)) + " " + numbers[1000000000000];
                                        }
                                    } else {
                                        var bigNumber = new BN(number);
                                        var numar = bigNumber.toString().slice();
                                        var nrToString = bigNumber.toString();
                                        var lastDigits = numar.slice(numar.length - 12); 
                                        var nrr = Math.floor(nrToString / 1_000_000_000_000);
                                        return say(parseInt(nrr)) + " " + numbers[1000000000000] + " " + say(parseInt(lastDigits));
                                    }
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