import * as ReactDOM from 'react-dom';
import Card from './components/card'
import './App.css';

function App() {
  return (
    <div className="App" >
      
       <Card style={{backroundcolor : "pink"}}
       Card_title="BRIGHT"
       Card_subtitle ="DAVID AYER"
   
       Card_description= {`Bright is a 2017 American urban fantasy action filmdirected by David Ayer,
        written by Max Landis,and starring Will Smith,
         Joel Edgerton,Noomi Rapace, Lucy Fry, Édgar Ramírez, 
         and Ike Barinholtz.
         The film is set in an alternate present in
          which humans and mythical creatures co-exist and 
          details an LAPD police officer and his orc partner
          confronting racism and police corruption while protecting
           a magic wand and the elf girl who wields it.`}

       img = "https://images.squarespace-cdn.com/content/v1/575adcf11bbee0fd2d9aa5f8/1515630773659-KPFKSMRIR9S0FT41SVQZ/Bright+horizontal+Poster" 
       
       
       />
       <br></br>
       <Card 
       Card_title="BRIGHT"
       Card_subtitle ="DAVID AYER"
       Card_description= {`Bright is a 2017 American urban fantasy action film directed by David Ayer,
       written by Max Landis,and starring Will Smith, Joel Edgerton, Noomi Rapace, Lucy Fry, Édgar Ramírez, and Ike Barinholtz.
        The film is set in an alternate present in which humans and mythical creatures co-exist and details an LAPD police officer and his orc partner
         confronting racism and police corruption while protecting a magic wand and the elf girl who wields it.`}

       img = "https://images.squarespace-cdn.com/content/v1/575adcf11bbee0fd2d9aa5f8/1515630773659-KPFKSMRIR9S0FT41SVQZ/Bright+horizontal+Poster"
      
       />

     
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
