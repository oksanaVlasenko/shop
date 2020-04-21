import React, { useState, useEffect } from "react";
import { Card as CardComponent } from "antd";

export const Card = ({ el, total, updateSum }) => {
  const [elem, setEl] = useState(el);
  const [count, setCount] = useState(1);

  const addItem = () => {
    // console.log(event.target);
    // let elem = basketData.find((el) => el.id === id);
    // console.log(elem);
    setCount(count + 1);

    elem.count = count;
    console.log(elem.count, "counts");
    console.log(elem);
    setEl(elem);
    updateSum();
  };

  // useEffect(() => {
  //   updateSum();
  // }, [updateSum]);

  const minusItem = () => {
    setCount(count - 1);
    console.log("minus");
  };
  return (
    <CardComponent hoverable>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <img alt="example" src={el.image} style={{ width: 128 }} />
        <p>{el.name}</p>
        <button
          onClick={() => {
            addItem();
            //console.log("add", el.count);
          }}
        >
          +
        </button>
        <p>{elem.count}</p>
        <p>{el.price}</p>
        <h3>{total(elem.count, el.price)}</h3>
      </div>
    </CardComponent>
  );
};
