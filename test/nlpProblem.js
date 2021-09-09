const { expect } = require("chai");
const { say } = require("../src/nlpSrc");
const BN = require('bn.js');

describe("Interval exceded",function(){

    it("Should say exceded", function () {
        expect(say('-1')).to.equal("wrong input");
    });
    it("Should say exceded", function () {
        var nrr2 = new BN('9999999999999999999');
        expect(say(nrr2)).to.equal("wrong input");
    });
    it("test for string",function(){
        expect(say("strtest")).to.equal("wrong input")
    })
})

describe("Under twenty", function () {
    it("Should say zero", function () {
        expect(say(0)).to.equal("zero");
    });
    it("Should say one", function () {
        expect(say(1)).to.equal("one");
    });
    it("Should say seven", function () {
        expect(say(7)).to.equal("seven");
    });
    it("Should say sixteen", function () {
        expect(say(16)).to.equal("sixteen");
    })
});

describe("Tens", function () {
    it("Should say thirty-one", function () {
        expect(say(31)).to.equal("thirty-one");
    })
    it("Should say eighty", function () {
        expect(say(80)).to.equal("eighty");
    })
    it("Should say ninety-three", function () {
        expect(say(93)).to.equal("ninety-three");
    })
})

describe("Hundreds", function () {
    it("Should say one hundred", function () {
        expect(say(100)).to.equal("one hundred");
    })
    it("Should say one hundred and five", function () {
        expect(say(105)).to.equal("one hundred and five");
    })
    it("Should say nine hundred ninety-five", function () {
        expect(say(995)).to.equal("nine hundred ninety-five");
    })
    it("Should say two hundred twenty-one", function () {
        expect(say(221)).to.equal("two hundred twenty-one");
    })
    it("Should say seven hundred and one", function () {
        expect(say(701)).to.equal("seven hundred and one");
    })
    it("Should say eight hundred eighty-eight", function () {
        expect(say(888)).to.equal("eight hundred eighty-eight");
    })
    it("Should say one hundred fifteeen", function () {
        expect(say(115)).to.equal("one hundred fifteen");
    })
})

describe("Thousand", function () {
    it("Should say one thousand", function () {
        expect(say(1000)).to.equal("one thousand");
    })
    it("Should say one thousand and six", function () {
        expect(say(1006)).to.equal("one thousand and six");
    })
    it("Should say one thousand nine hundred ninety-nine", function () {
        expect(say(1999)).to.equal("one thousand nine hundred ninety-nine");
    })
    it("Should say seven thousand eight hundred and one", function () {
        expect(say(7801)).to.equal("seven thousand eight hundred and one");
    })
    it("Should say eight thousand nine hundred forty", function () {
        expect(say(8940)).to.equal("eight thousand nine hundred forty");
    })
    it("Should say eight thousand fifty", function () {
        expect(say(8050)).to.equal("eight thousand fifty");
    })
    it("Should say one hundred and thirty-one thousand two hundred eleven", function () {
        expect(say(131211)).to.equal("one hundred thirty-one thousand two hundred eleven");
    })
    it("Should say two hundred thousand", function () {
        expect(say(200000)).to.equal("two hundred thousand");
    })
    it("Should say two hundred thousand and one", function () {
        expect(say(200001)).to.equal("two hundred thousand and one");
    })
    it("Should say seventy thousand and one", function () {
        expect(say(70001)).to.equal("seventy thousand and one");
    })
    it("Should say three hundred and three thousand three hundred and three", function () {
        expect(say(303303)).to.equal("three hundred and three thousand three hundred and three");
    })
})

describe("Million", function () {
    it("Should say one million", function () {
        expect(say(1000000)).to.equal("one million");
    })
    it("Should say one million and one", function () {
        expect(say(1000001)).to.equal("one million and one");
    })
    it("Should say two million", function () {
        expect(say(2000000)).to.equal("two million");
    })
    it("Should say one hundred and sixty million three hundred and forty-three thousand one hundred and one", function () {
        expect(say(160343101)).to.equal("one hundred sixty million three hundred forty-three thousand one hundred and one");
    })
    it("Should say two hundred million", function () {
        expect(say(200000000)).to.equal("two hundred million");
    })
    it("Should say twenty hundred million", function () {
        expect(say(20000000)).to.equal("twenty million");
    })
    it("Should say one hundred and one million one hundred and one thousand one hundred and one", function () {
        expect(say(101101101)).to.equal("one hundred and one million one hundred and one thousand one hundred and one");
    })
    it("Should say nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred ninety-nine", function () {
        expect(say(999999999)).to.equal("nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred ninety-nine");
    })
    it("Should say two hundred and one million one hundred and one", function () {
        expect(say(201000101)).to.equal("two hundred and one million one hundred and one");
    })
    it("Should say two hundred million one thousand one hundred and one", function () {
        expect(say(200001101)).to.equal("two hundred million one thousand one hundred and one");
    })
})

describe("Billion", function () {
    it("Should say one billion", function () {
        expect(say(1_000_000_000)).to.equal("one billion");
    })
    it("Should say one hundred billion", function () {
        expect(say(100_000_000_000)).to.equal("one hundred billion");
    })
    it("Should say one hundred twenty-three billion three hundred thirty-three million one hundred thousand one hundred and one", function () {
        expect(say(123_333_100_101)).to.equal("one hundred twenty-three billion three hundred thirty-three million one hundred thousand one hundred and one");
    })
    it("Should say one hundred and one billion three hundred and three million one hundred and six thousand one hundred and one", function () {
        expect(say(101_303_106_101)).to.equal("one hundred and one billion three hundred and three million one hundred and six thousand one hundred and one");
    })
    it("Should say one hundred and one billion one hundred and one", function () {
        expect(say(101_000_000_101)).to.equal("one hundred and one billion one hundred and one");
    })
    it("Should say thirty billion nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred and nine", function () {
        expect(say(30_999_999_909)).to.equal("thirty billion nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred and nine");
    })
})

