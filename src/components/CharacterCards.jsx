import { CSSTransition } from "react-transition-group";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { ListGroup } from "react-bootstrap";
const CharacterCards = (characters) => {
  const { name, img, desc, gender, origin, resides, gif, species } = characters;
  const [showFront, setShowFront] = useState(true);

  return (
    <CSSTransition in={showFront} timeout={300} classNames="flip">
      <Card
        style={{ height: "490px" }}
        className="rounded-2 m-auto card "
        role="button"
        onClick={() => setShowFront((v) => !v)}
      >
        <Card.Img variant="top" src={gif} className="card-back-gif m-auto" />
        <div className="card-back">
          <ListGroup className="list-group-flush m-auto">
            <ListGroup.Item>{desc}</ListGroup.Item>
            <ListGroup.Item>Gender: {gender}</ListGroup.Item>
            <ListGroup.Item>Origin: {origin}</ListGroup.Item>
            <ListGroup.Item>Resides: {resides}</ListGroup.Item>
            <ListGroup.Item>Specises: {species}</ListGroup.Item>
          </ListGroup>
          <Card.Footer>
            <Card.Title>{name}</Card.Title>
          </Card.Footer>
        </div>
        <div className="card-front">
          <Card.Img
            variant="top"
            src={img}
            className="player-logo"
            style={{ height: "440px" }}
          />
          <Card.Footer className="card-footer">
            <Card.Title>{name}</Card.Title>
          </Card.Footer>
        </div>
      </Card>
    </CSSTransition>
  );
};
export default CharacterCards;
