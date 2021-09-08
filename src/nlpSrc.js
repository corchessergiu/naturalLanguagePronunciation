let numbers={0:"zero",1:"one"};

say=function(number){
    if(number in numbers){
        return numbers[number];
    }
        else
        throw "Error input";
}

module.exports={
   say
}