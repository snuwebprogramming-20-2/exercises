const reduceSum1 = function (arr) {
    // return array의 각 인자의 합.
    let res = 0;
    for(let i = 0; i<arr.length; i++) {
        res += arr[i];
    }

    return res;
}


const reduceSum2 = function (arr) {
    let res = 0;
    arr.forEach(function(elem) {
        res += elem;
    })

    return res;
}

const reduceSum3 = function (arr) {
    return arr.reduce((acc, cur) => acc + cur);
}



const users = [{
    name: '강만수르',
    age:  31
}, {
    name: '호날두',
    age: 33
}, {
    name: '메시',
    age: 32
}]

function showInformationOfUsers(arr) {
    console.log(arr.length);
    arr.forEach(function(user, i){
        console.log(`${i}번째 유저: 이름은 ${user.name}, 나이는 ${user.age}살입니다.`);
    })

    for(let i =0; i< arr.length; i++) {
        let user = arr[i];
        console.log(`${i}번째 유저: 이름은 ${user.name}, 나이는 ${user.age}살입니다.`);
    }
}
showInformationOfUsers(users);


const showStar = (n) => {
    if(n % 2 === 0) {
        console.log('n is even number.');
        return;
    }
    
    for(i = 1; i <= n; i = i + 2) {
        const space = ' '.repeat((n - i) / 2);
        let line = `${space}${'*'.repeat(i)}${space}`;
        console.log(line);
    }
}



const cb = (str) => console.log(str + '!!!')

function a(callback) {
    console.log('hi');
    console.log('hello');
    console.log( 3 + 5);

    callback('yureka');
}

a(cb);
