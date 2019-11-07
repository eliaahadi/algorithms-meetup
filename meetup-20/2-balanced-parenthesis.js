const test = require('../test-boilerplate');

//input: string
//output: boolean

function balanParen(str) {
  let stack = [];
  for (let val of str) {
    if (val === '(' || val === '{' || val === '[') {
      stack.push(val);
    } else if ((val === ')') && stack[stack.length-1] === '(') {
      stack.pop();
    } else if ((val === '}') && stack[stack.length-1] === '{') {
      stack.pop();
    } else if ((val === ']') && stack[stack.length-1] === '[') {
      stack.pop();
    } 
}
  
  console.log('stack: ', stack, stack.length);
  if (stack.length === 0) {
    return true;
  }
  return false;
}

console.log('test1: ', test(balanParen('{'), false));
console.log('test2: ', test(balanParen('()'), true));
console.log('test3: ', test(balanParen('({[]'), false));
console.log('test4: ', test(balanParen('(())'), true));
console.log('test5: ', test(balanParen('let foo = function() { boo();'), false));
console.log('test6: ', test(balanParen('bar = { code: chrysalis() }'), true));
console.log('test7: ', test(balanParen('{[}]'), false));
