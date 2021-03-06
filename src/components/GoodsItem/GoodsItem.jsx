import React from 'react';
import styles from './GoodsItem.module.css';
import names from '../../json/names.json';

const GoodsItem = (props) => {
  const { item, addToCart } = props;
  const price = item.C;
  const goodsID = item.T;
  const goodsCount = item.P;

  let namesArr = Object.values(names).map((el) => el.B);
  const obj = {};
  namesArr.forEach((element) => {
    Object.keys(element).map((goodsID) => (obj[goodsID] = element[goodsID]));
  });
  const name = obj[goodsID]['N'];

  let rubleCourse = 2;
  let rublePrice = +(price * rubleCourse).toFixed(1);

  return (
    <div className={`GoodsItem ${styles.GoodsItem}`}>
      <div className='position_name'>{name}</div>
      <div className='position_price'>
        {rublePrice} <span>руб.</span>
      </div>
      <div className='btns-block'>
        <button className='add_to_cart' onClick={() => addToCart(item, name, rublePrice, goodsCount)}>
          В корзину
        </button>
      </div>
    </div>
  );
};

export default GoodsItem;
