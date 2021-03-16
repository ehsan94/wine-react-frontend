import Navbar from './components/nav-bar.component';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './screens/home.screen';
import AddScreen from './screens/add.screen';
import EditScreen from './screens/edit.screen';


function App() {
  return (
    <div className="App">

      <Router>
        <div>
          <Navbar />
          <Switch>

            <Route path="/add" component={AddScreen} />

            <Route path="/edit/:id" component={EditScreen} />

            <Route path="/" component={HomeScreen} />

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
