module.exports = function reverse (n) {
 let number=n;
 if (n<0){
    number=n * (-1);
 }
 let str=number.toString();
 let array=str.split('');
 let reverseArray=array.reverse();
 let result=reverseArray.join('');
 return reslut=Number(result);
}
