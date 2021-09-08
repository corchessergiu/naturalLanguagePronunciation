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
})