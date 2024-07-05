//immediate invoked function expression
// pollutin from global function and to start function from start 
// read documenatiton

// named iife

(function abcd(){
    console.log("db connected")
})();
// it is necessary to add semicolon to stop the function

// simple iife
((name)=>{
    console.log(`db2 connected , hi ${name}`)
})();