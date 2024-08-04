let a = prompt("Enter a number")

let b = prompt("enter second number")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError('Wrong input')
}
let sum = parseInt(a) + parseInt(b)

function main(){
    let x=1;
try {
    console.log('The sum is ', sum );
    return true;
}
catch (error) {
    console.log('Error.......in the code haha');
    return false;

}

finally {
    console.log('This is final block');

}
}

let c=main()
console.log(c);

