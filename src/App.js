import logo from "./Images/image-header-desktop.jpg"
import './App.css';

function App() {
  return (

    <>
    
    <main>
    <div className = "image">
      <img src={logo} alt= "Table of ladies"/>
    </div>
    <div className="container">
        <div>
            <h1>Get <span class="strong">insights</span> that help your business grow.</h1>
                <p className="main">Discover the benefits of data analytics and make better decision regarding revenue, customer experience and overall efficiency.</p>
        </div>

        <div className="sub-container">
            <div className="first">
                <h2>10k+</h2>
                <p>COMPANIES</p>
            </div>
          
            <div className="second">
                <h2>314</h2>
                <p>TEMPLATES</p>
            </div>
          
            <div className="third">
                <h2>12M+</h2>
                <p>QUERIES</p>
            </div>
        
        </div>
      
      </div>
    
    </main>
  
    </>
  );
}

export default App;
