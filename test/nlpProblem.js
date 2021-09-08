const {assert, expect} =require("chai");
const {say}=require("../src/nlpSrc");

describe("Zero case",function(){
    it("Should say zero",function(){
        expect(say(0)).to.equal("zero");
    });
});