import React from "react";
import Container from "react-bootstrap/Container";
import LogoutForm from "./LogoutForm";
const Logout = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <LogoutForm />
    </Container>
  );
};

export default Logout;
