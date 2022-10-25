import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import SpellCard from "../components/SpellCard";
import LoadingSpinner from "../components/LoadingSpinner";

function SpellListScreen() {
  const [spells, setSpells] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://www.dnd5eapi.co/api/spells")
      .then((res) => {
        setSpells(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, []);

  const addFavrouiteSpell = (spell) => {
    let updatedSpells = [...spells];

    let objIndex = updatedSpells.findIndex((obj) => obj.index === spell.index);

    spells[objIndex].isFav =
      spells[objIndex].isFav !== undefined ? !spells[objIndex].isFav : true;

    setSpells(updatedSpells);
  };

  return (
    <Container>
      <Row>
        {isLoading ? (
          <Col md={12} className="m-auto">
            <LoadingSpinner />
          </Col>
        ) : (
          spells.map((spell) => {
            return (
              <Col sm={3} className="p-3">
                <SpellCard props={spell} handleFavClick={addFavrouiteSpell} />
              </Col>
            );
          })
        )}
      </Row>
    </Container>
  );
}

export default SpellListScreen;
