import React from 'react';
import data from '../../js_part/data.json';
import styles from './App.module.css';
import GoodsList from '../GoodsList';
import Cart from '../Cart';

const App = () => {
  const items = Array.from(new Set(data.Value.Goods.map((el) => el.G))).map((item, index) => {
    return <GoodsList key={index} groupeID={item} />;
  });

  return (
    <div className={`App ${styles.App}`}>
      <h1>Список товаров</h1>
      {items}
      <h2>Корзина</h2>
      <Cart />
    </div>
  );
};

export default App;
