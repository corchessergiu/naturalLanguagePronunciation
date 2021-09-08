const {expect} =require("chai");
const {say}=require("../src/nlpSrc");

describe("Under twenty cases",function(){
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
})