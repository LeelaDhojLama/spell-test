import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Col, Container, Row } from "react-bootstrap";
import LoadingSpinner from "../components/LoadingSpinner";

function SpellDetailPage() {
  let { index } = useParams();
  const [spell, setSpell] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://www.dnd5eapi.co/api/spells/" + index)
      .then((res) => {
        setSpell(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Container>
      <Container>
        {isLoading ? (
          <Col md={12} className="m-auto">
            <LoadingSpinner />
          </Col>
        ) : (
          <Card className="p-5 mt-5">
            <Row>
              <Col sm={12}>
                <h3>{spell.name}</h3>
                <p>{spell.desc}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <span>Range: {spell.range}</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <span>Material: {spell.material}</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <span>Duration: {spell.duration}</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <span>Casting Time: {spell.casting_time}</span>
              </Col>
            </Row>
          </Card>
        )}
      </Container>
    </Container>
  );
}

export default SpellDetailPage;
