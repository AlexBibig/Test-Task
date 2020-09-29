import React from 'react';
import styles from './GoodsGroupe.module.css';
import names from '../../json/names.json';
import GoodsItem from '../GoodsItem';

const GoodsGroupe = (props) => {
  const { groupeID, goods, addToCart } = props;

  const groupeArr = Object.entries(names).filter((el) => +el[0] === groupeID);
  const groupeNames = groupeArr.map((el) => el[1].G);

  const itemsArr = goods.filter((el) => el.G === groupeID);
  const items = itemsArr.map((item, index) => {
    return <GoodsItem key={index} item={item} addToCart={addToCart} />;
  });

  return (
    <div className={`GoodsGroupe ${styles.GoodsGroupe}`}>
      <details open>
        <summary>{groupeNames}</summary>
        {items}
      </details>
    </div>
  );
};

export default GoodsGroupe;
