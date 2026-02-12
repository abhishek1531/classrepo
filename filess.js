// console.log("A");
// console.log("B");
// console.log("C");
//Line 1 pushed to the stack
//line 1 is executed 
//line 1 is popped from stack
//line 2 pushed to the stack
//line 2 is executed 
//line 2 is popped from stack

// what is call stack ,event loop , callback function

const a = ()=>{
    setTimeout(()=>{
        console.log("async function 1");
    },1000);
    setTimeout(()=>{
        console.log("asyn function 2")
    },0)
     b();
     console.log("a");
};

const b = ()=>{
    // c();
     console.log("b");
     c();
};

const c = ()=>{
     console.log("c");
};

Promise.resolve().then(()=>{
    console.log("async function 3");
});

Promise.resolve().then(()=>{
    console.log("async function 4");
});

a();

// write own defination of event loop and set time out 

// a pushed to stack
// b pushed to stack
// c pushed to stack
// c is executed
// c is popped from stack
// b is executed
// b is popped from stack
// a is pushed
// a is popped from stack


