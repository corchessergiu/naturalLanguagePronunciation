let numbers={0:"zero"}

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