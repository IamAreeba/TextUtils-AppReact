import './App.css';

let name = "Areeba";

function App() {
  return (
    // The below is JSX
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>

      <div className="container">
        <h1>Hello {name} </h1>
        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod obcaecati non debitis. Numquam quisquam sed, iste libero saepe corporis similique? </p>
      </div>
    
    
    </>





  );
}

export default App;
