import display1,{display4,display as secondDisplay} from "./secondFile.js"; // outside curly braces it must be default 
import display2,{display3,display as firstDisplay} from "./firstFile.js";   // inside curly braces non default 

display1();
display2();
display3();
display4();
secondDisplay();
firstDisplay();