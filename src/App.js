import logo from './logo.svg';
import './App.css';
import {Header, SubHeader, InfoHeader, AppBar} from "./Components"
import Home from './Views/Home';
import SelectFavorite from './Views/SelectFavorite';




function App() {
  return (
    
    <div className="">
      <AppBar/>
      <Home/>
      {/* <Header title="Select your Favorite pictures"/> */}
      <SelectFavorite/>

      <Header title="Your Information"/>
      <InfoHeader  title="Name"/>
      <SelectFavorite/>
    </div>
  );
}

export default App;
