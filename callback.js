const fetchData = (a,b,cb) =>{
    cb('${a+b} Data Initiated');
};

'${}'

const internalFunction = (data) =>{
    console.log(data);
};
fetchData(1,2,internalFunction);

// fetchData((data) =>{
//     console.log("data",data);
// });

