import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "../helpers/data";

import { FormControl } from "react-bootstrap";

import { useState } from "react";
import CharacterCards from "./CharacterCards";

const CardContainer = () => {
  console.log(data);
  const [search, setSearch] = useState("");

  const handleChange = (e) => setSearch(e.target.value);
  console.log(search);
  return (
    <>
      <FormControl
        className="w-50  m-auto"
        placeholder="Search for characters..."
        type="search"
        onChange={handleChange}
      ></FormControl>

      <Container className="card-container rounded-4 my-4 p-3 ">
        <Row className="g-3 justify-content-center">
          {data
            .filter((character) =>
              character.name.toLowerCase().includes(search.trim().toLowerCase())
            )
            .map((characters, i) => (
              <Col md={6} lg={4} xl={3} key={i}>
                <CharacterCards {...characters} />
              </Col>
            ))}
          {/* {data
            .filter((character) =>
              character.name.toLowerCase().includes(search.trim().toLowerCase())
            )
            .map((player, i) => (
              <Col md={6} lg={4} xl={3} key={i}>
                <PlayerCards {...player} />
              </Col>
            ))} */}
        </Row>
      </Container>
    </>
  );
};
export default CardContainer;
