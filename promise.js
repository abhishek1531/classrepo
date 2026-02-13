// const fetchData = new Promise ((resolve,reject)=>{
//     // const success = true;
//     const success = false;
//     if(success){
//         resolveo("Data resolve");
//         console.log("data fetched");
//     }
//     else{
//         console.log("Data not found");
//         reject("Data not found");
//     }
// });

const { response } = require("express");



// fetchData.catch((error)=>{
//     console.log("error");
// });

const login = ()=>{
    return Promise.resolve("Log in done");
}

const getUsers = ()=>{
    return Promise.resolve("User Found");
}

const getUserName = ()=>{
    return Promise.resolve("User name found");
}

login().then(()=>{
    getUsers().then(()=>{
        getUserName().then((result)=>{
            console.log("result");
        });
    });
});


//chaning

// login()
// .then(getUsers)
// .then(getUserName)
// .then(console.log)
// .catch((err)=> console.log(err))
// .then(console.log)


Promise.resolve(10)
.then((x)=>x+10)
.then((x)=>x+20);

Promise.resolve(10)
.then((x)=>x+10)
.then((x)=>{
    console.log(x);
     return x + 20;
});


const data = () => 10
const data1 = () => (10)
const newData = () => {
    if(value === 10) return 10;
    return 10
};

Promise.resolve(10)
.then((x)=>{
    x + 10;
})
.then((x)=>{
    console.log(x);
    return x + 20;
})
.then (console.log)

const fetchData = async ()=>{
    await functionality();
};

const functionality = () =>{
    console.log("Started");
}
// const fetchData1 = () => {
//     console.log("Started");
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then(response => response.json())
//         .then(json => console.log(json));
//     console.log("Ended");
// };

// const fetchData1 = () => {
//     console.log("Started");
//     const a = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then(response => response.json())
//         .then(json => console.log(json));
//     const b = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then(response => response.json())
//         .then(json => console.log(json));

//     // const aValue = await a
//     // const bValue = await b    
//     console.log("Ended");
// };

const fetchData1 = async () => {
    console.log("Started");
    const promise1 = fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(res => res.json());
    const promise2 = fetch("https://jsonplaceholder.typicode.com/posts/2")
        .then(res => res.json());
    const data1 = await promise1;
    const data2 = await promise2;

    console.log("First:", data1);
    console.log("Second:", data2);
    console.log("Ended");
};


//event loop


console.log("Started 1");
fetchData1();
console.log("Started 2");

