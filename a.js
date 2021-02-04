a = [1, 2,3, 4, 5];
b = [11, 22, 33, 44];
c = [111, 222, 333, 444];
d = [...a, ...b, ...c];
console.log(d);
e = Math.max (...c);
console.log(e);
