import React, { useState, useEffect } from "react";
import { Navbar } from "Pages/ProductList/Blocks";

import { Card } from "./Basket/Card";

const data = [
  {
    id: 5,
    price: 2065,
    name: "River Island",
    image:
      "https://a.lmcdn.ru/img600x866/R/I/RI004EWIMFV2_10640189_1_v1_2x.jpg",
    imageBack:
      "https://a.lmcdn.ru/img600x866/R/I/RI004EWIMFV2_10640191_3_v1_2x.jpg",
  },
  {
    id: 6,
    price: 2223,
    name: "Lusio Куртка джинсовая",
    image:
      "https://a.lmcdn.ru/img600x866/L/U/LU018EWIZMK1_10796521_1_v2_2x.jpg",
    imageBack:
      "https://a.lmcdn.ru/img600x866/L/U/LU018EWIZMK1_10796523_3_v2_2x.jpg",
  },
  {
    id: 7,
    price: 2299,
    name: "Mango Куртка кожаная",
    image: "https://a.lmcdn.ru/img600x866/M/A/MA002EWIRMD2_10558631_1_v1.jpg",
    imageBack:
      "https://a.lmcdn.ru/img600x866/M/A/MA002EWIRMD2_10558633_3_v1.jpg",
  },
  {
    id: 8,
    price: 4232,
    name: "Guess Jeans Куртка кожаная",
    image:
      "https://a.lmcdn.ru/img600x866/G/U/GU644EWHSLP6_10581875_1_v1_2x.jpg",
    imageBack:
      "https://a.lmcdn.ru/img600x866/G/U/GU644EWHSLP6_10581877_3_v1_2x.jpg",
  },
];

export const Basket = () => {
  const basketData = data.map((item) => Object.assign({ count: 1 }, item));
  console.log(basketData);
  const [tot, setTot] = useState(0);

  //useEffect(tot)

  const total = (con, pr) => {
    return con * pr;
  };
  //setTotals(total);
  const totalSum = (basketData) => {
    let sum = basketData
      .map((item) => item.price * item.count)
      .reduce((sum, el) => sum + el, 0);
    return sum;
  };

  console.log("total price ", totalSum);
  basketData.map((it) => console.log(it.count, "ind"));
  const updateSum = () => {
    setTot(totalSum(basketData));
  };
  const renderCards = (el) => (
    <Card el={el} key={el.id} total={total} updateSum={updateSum} />
  );
  useEffect(() => {
    setTot(totalSum(basketData));
    //console.log(tot);
  }, [setTot]);

  return (
    <>
      <Navbar />
      {basketData.map((el) => renderCards(el))}
      <h2>Total: {tot}</h2>
    </>
  );
};
