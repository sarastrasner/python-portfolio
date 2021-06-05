import React from 'react';
import Image from 'next/image';

// reactstrap components
import {
  CardDeck,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
} from 'reactstrap';

function Example() {
  return (
    <>
      <CardDeck>
        <Card>
          <CardImg
            alt="..."
            src="/blackjack.png"
            width={100}
            height={100}
            top
          ></CardImg>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          {/* <CardImg alt="..." src="/blackjack.png" top></CardImg> */}
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          {/* <CardImg alt="..." src="/blackjack.png" top></CardImg> */}
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
      </CardDeck>
    </>
  );
}

export default Example;
