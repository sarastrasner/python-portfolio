import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Container from 'react-bootstrap/Container';
import projectsArray from '../data/projects';

function CardComponent() {
  return (
    <div className="m-4">
      <CardColumns>
        {projectsArray.map((item, idx) => {
          return (
            <Card key={idx}>
              {item.image ? (
                <Card.Img variant="top" src={`./${item.image}`} />
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
                <small className="text-muted">
                  Last updated {item.created}
                </small>
              </Card.Footer>
            </Card>
          );
        })}
      </CardColumns>
    </div>
  );
}

export default CardComponent;
