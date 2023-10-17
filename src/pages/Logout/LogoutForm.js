import React from "react";
import { Card, Button } from "react-bootstrap";
import "./logoutform.css";

const LogoutForm = ({ handleLogout }) => {
  return (
    <div className="logout-card-container">
      <Card className="logout-card">
        <Card.Body className="logout-card-body">
          <Card.Title className="bold-text">로그아웃</Card.Title>
          <Card.Text className="bold-text">로그아웃 하시겠습니까?</Card.Text>
          <Button
            variant="primary"
            onClick={handleLogout}
            className="bold-text"
          >
            로그아웃
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LogoutForm;
