import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "routes";
import Loading from "Loading";

const Layout = () => {
  return (
    <div className="layout">
      <Router>
        <nav>
          {routes.map((route, i) => (
            <Link className="link" to={route.path} key={i}>
              {route.linkLabel}
            </Link>
          ))}
        </nav>
        <main>
          <Suspense fallback={<Loading />}>
            <Switch>
              {routes.map((route, i) => (
                <Route
                  path={route.path}
                  render={() => <route.component />}
                  key={i}
                ></Route>
              ))}
            </Switch>
          </Suspense>
        </main>
      </Router>
    </div>
  );
};

export default Layout;
