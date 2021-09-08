let numbers={0:"zero",1:"one",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine",10:"ten",11:"eleven",12:"twelve",13:"thirteen",14:"fourteen",15:"fifteen",
16:"sixteen",17:"seventeen",18:"eighteen",19:"nineteen",20:"twenty",30:"thirty",40:"forty",50:"fivety",60:"sixty",70:"seventy",80:"eighty",90:"ninety"};

say=function(number){
    if(number<20 || number%10===0){
        return numbers[number];
    }else{
        units=number%10;
        tens=number-number%10;
        return numbers[tens]+"-"+numbers[units];
    }
}

module.exports={
   say
}