function display1() {
    console.log("display1 function from firstFile.js or firstFile module")
}

function display4() {
    console.log("display4 function from secondFile.js or secondFile module")
}

function display() {
    console.log("display function part of secondFile.js ")
}

export default display1;
export {display4,display}