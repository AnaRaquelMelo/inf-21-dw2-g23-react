
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import FilmesList from './FilmesList';
import AddFilmes from './AddFilmes';
import FilmeDetail from './FilmeDetail';
import AtoresList from './AtoresList';
import AddAtores from './AddAtores';
import AtorDetail from './AtorDetail';
import api from '../api/api';

function App() {
  const parseFilme = (filme) =>{
    return {
      title: filme.title,
      release_year: parseInt(filme.releaseYear),
      language: filme.language,
      lenght: parseInt(filme.length),
      rating: parseFloat(filme.rating)
    } 
  }
  const [filmes, setFilmes] = useState([]);
  const [atores, setAtores] = useState([]);

  const addFilmesHandler = async (filme) => {
    const response = await api.post("/filmes", parseFilme(filme));
    setFilmes([...filmes, getFilmes()]);
  }

  const addAtoresHandler = async (ator) => {
    const response = await api.post("/atores", ator);
    setFilmes([...ator, getAtores()]);
  }

  const getFilmes = async () => {
    const response = await api.get("/filmes");    
    return response;
  }

  const editFilmesHandler = async (id, filme) => {    
    await api.put(`/filmes/${id}`, parseFilme(filme));
  }

  const editAtoresHandler = async (id, ator) => {    
    await api.put(`/atores/${id}`, ator);
  }

  const getAtores = async () => {
    const response = await api.get("/atores");    
    return response;
  }

  useEffect(() => {
    const getAllFilmes = async () => {
      const allFilmes = await getFilmes();
      if (allFilmes) {
        setFilmes(allFilmes.data);
      }
    };

    const getAllAtores = async () => {
      const allAtores = await getAtores();
      if(allAtores){
        setAtores(allAtores.data);
      }
    }

    getAllFilmes();
    getAllAtores();
  });

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/filmes" render={(props) => (<FilmesList {...props} filmes={filmes} />)}/>
          <Route exact path="/filmes/add" render={(props) => (<AddFilmes {...props} addFilmesHandler={addFilmesHandler}/>)} />
          <Route exact path="/filmes/:id"  render={(props) => (<FilmeDetail {...props} editFilmesHandler={editFilmesHandler}/>)} />
          <Route exact path="/atores" render={(props) => (<AtoresList {...props} atores={atores} />)}/>
          <Route exact path="/atores/add" render={(props) => (<AddAtores {...props} addAtoresHandler={addAtoresHandler}/>)} />
          <Route exact path="/atores/:id"  render={(props) => (<AtorDetail {...props} editAtoresHandler={editAtoresHandler}/>)} />
        </Switch>
      </Router>     
    </div>
  );
}

export default App;
