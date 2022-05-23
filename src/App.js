import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {Hero,Works,Welcome,Recipes,Meals, Footer} from './components';
import GlobalStyles from './GlobalStyles';
function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Hero/>
      <Works/>
      <Welcome/>
      <Recipes/>
      <Meals/>
      <Footer/>


    </Router>
  );
}

export default App;