import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";


function App() {
  return (
    // The below is JSX
    <>
    
      {/* <Navbar title="TextUtils" about="About" /> */}
      {/* <Navbar /> */}
      <Navbar title="TextUtils" />

      <div className="container my-3">
         <TextForm heading='Enter The Text to Analyze Below' />
      </div>

    </>

  );
}

export default App;


// ====================== 4 ========================
/*
    // It has to be above the function
    let name = "Areeba";

     <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>

      <div className="container">
        <h1>Hello {name} </h1>
        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod obcaecati non debitis. Numquam quisquam sed, iste libero saepe corporis similique? </p>
      </div>
       
*/