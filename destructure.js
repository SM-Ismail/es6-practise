const person = {name:"kolim", age:27, job: "bekar", address:"kochukhet", phone:'011313131', friends:['tom', 'tom cruise', 'tom yarn']};
const {job, phone, friends} = person;
console.log(job, phone, friends);

const newfriends = ['a', 'b', 'c', 'd', 'e'];
const [first, second, ...newArray] = newfriends;
console.log(first, second, newArray);