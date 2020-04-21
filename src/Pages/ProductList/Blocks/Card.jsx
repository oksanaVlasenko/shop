import React, { useState } from "react";
import { Card as CardComponent } from "antd";
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";

const { Meta } = CardComponent;

export const Card = ({ el }) => {
  const [isFlipped, setFlipped] = useState(false);
  const onChangeFlipped = () => {
    setFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <CardComponent
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={el.image} />}
        onClick={onChangeFlipped}
      >
        <Link to="/details">
          <Meta title={el.name} description={el.price + ` ₴`} />
        </Link>
      </CardComponent>

      <CardComponent
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={el.imageBack} />}
        onClick={onChangeFlipped}
      >
        <Meta title={el.name} description={el.price + ` ₴`} />
      </CardComponent>
    </ReactCardFlip>
  );
};
