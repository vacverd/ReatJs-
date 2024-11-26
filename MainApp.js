import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import MovieDetail from "./routes/MovieDetail";

function MainApp() {
  return <Router>
    <Switch>
      <Route path="/movie-details/:id">
        <MovieDetail />
      </Route>
      <Route path="/">
        <Dashboard />
      </Route>
    </Switch>
  </Router>;
}
export default MainApp;
