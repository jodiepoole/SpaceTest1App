import React from "react";
import Card from "react-bootstrap/Card";

type GridProps = {
  cells: any[];
};

type CellProps = {
  name: string;
  price: number;
};

function Grid({ cells }: GridProps) {
  return (
    <div className="d-flex row flex-wrap p-2" data-testid="grid">
      {cells.map((cell, index) => {
        return <Cell name={cell.name} price={cell.price} key={index} />;
      })}
    </div>
  );
}

function Cell({ name, price }: CellProps) {
  return (
    <Card className="col-md-5 d-flex flex-column m-1 p-2 align-items-center">
      <Card.Title>{name}</Card.Title>
      <Card.Text>{`£${price}`}</Card.Text>
    </Card>
  );
}

export default Grid;
