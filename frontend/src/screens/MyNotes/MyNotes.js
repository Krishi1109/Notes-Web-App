import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import axios from "axios"

const MyNotes = () => {
  const [notes, setNotes] = useState([])
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      console.log("Deleteeee");
    } else {
      console.log("Nooo");
    }
  };

  const fetchNotes = async() => {
    const {data} = await axios.get('/api/notes')
    setNotes(data)
  }

  useEffect(() => {
    fetchNotes()
  }, [])
  
  return (
    <div>
      <MainScreen title="Welcome Back">
        <Link to="createnote">
          <Button>Create New Note</Button>
        </Link>

        {notes &&
          notes.map((note) => (
            <Accordion key={note._id}>
              <Card className="m-2">
                <Card.Header style={{ display: "flex" }}>
                  <span
                    style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                    }}
                  >
                    <Accordion.Header
                      as={Card.Text}
                      variant="link"
                      eventKey="0"
                    >
                      {note.title}
                    </Accordion.Header>
                  </span>
                  <div>
                    <Button href={`/note/${note._id}`}>Edit</Button>
                    <Button
                      variant="danger"
                      className="mx-2"
                      onClick={() => deleteHandler(note._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Header>
                <Accordion.Body eventKey="0" >
                  <Card.Body>
                    <h4>
                      <Badge className="bg-success text-light">
                        Category - {note.category}
                      </Badge>
                    </h4>
                    <blockquote>
                      <p>{note.content}</p>
                      <footer className="blockquote-footer">
                        Created on - Date
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Accordion.Body>
              </Card>
           </Accordion>
          ))}
      </MainScreen>
    </div>
  );
};

export default MyNotes;
