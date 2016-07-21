var argv = process.argv;

console.log(argv[0] + ": " + typeof argv[0]);
console.log(argv[1] + ": " + typeof argv[1]);
console.log(`${argv[2]}: ${typeof argv[2]}`);
console.log(`${argv[2] + argv[3]}`);
console.log(`${Number(argv[2]) + parseInt(argv[3])}`);

/*var sum = 0;
for (var i=2; i<argv.length; i++)
    sum += +argv[i];
console.log(sum);*/