import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {Hero,Works,Welcome,Recipes} from './components';
import GlobalStyles from './GlobalStyles';
function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Hero/>
      <Works/>
      <Welcome/>
      <Recipes/>


    </Router>
  );
}

export default App;