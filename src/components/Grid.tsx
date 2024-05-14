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
    <div className="d-flex row" data-testid="grid">
      {cells.map((cell, index) => {
        return <Cell name={cell.name} price={cell.price} key={index} />;
      })}
    </div>
  );
}

function Cell({ name, price }: CellProps) {
  return (
    <div className="col-md-4 col-sm-6 col-xs-12">
    <Card
      className="d-flex flex-column m-1 p-2 align-items-center"
      data-testid={`cell-${name.toLowerCase().replace(/ /g, "-")}`}
    >
      <Card.Title>{name}</Card.Title>
      <Card.Text>{`£${price}`}</Card.Text>
    </Card>
    </div>
  );
}

export default Grid;
