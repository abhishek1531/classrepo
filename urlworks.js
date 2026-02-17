//url
// https://  -> Protocol
// Data transfer ka rule batata hai (secure connection ke liye HTTPS use hota hai)

// glauniversity.in -> Domain / DNS
// Website ka address hota hai jisse browser server ko find karta hai

// /UploadAttendance.aspx -> Path Parameter
// Website ke andar ka exact page ya resource batata hai

// ?access_key=Mjajfnsjnf==&param2=value2  -> Query Parameter
// Server ko extra data bhejne ke liye use hota hai (jaise key, search value, filters)

// #key or #somevariable -> Hash
// Page ke specific section par directly jump karne ke liye use hota hai

// ---------------------------------------------------------------------------------------------



// https://  -> Protocol
// Data ko secure tareeke se internet par transfer karta hai

// www.amazon.in -> Domain / DNS
// Website ka main address jisse browser server ko locate karta hai

// /Samsung-Galaxy-Storage-Silver-Shadow/dp/B0DVC857PM/ref=sr_1_1 -> Path Parameter
// Website ke andar specific product/page ka location batata hai

// ?crid=116IXEWB5ER2P&dib=...&keywords=samsung+s25+plus&qid=1771318999&sr=8-1&th=1 -> Query Parameters
// Server ko extra information bhejte hain (search keyword, product id, filters, etc.)

// https://www.amazon.in/Samsung-Galaxy-Storage-Silver-Shadow/dp/B0DVC857PM/ref=sr_1_1?crid=116IXEWB5ER2P&dib=
// eyJ2IjoiMSJ9.ae_aYPk5aPENvzwkNl2e7SmB7f5IhlayyYpxtym3KEJAGx9NmiApI3uvSGEiIHb8d87cUPwdTb3z6YXpsJCB5o087CrseRWol6pYOXO0ZT7MKrziVdNKspFUnW97hR54-mC8CLXlxi5b1YlgVAUlFA1xpfzg3htsINE7VpeUY6o372JpeZPwS_pBhqVTAedVigzlv5SSxe-7Ijf4antXxojyfMjgi4hv4b9R2KfYq30.bevX-jrrFqyjG_cQJnM8u079l3hSA2WryeYfmbqTNL4&dib_tag=se&keywords=samsung%2Bs25%2Bplus&qid=1771318999&sprefix=samsung%2Bs25%2Bplus%2Caps%2C381&sr=8-1&th=1

// {
//     "node",
//     "urlworks",
//     "add",
//     "1",
//     "5"
// }

const [, , functionName, value1, valu2] = process.argv;

//const functionName = process.argv[2];
console.log(functionName);
//const value1 = process.argv[3];
console.log(value1);
//const valu2 = process.argv[4];
console.log(valu2);

if(functionName === "add"){
    console.log(Number(value1) + Number(valu2));
}

if(functionName === "multi"){
    console.log(value1 * valu2);
}
