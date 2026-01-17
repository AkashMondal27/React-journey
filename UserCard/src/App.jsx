import UserCard from "./components/userCard"
import "./App.css";
import msd from './assets/msd.jpeg';
import virat1 from './assets/virat1.jpeg';
import rohit1 from './assets/rohit1.jpeg';

function App() {
  return (
    <div className=" container" >
     <UserCard  name = "Mahi" desc = "M . S . Dhoni " img= {msd} style = {{ borderRadius :"1rem"}}/>
     <UserCard  name = "King" desc ="Virat Kohli" img ={virat1}/>
     <UserCard name ="Hitman" desc= "Rohit  Sharma   " img={rohit1}/>
    </div>
  );
}

export default App;
