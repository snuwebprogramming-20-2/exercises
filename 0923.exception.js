const sumAllElements = (arr) => {
    let total = 0;
   
    while(arr.length > 0) {
      let elem = arr.pop(); 
      if(isNaN(elem)) return 'element is not number';
      total += elem;
    }
    return total;
}

const sumAllElements2 = (arr) => {
    if (!Array.isArray(arr)) throw new Error('input is not array');
    let total = 0;
   
    while(arr.length > 0) {
      let elem = arr.pop(); 
      if(isNaN(elem)) throw new Error(`${elem} is not number`);
      total += elem;
    }
    return total;
}

let arr2;
try {
    arr2 = [1,3,5,'문자열',6];
    let result = sumAllElements2(arr2);
    console.log('hihi');
} catch(e) {
    console.error(e);
}

console.log(arr2);
