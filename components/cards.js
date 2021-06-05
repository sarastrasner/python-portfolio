import React from 'react'
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import projectsArray from '../data/projects';

function CardComponent() {
  return (
    <CardColumns className="m-4">
      {projectsArray.map((item, idx) => {
        return (
          <Card key={idx}>
            {item.image ? (
              <Card.Img variant="top" src={`../public/assets/images/${item.image}`}  />
              //<Card.Img variant="top" src={`../assets/${item.image}`} />
            ) : null}
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Topic: {item.topic}
              </Card.Subtitle>
              <Card.Text>{item.description}</Card.Text>
              <div className="py-2 text-seaGreen">
                <a href={item.URL} rel="noreferrer" target="_blank">
                  <i>View this Project</i>
                </a>
              </div>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated {item.created}</small>
            </Card.Footer>
          </Card>
        );
      })}
    </CardColumns>
  );
}

export default CardComponent;
