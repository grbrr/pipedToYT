const open = require('open');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Insert message with "piped" link: ', function (val) {
    if (val.includes('https://piped')) {
        val = val.split(' ');
        val.forEach(element => {
            if (element.includes('https://piped')) {
                element = element.split('/');
                open('https://www.youtube.com/' + element[3]);
                rl.close();
            }
        });
    } else {
        console.log('No link found.');
        rl.close();
    }
});

rl.on('close', function () {
    //console.log('Script ended.');
});
