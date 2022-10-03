import { Card, Row, Col } from "react-bootstrap";

const Frase = ({personaje}) => {
  return (
    <Card>
      <Card.Body>
      <Row>
        <Col md={4}>
          <img
            src={personaje.image}
            alt={personaje.character}
            className="w-100"
            />
        </Col>
        <Col md={8}>
          <Card.Title>
            <h3>{personaje.character}</h3>
          </Card.Title>
          <Card.Text>
           {personaje.quote}
          </Card.Text>
        </Col>
      </Row>
            </Card.Body>
    </Card>

    // <section className="row bg-white my-5 p-5 m-1">
    //   <aside className="col-4">
    //     <img
    //       src="https://trello.com/1/cards/632a448eb47fe800d9bdef25/attachments/632cd86034034e0170124eec/previews/632cd86134034e0170124ef2/download/image.png"
    //       alt="Homero simpson"
    //       className="w-100"
    //     />
    //   </aside>
    //   <aside className="col-8">
    //     <div>
    // <h3>Homero simpson</h3>
    // <p className="fs-5">
    //   Facts are meaningless. You could use facts to prove anithing thats
    //   even remotely true.
    // </p>
    //     </div>
    //   </aside>
    // </section>
  );
};

export default Frase;
