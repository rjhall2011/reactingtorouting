import { BrowserRouter, Routes, Route, Link} from "react-router-dom";

import Home from "./home";
import Films from "./films";
import People from "./people";
import Feature from "./feature";
import Person from "./person";
import Navbar from ""

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <div className="d-flex justify-content-center">
            <img className="w-50" src='assets./logo.png' alt="Studio G Logo" />
          </div>
          <Navbar>
            <div className="d-flex justify-content-center">
            <Link className="btn btn-info mr-4 mt-2" to="/">
              Go Home
            </Link>
            <Link className="btn btn-info mr-4 mt-2" to="/films">
              View Films
            </Link>
            <Link className="btn btn-info mr-4 mt-2" to="/people">
              View People
            </Link>
          </div>
          </Navbar>
         <Routes>
            <Route exact path="/" component={Home} />
            <Route exact path="/films" component={Films} />
            <Route path="/films/:id" component={Feature} />
            <Route exact path="/people" component={People} />
            <Route path="/people/:id" component={Person} />
          </Routes>
      </Routes>
      );
    </BrowserRouter>
  );
};

export default App;
