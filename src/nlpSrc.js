let numbers={0:"zero",1:"one",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine"};

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