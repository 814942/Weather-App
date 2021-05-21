import React from "react";
import Card from "../card/Card";

export default function Cards(props) {
  return (
    <div style={conteiner}>
      {props.cities?.map((c) => (
        <Card
          key={c.id}
          id={c.id}
          name={c.name}
          min={c.min}
          max={c.max}
          img={c.img}
          onClose={() => props.onClose(c.id)}
        />
      ))}
    </div>
  );
}

const conteiner = {
  padding: "20px",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "3rem",
  height: "inherit",
  margin: "0 auto",
};
