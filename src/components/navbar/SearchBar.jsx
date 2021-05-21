import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [cities, setCities] = useState(" ");
  const searching = (e) => {
    e.preventDefault();
    onSearch(cities);
    setCities("");
  };

  return (
    <form onSubmit={searching} style={conteiner}>
      <input
        type="text"
        value={cities}
        onChange={(e) => setCities(e.target.value)}
        style={inputField}
        placeholder="Que estas buscando?"
        required
      />
      <input type="submit" value="Buscar" style={btnAgree} />
    </form>
  );
}

const conteiner = {
  background: "#282c34",
  padding: "10px",
};

const inputField = {
  textAlign: "center",
  border: "none",
  color: "#282c34",
  height: "55px",
  borderTopLeftRadius: "10px",
  borderBottomLeftRadius: "10px",
  width: "515px",
};

const btnAgree = {
  fontSize: "26px",
  background: "#282c34",
  color: "#00d4ff",
  border: "4px solid #00d4ff",
  padding: "5px 20px",

  cursor: "pointer",
  borderTopRightRadius: "10px",
  borderBottomRightRadius: "10px",
};
