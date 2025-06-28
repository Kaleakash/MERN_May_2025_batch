import { useEffect } from "react";

function Hello() {

useEffect(()=> {
    // when loaded this code execute 
    console.log("component loaded... ie Component mount(added in actual DOM)")

    // return code execute when component removed from dom. 
    return ()=> console.log("component unload ... ie Component unmount(removed) from dom")
},[])

    return(
        <div>
            <h4>Hello Component</h4>
        </div>
    )
}

export default Hello;