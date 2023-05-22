import React, { useState, useEffect } from "react";
import Loading from "../Components/Loading";
import CartoonCard from "../Components/CartoonCard";
import Pagination from "../Components/Pagination";
import "aos/dist/aos.css";
import AOS from "aos";

// A component displaying a grid of cartoon characters.
const CartoonDisplay = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  // Fetches cartoon characters from the API based on the current page.
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setCharacters(data.results);
      setLoading(false);
    } catch (error) {
      // For Error handling
      setError("Failed to fetch cartoon characters.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  // For Animation Effect
  useEffect(() => {
    AOS.init({ offset: 300, duration: 1000 });
  }, []);

  return (
    <div className="main-box">
      <Pagination current={page} onChange={(value) => setPage(value)} />
      {loading ? (
        <Loading />
      ) : error ? (
        <h1 className="message">{error}</h1>
      ) : characters.length === 0 ? (
        <h1 className="message">No cartoon character found</h1>
      ) : (
        <div
          className="character-box"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          {characters.map((character, index) => (
            <CartoonCard
              id={index + 1}
              name={character.name}
              image={character.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CartoonDisplay;
