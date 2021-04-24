import React from "react";
import Row from "./Row";
import request from "./requests";
import Banner from "./Banner";
import "./App.css";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Banner />
      <Nav />

      <Row
        title="NETFLIX ORIGNALS "
        fetchUrl={request.fetchNetflixOrignals}
        isLargeRow={true}
      />
      <Row title="Trending Now  " fetchUrl={request.fetchTrending} />
      <Row title="Top Rated  " fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies  " fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies  " fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies  " fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies  " fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documantaries  " fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
