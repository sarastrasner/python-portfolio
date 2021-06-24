import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import projectsArray from '../data/projects';

function CardComponent() {
  return (
    <div className="m-4">
      <CardColumns>
        {projectsArray.map((item, idx) => {
          return (
            <Card key={idx}>
              {item.image ? (
                <a href={item.URL} rel="noreferrer" target="_blank">
                  <div className="border-b">
                  <Card.Img variant="top" src={`./${item.image}`} />
                  </div>
                </a>
              ) : null}
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Topic: {item.topic}
                </Card.Subtitle>
                <Card.Text>{item.description}</Card.Text>
                {item.flowchart ? (
                  <Card.Link
                    onClick={() => window.open(`${item.flowchart}`, '_blank')}
                    className="list-group-flush"
                  >
                    View this project's flowchart
                  </Card.Link>
                ) : null}
                <Card.Link>
                  {item.URL ? (
                    <a href={item.URL} rel="noreferrer" target="_blank">
                      <p>View this Project</p>
                    </a>
                  ) : null}
                </Card.Link>
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
