let func1 = (a) => a + 1;
let func2 = (a) => a + 1;

let func3 = func1;

console.log(func1 === func2);
console.log(func1 === func3);
func1 = (a) => a + 2;


console.log(func1 === func3);

console.log(func1);

-----------   <= func3
a => a + 1    <= func1
-----------
a => a + 1    <= func2
-----------
(a) => a + 1  
------------
