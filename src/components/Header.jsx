import Container from "react-bootstrap/Container";
import mkLogo from "../assets/mortal-kombat-logo.jpeg";
import Image from "react-bootstrap/Image";
const Header = () => {
  return (
    <Container className="text-center">
      <Image
        className="rounded-4 opacity-75 "
        src={mkLogo}
        width={"400px"}
      ></Image>
      <h1 className="my-2 font-monospace display-5 fw-bold text-light">
        Mortal Kombat All Characters
      </h1>
    </Container>
  );
};
export default Header;
