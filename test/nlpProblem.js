const {expect} =require("chai");
const {say}=require("../src/nlpSrc");

describe("Under twenty",function(){
    it("Should say zero",function(){
        expect(say(0)).to.equal("zero");
    });
    it("Should say one",function(){
        expect(say(1)).to.equal("one");
    });
    it("Should say seven",function(){
        expect(say(7)).to.equal("seven");
    });
    it("Should say sixteen",function(){
        expect(say(16)).to.equal("sixteen");
    })
});

describe("Tens",function(){
    it("Should say thirty-one",function(){
        expect(say(31)).to.equal("thirty-one");
    })
    it("Should say eighty",function(){
        expect(say(80)).to.equal("eighty");
    })
    it("Should say ninety-three",function(){
        expect(say(93)).to.equal("ninety-three");
    })
})

describe("Hundreds",function(){
    it("Should say one hundred",function(){
        expect(say(100)).to.equal("one hundred");
    })
    it("Should say one hundred and five",function(){
        expect(say(105)).to.equal("one hundred and five");
    })
    it("Should say nine hundred ninety-five",function(){
        expect(say(995)).to.equal("nine hundred ninety-five");
    })
    it("Should say two hundred twenty-one",function(){
        expect(say(221)).to.equal("two hundred twenty-one");
    })
    it("Should say seven hundred and one",function(){
        expect(say(701)).to.equal("seven hundred and one");
    })
    it("Should say eight hundred eighty-eight",function(){
        expect(say(888)).to.equal("eight hundred eighty-eight");
    })
    it("Should say one hundred fifteeen",function(){
        expect(say(115)).to.equal("one hundred fifteen");
    })
})

describe("Thousand",function(){
    it("Should say one thousand",function(){
        expect(say(1000)).to.equal("one thousand");
    })
    it("Should say one thousand and six",function(){
        expect(say(1006)).to.equal("one thousand and six");
    })
    it("Should say one thousand nine hundred ninety-nine",function(){
        expect(say(1999)).to.equal("one thousand nine hundred ninety-nine");
    })
    it("Should say seven thousand eight hundred and one",function(){
        expect(say(7801)).to.equal("seven thousand eight hundred and one");
    })
    it("Should say eight thousand nine hundred forty",function(){
        expect(say(8940)).to.equal("eight thousand nine hundred forty");
    })
    it("Should say eight thousand fifty",function(){
        expect(say(8050)).to.equal("eight thousand fifty");
    })
    it("Should say one hundred and thirty-one thousand two hundred eleven",function(){
        expect(say(131211)).to.equal("one hundred thirty-one thousand two hundred eleven");
    })
    it("Should say two hundred thousand",function(){
        expect(say(200000)).to.equal("two hundred thousand");
    })
    it("Should say two hundred thousand and one",function(){
        expect(say(200001)).to.equal("two hundred thousand and one");
    })
    it("Should say seventy thousand and one",function(){
        expect(say(70001)).to.equal("seventy thousand and one");
    })
    it("Should say three hundred and three thousand three hundred and three",function(){
        expect(say(303303)).to.equal("three hundred and three thousand three hundred and three");
    })
})

describe("Million",function(){
    it("Should say one million",function(){
        expect(say(1000000)).to.equal("one million");
    })
    it("Should say one million and one",function(){
        expect(say(1000001)).to.equal("one million and one");
    })
    it("Should say two million",function(){
        expect(say(2000000)).to.equal("two million");
    })
    it("Should say one hundred and sixty million three hundred and forty-three thousand one hundred and one",function(){
        expect(say(160343101)).to.equal("one hundred sixty million three hundred forty-three thousand one hundred and one");
    })
    it("Should say two hundred million",function(){
        expect(say(200000000)).to.equal("two hundred million");
    })
    it("Should say twenty hundred million",function(){
        expect(say(20000000)).to.equal("twenty million");
    })
    it("Should say one hundred and one million one hundred and one thousand one hundred and one",function(){
        expect(say(101101101)).to.equal("one hundred and one million one hundred and one thousand one hundred and one");
    })
    it("Should say nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred ninety-nine",function(){
        expect(say(999999999)).to.equal("nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred ninety-nine");
    })
    it("Should say two hundred and one million one hundred and one",function(){
        expect(say(201000101)).to.equal("two hundred and one million one hundred and one");
    })
    it("Should say two hundred million one thousand one hundred and one",function(){
        expect(say(200001101)).to.equal("two hundred million one thousand one hundred and one");
    })
})

describe("Billion", function(){
    it("Should say one billion",function(){
        expect(say(1000000000)).to.equal("one billion");
    })
})