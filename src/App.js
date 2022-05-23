import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {Hero,Works} from './components';
import GlobalStyles from './GlobalStyles';
function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Hero/>
      <Works/>


    </Router>
  );
}

export default App;