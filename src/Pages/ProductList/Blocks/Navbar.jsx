import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

export const Navbar = () => (
  <Layout className="layout">
    <Header style={{ background: "#fff" }}>
      <div className="logo" />
      <Menu mode="horizontal">
        <Menu.Item key="1">
          <Link to="/">Список товаров</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/details">Детали</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/basket">Корзина</Link>
        </Menu.Item>
      </Menu>
    </Header>
  </Layout>
);
