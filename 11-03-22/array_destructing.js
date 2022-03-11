const array=["value1", "value2"];
let [array1, array2]=array;

console.log("First array is",array1);
console.log("Second array is",array2);

const newarray=["value1"];
let [newarray1, newarray2]=newarray;

console.log("First array is",newarray1);
console.log("Second array is",newarray2);

//for skipingsome value we have to left its position empty and a comma
//like here value 2 is skipped and againnewarray2 stored the value value3
const againnewarray=["value1", "value2", "value3"];
let [againnewarray1, , againnewarray2]=againnewarray;

console.log("First array is",againnewarray1);
console.log("Second array is",againnewarray2);

//copy third and forth element of the array and paste in new array
const Newarray=["value1", "value2", "value3", "value4"];
let MyNewArray=Newarray.slice(2);

console.log(MyNewArray);

//alternative of copy third and forth element of the array and paste in new array
const Array=["value1", "value2", "value3", "value4"];
let [ARRAY1, ARRAY2, ...NEWARRAY]=Array;
console.log("ARRAY1 is :", ARRAY1);
console.log("ARRAY2 is :", ARRAY2);
console.log("REMAINING ARRAY is :", NEWARRAY);


