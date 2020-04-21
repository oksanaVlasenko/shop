import React from "react";
import { Card, Navbar } from "./Blocks";
import { Layout, Row, Col } from "antd";

const { Footer, Content } = Layout;

const data = [
  {
    id: 1,
    price: 3546,
    name: "Vero Moda Куртка кожаная",
    image:
      "https://a.lmcdn.ru/img600x866/V/E/VE389EWHJKK9_10315763_1_v1_2x.jpg",
    imageBack:
      "https://a.lmcdn.ru/img600x866/V/E/VE389EWHJKK9_10315765_3_v1_2x.jpg",
  },
  {
    id: 2,
    price: 4999,
    name: "Mango Куртка кожаная ",
    image: "https://a.lmcdn.ru/img600x866/M/A/MA002EWIIQA1_10317872_1_v1.jpg",
    imageBack:
      "https://a.lmcdn.ru/img600x866/M/A/MA002EWIIQA1_10317874_3_v1.jpg",
  },
  {
    id: 3,
    price: 1288,
    name: "Serge Pariente Куртка кожаная",
    image:
      "https://a.lmcdn.ru/img600x866/S/E/SE050EWHGWI6_10412026_1_v1_2x.jpg",
    imageBack:
      "https://a.lmcdn.ru/img600x866/S/E/SE050EWHGWI6_10412028_3_v1_2x.jpg",
  },
  {
    id: 4,
    price: 6234,
    name: "Trussardi Jeans",
    image:
      "https://a.lmcdn.ru/img600x866/T/R/TR016EWHKUJ5_10640658_1_v1_2x.jpg",
    imageBack:
      "https://a.lmcdn.ru/img600x866/T/R/TR016EWHKUJ5_10640660_3_v1_2x.jpg",
  },
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

export const ProductList = () => {
  const renderCards = (el) => (
    <Col key={el.id} style={{ margin: "2em" }}>
      <Card el={el} />
    </Col>
  );
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar />
      <Content>
        <Row justify="center">{data.map((el) => renderCards(el))}</Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};
