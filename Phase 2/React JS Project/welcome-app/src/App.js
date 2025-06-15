import Employee from "./Employee";

function MyHeader() {
  return <div>This is My Header Component</div>
}

function MyFooter() {
  return <div>This is My Footer Component </div>
}

// Parent Component or Root Component 
function App()
{
  return(
 <div>
<MyHeader></MyHeader>
<h1>Hello Again!!</h1>
 <p>Welcome to React project done by Akash Kale!</p>
 <span>This is React JS Span info</span>
<Employee></Employee>
<MyFooter></MyFooter>
  </div>
  )
}
export default App;