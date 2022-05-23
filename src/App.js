import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {Hero,Works,Welcome,Recipes,Meals} from './components';
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


    </Router>
  );
}

export default App;