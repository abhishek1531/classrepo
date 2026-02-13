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

const fetchData1 = () => {
    console.log("Started");

    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
        .then(json => console.log(json));

    console.log("Ended");
};

console.log("Started 1");
fetchData1();
console.log("Started 2");

