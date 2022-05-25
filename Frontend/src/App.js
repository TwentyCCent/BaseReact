import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";

import Header from "./header/header";

import Films from "./pages/films";
import Musiques from "./pages/musiques";
// import TableFilm from "./pages/tableFilms";
import UpdateItem from "./pages/updateItem";
import NewItem from "./pages/newItem";

function App() {
  
  return (
    <div className="App">
      {/* Mise à jour du fichier pour test repo */}
      <h1>Bienvenue au GRETA</h1>
      <Router>
      {/* <Switch> */}
        <Header />
        <Route path="/" exact>
          <Films />
          {/* <TableFilm /> */}
        </Route>
        <Route  path="/films" exact >
          <Redirect to="/" />
        </Route>
        <Route path="/musiques" exact>
          <Musiques />
        </Route>
        <Route path="/musique/new" exact>
          <NewItem route="musiques" />
        </Route>
        <Route path="/film/new" exact>
          <NewItem route="films" />
        </Route>
        <Route path="/musiques/:oeuvreId" >
          <UpdateItem route="musiques" />
        </Route>
        <Route path="/films/:oeuvreId" >
          <UpdateItem route="films" />
        </Route>
        <Redirect to="/" />
        {/* </Switch> */}
      </Router>
      
    </div>
  );
}

export default App;
