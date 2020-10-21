const fs = require('fs');

const fileName = './hello.txt';

const removeFileCallback = (err) => {
    if (err) {
        console.error('error occured!!');
        return;
    }

    console.log('file is deleted.');
};

const readfileCallback = (err, data) => {
    if (err) {
        console.error('error occured!!');
        return;
    };
    console.log(data);

    fs.unlink(fileName, removeFileCallback);
}
const writeCallback = (err) => {
    if (err) {
        console.error('error occured!!');
        return;
    }
    console.log('file is created.');

    fs.readFile('./hello.txt', {encoding: 'utf-8'}, readfileCallback);
}

fs.writeFile(fileName, 'not hello it\'s too hard', writeCallback);


// callback hell
try {
    fs.writeFileSync(fileName, 'not hello it\'s too hard');
    console.log(fs.readFileSync(fileName, {encoding: 'utf-8'}));
    fs.unlinkSync(fileName);
} catch (e) {
    console.error(e);
}

// => promise
