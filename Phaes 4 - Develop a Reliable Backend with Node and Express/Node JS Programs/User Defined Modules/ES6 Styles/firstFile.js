function display2() {
    console.log("display2 function from secondFile.js or secondFile module")
}

function display3 () {
    console.log("display3 function from secondFile.js or secondFile module")
}


function display() {
    console.log("display function part of firstFile.js ")
}

export default display2;    // we can export only one function or variable, class or array variable. 
export {display3,display};