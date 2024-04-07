import './App.css';



function App() {
  return (
    // The below is JSX
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">TextUtils</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
              
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>


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