const func1 = (arr) => arr.reduce((prev, cur) => prev + cur % 3, 0);
//{a: 'ab' b: 'bc'}
 => ['a', 'b']

//obj1: {a: 'ab' b: 'bc'}
//obj2: {a: undefined}

const func2 = (obj1, obj2) => {
    const res = {};

    Object.keys(obj1).forEach(key => {
        if(!Object.keys(obj2).includes(key)) res[key] = obj1[key];
        // if(obj2[key] === undefined) res[key] = obj1[key];
    });

    return res;
}

//filter, append, map, reduce, filter, any, select
const func3 = (arr) =>  arr.filter(elem => elem.age >= 30).map(elem => elem.name);

// [[1,2,3,4], [5,6], [7,8,89], [1,2,3,4]]

// => [2,4,6,8]
const func4 = (arrOrArr) => {
    const maxLength = arrOrArr.reduce((prev, arr) => Math.max(prev, arr.length), 0);

    const targets = arrOrArr.filter(arr => arr.length === maxLength);
    const res = new Array(maxLength).fill(0);
    targets.forEach(elem => {
        elem.forEach((e, i) => res[i] += e);
    })

    return res;
    // return targets.reduce((prev, cur)=> cur.map((e, i) => e + prev[i]), );
}

const func5 = (str) => {
    // const word = str.split(' ').reduce((prev, cur)=> prev.length >= cur.length ? prev : cur, '');

    const words = str.split(' ');
    let maxLengthWord = '';
    words.forEach(word => {
        if(maxLengthWord.length < word.length)
            maxLengthWord = word;
    })

    return maxLengthWord[2];
}
