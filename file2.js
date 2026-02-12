const count = requires("./counter");
const funOnDiffPage = () =>{
    console.log("count in second page",count);
}

module.exports = funOnDiffPage

((exports,module,require,fileName , dirName)=>{
    // all our code
})