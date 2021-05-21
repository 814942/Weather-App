import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonStyled = styled.button`
  border: solid 2px #00d4ff;
  background-color: #00d4ff;
  padding: 0.1rem 0.5rem;
  display: flex;
  justify-content: center;
  align-item: center;
  cursor: pointer;
  border-radius: 1rem;
  margin: 0 auto;
  transition: 0.35s;
  color: white;

  &:hover {
    background-color: transparent;
    color: #00d4ff;
    border-radius: 1rem;
    border: solid 2px white;
  }

  &:focus {
    outline: none;
    color: white;
    background-color: #00d4ff;
  }
`;

const ImgW = styled.img`
  border: 1px solid #090979;
  border-radius: 100%;
  padding: 10px;
  margin: 30px;

  &:hover {
    border: 2px solid #090979;
    box-shadow: 10px 5px 5px #eaeaf5;
  }
`;

const Dives = styled.div`
  padding: 5px;
  color: #090979;
`;

export default function Card({ id, name, min, max, img, onClose }) {
  return (
    <div style={conteiner}>
      <ButtonStyled style={btnClose} onClick={onClose}>
        X
      </ButtonStyled>
      <Link to={`/ciudad/${id}`}>
        <h3 style={nameC}>{name}</h3>
      </Link>
      <Dives>Min: {`${min}°`}</Dives>
      <Dives>Max: {`${max}°`}</Dives>
      <ImgW
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        alt={"Weather"}
      />
    </div>
  );
}

const conteiner = {
  border: "2px solid #eaeaf5",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10%",
  width: "400px",
  height: "500px",
  background: "linear-gradient( #eaeaf5, #00d4ff)",
  boxShadow: "10px 5px 5px #eaeaf5",
};

const nameC = {
  color: "#f8f9fa",
  fontWeight: "bold",
  padding: "2px",
  marginTop: "30px",
};

const btnClose = {
  /* float: "right",
  padding: "2px",
  marginRight: "5px",
  marginTop: "5px",
  height: "4vh",
  width: "4vh",
  display: "flex",
  alignItems: "center",
  fontSize: "20px",
  background: "#cf3e1c",
  border: "2px solid #cf3e1c",
  color: "#f8f9fa",
  borderTopRightRadius: "30%", */
};
