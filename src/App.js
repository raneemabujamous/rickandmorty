import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "./graphQuery/query";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./component/FillterCard/Filtter";
import Card from "./component/charctCard/Card";
import Pagenation from "./component/pagenation/Pagenation";
import Search from "./component/SearchCard/Search";
import Navbar from "./component/navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FavouriteChar from "./page/FavouriteChar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/favaourite" element={<FavouriteChar />} />
      </Routes>
    </Router>
  );
}
const Home = () => {
  const [PageNum, setPageNum] = useState(1);
  const [search, setResultSearch] = useState();
  const [statusValue, setstatusValue] = useState("");
  const [gender, setGender] = useState("");

  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, {
    variables: {
      page: PageNum,
      filter: { name: search, status: statusValue, gender: gender },
    },
  });

  const next = () => {
    console.log(PageNum);
    setPageNum((page) => page + 1);
  };
  const previous = () => {
    if (PageNum > 1) {
      setPageNum((page) => page - 1);
    }
    console.log(PageNum, "PageNum");
  };
  console.log(statusValue, "statusValue");
  console.log(data, "datadata");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;

  return (
    <>
      <header>
        <h1 className="text-center Ubuntu my-4">Rick and Morty App</h1>
      </header>
      <Search setResultSearch={setResultSearch} setPageNum={setPageNum} />
      <Filters
        setstatusValue={setstatusValue}
        setPageNum={setPageNum}
        setGender={setGender}
      />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <Card data={data.characters.results} PageNum={PageNum} />
            </div>
            <Pagenation next={next} previous={previous} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
