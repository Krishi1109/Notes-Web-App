import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./LandingStyles.css";

function LandingPage() {
  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  // useEffect(() => {
  //   if (userInfo) {
  //     history.push("/mynotes");
  //   }
  // }, [history, userInfo]);

  // const [user, setUser] = useState("");

  // const navigate = useNavigate();
  // useEffect(() => {
  //   console.log("Hello");
  //   setUser(localStorage.getItem("userInfo"));
  //   console.log("USERRRRR", user)
  //   if (user) {
  //     console.log("Result");
  //     navigate("/mynotes");
  //   }
  // }, [navigate, user]);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Note Zipper</h1>
              <p className="subtitle">One Safe place for all your notes.</p>
            </div>
            <div className="buttonContainer">
              <Link to="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="landingbutton"
                >
                  Signup
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;