describe("Trillion", function () {
    it("Should say three trillion", function () {
        expect(say(3_000_000_000_000)).to.equal("three trillion");
    })
    it("Should say three trillion one thousand", function () {
        expect(say(3_000_000_001_000)).to.equal("three trillion one thousand");
    })
    it("Should say three trillion fifty million one hundred and one thousand", function () {
        expect(say(3_000_050_101_000)).to.equal("three trillion fifty million one hundred and one thousand");
    })
    it("Should say three hundred trillion fifty million one hundred and one thousand", function () {
        expect(say(300_000_050_101_000)).to.equal("three hundred trillion fifty million one hundred and one thousand");
    })
    it("Should say three hundred trillion one billion fifty million one hundred and one thousand", function () {
        expect(say(300_001_050_101_000)).to.equal("three hundred trillion one billion fifty million one hundred and one thousand");
    })
})
describe("Over Trillion", function () {
    it("Should say three thousand two hundred thirty trillion one hundred eleven billion two hundred twenty-two million three hundred thirty-three thousand four hundred forty-four", function () {
        expect(say(3230111222333444)).to.equal("three thousand two hundred thirty trillion one hundred eleven billion two hundred twenty-two million three hundred thirty-three thousand four hundred forty-four");
    })
    var nr = new BN('31230111222333444');
    it("Should say thirty-one thousand two hundred thirty trillion one hundred eleven billion two hundred twenty-two million three hundred thirty-three thousand four hundred forty-four", function () {
        expect(say(nr)).to.equal("thirty-one thousand two hundred thirty trillion one hundred eleven billion two hundred twenty-two million three hundred thirty-three thousand four hundred forty-four");
    })

    it("Should say thirty-one thousand two hundred thirty trillion one hundred eleven billion two hundred twenty-two million three hundred thirty-three thousand four hundred forty", function () {
        var nrr = new BN('31230111222333440');
        expect(say(nrr)).to.equal("thirty-one thousand two hundred thirty trillion one hundred eleven billion two hundred twenty-two million three hundred thirty-three thousand four hundred forty");
    })

    it("Should say thirty-one thousand two hundred thirty trillion one hundred eleven billion two hundred twenty-two million three hundred thirty-three thousand four hundred forty-nine", function () {
        var nrr2 = new BN('31230111222333449');
        expect(say(nrr2)).to.equal("thirty-one thousand two hundred thirty trillion one hundred eleven billion two hundred twenty-two million three hundred thirty-three thousand four hundred forty-nine");
    })

    describe("Negru tests",function(){
        it("should say ",function(){
            expect(say("")).to.equal("wrong input")
        })
        it("test with strings",function(){
            expect(say("ssss")).to.equal("wrong input")
        })

        it("test with double/float",function(){
            expect(say(10.3)).to.equal("wrong input")
        })
        it("test with negative double/float",function(){
            expect(say(-12.3)).to.equal("wrong input")
        })
        it("test with negative double/float",function(){
            expect(say(-12.3)).to.equal("wrong input")
        })

        it("test with object",function(){
            expect(say({"da":"Nu"})).to.equal("wrong input")
        })


        it("test with over trillion",function(){
            var nrr = new BN('310 230 111 222 333 440');
            expect(say(nrr)).to.equal("three hundred ten thousand two hundred thirty trillion one hundred eleven billion two hundred twenty-two million three hundred thirty-three thousand four hundred forty")
        })

        it("test with over trillion",function(){
            var nrr = new BN('301 203 111 222 333 404');
            expect(say(nrr)).to.equal("three hundred and one thousand two hundred and three trillion one hundred eleven billion two hundred twenty-two million three hundred thirty-three thousand four hundred and four")
        })

        it("test with over trillion with 0 at the end for 100 000 000 000 000 000 ",function(){
            var nrr = new BN('100 000 000 000 000 000');
                             
            expect(say(nrr)).to.equal("one hundred thousand trillion")
        })

        it("test with over trillion with 0 at the end for 100 000 000 000 100 000",function(){
            var nrr = new BN('100 000 000 000 100 000');
                             
            expect(say(nrr)).to.equal("one hundred thousand trillion one hundred thousand")
        })

        it("test with over trillion with 0 at the end for 100 000 000 000 000",function(){
            var nrr = new BN('100 000 000 000 000');
                             
            expect(say(nrr)).to.equal("one hundred trillion")
        })

        it("test with over trillion with 0 at the end for 100 000 000 000 000",function(){
            var nrr = new BN('10 000 000 000 000 000');
                             
            expect(say(nrr)).to.equal("ten thousand trillion")
        })

        it("test with over trillion with 0 at the end for 100 000 000 000 000",function(){
            var nrr = new BN('10 000 000 000 000');
                             
            expect(say(nrr)).to.equal("ten trillion")
        })

        it("test with null",function(){
            expect(say(null)).to.equal("wrong input")
        })

        it("test with undefined",function(){
            expect(say(undefined)).to.equal("wrong input")
        })
        it("test with boolean",function(){
            expect(say(true)).to.equal("wrong input")
        })

    })
})