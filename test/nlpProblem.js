const {expect} =require("chai");
const {say}=require("../src/nlpSrc");

describe("Zero case",function(){
    it("Should say zero",function(){
        expect(say(0)).to.equal("zero");
    });

    it("Should say one",function(){
        expect(say(1)).to.equal("one");
    });
  
});