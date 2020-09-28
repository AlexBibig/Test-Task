import React from 'react';
import styles from './GoodsList.module.css';
import GoodsGroupe from '../GoodsGroupe';

const GoodsList = (props) => {
  const { goods, goodsGroups, addToCart } = props;

  const items = goodsGroups.map((item, index) => {
    return <GoodsGroupe key={index} groupeID={item} goods={goods} addToCart={addToCart} />;
  });

  return (
    <div className={`GoodsList ${styles.GoodsList}`}>
      <h1>Список товаров</h1>
      {items}
    </div>
  );
};

export default GoodsList;
