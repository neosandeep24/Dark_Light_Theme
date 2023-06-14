import './App.css';
import React from 'react';


function App() {

  const [theme,Settheme]=React.useState(true)

  const[text,Settext]=React.useState("light")

  function flipo(){
    Settheme(prev=>!prev)
    Settext(theme === true ? "light":"dark")
  }
  const style={
   color: theme === true ? "white":"black",
    backgroundColor: theme===true ? "#222222" : "transparent" 
  }
  const nstyle={
    color: theme === true ? "white":"black",
     backgroundColor: theme===true ? "black" : "transparent" 
   }
  

return(
  <div className="App">
     <div className="header" style={nstyle}>
     <nav
            className={theme ? "dark": ""}
     >
            <h2>Themes</h2>
            
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={flipo}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>

    </div>

   <div style={style} className="para">
    <button onClick={flipo}>{text}</button>
    
    <h1>Fun things to do</h1>
    <ul className="main--facts">
                <li>Create Innovative things</li>
                <li>Go on a Vacation where the Surroundings are Calm and peacefull</li>
                <li>Watch Movies and Series which relieves you from stress</li>
                <li>Do pranks that does not harm</li>
                <li>Sleep ,Eat ,Work || ENJOY A PEACEFUL LIFE</li>
     </ul>
  </div>

  </div>
);

}

export default App;
