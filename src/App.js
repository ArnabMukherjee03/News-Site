import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import News from "./Components/Search/News"
import { Route,Routes } from "react-router-dom";
const App = ()=>{
  return(
    <>
    <Nav/>
    <Routes>
      <Route path="/" Component={Home}></Route>
      <Route path="/news" Component={News}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;