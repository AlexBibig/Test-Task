import React from 'react';
import styles from './GoodsList.module.css';
import data from '../../json/data.json';
import names from '../../json/names.json';
import GoodsItem from '../GoodsItem';

const GoodsList = (props) => {
  const { groupeID } = props;

  const groupeArr = Object.entries(names).filter((el) => +el[0] === groupeID);
  const groupeNames = groupeArr.map((el) => el[1].G);

  const itemsArr = data.Value.Goods.filter((el) => el.G === groupeID);
  const items = itemsArr.map((item, index) => {
    return (
      <GoodsItem
        key={index}
        price={item.C}
        groupeID={item.G}
        goodsID={item.T}
        goodsCount={item.P}
      />
    );
  });

  return (
    <div className={`GoodsList ${styles.GoodsList}`}>
      <details open>
        <summary>{groupeNames}</summary>
        {items}
      </details>
    </div>
  );
};

export default GoodsList;
