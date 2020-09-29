import React from 'react';
import styles from './Cart.module.css';

class Cart extends React.Component {
  render() {
    const { cartItems } = this.props;

    let goodsRemainderMarker = styles.goodsRemainderMarker;

    return (
      <div className={`Cart ${styles.Cart}`}>
        <div className={`cartsHeader ${styles.cartsHeader}`}>
          <h2>Корзина</h2>
          {cartItems.length === 0 ? <p>Корзина пуста</p> : <p>Товары в корзине:</p>}
        </div>

        <div className={`cartsItems ${styles.cartsItems}`}>
          <ul>
            {cartItems.map((el, index) => {
              el.goodsCount - el.P >= el.goodsCount * 0.8 || el.goodsCount < 5
                ? (goodsRemainderMarker += ` ${styles.few}`)
                : (goodsRemainderMarker = styles.goodsRemainderMarker);
              return (
                <li key={index}>
                  <div className='goodsInfo'>{el.name}</div>
                  <div className='goodsPrice'>
                    {el.rublePrice} <span>руб.</span>
                  </div>
                  <div className={`goodsRemainder ${styles.goodsRemainder}`}>
                    <span className={`${goodsRemainderMarker}`}>Количество ограничено</span>
                    {el.goodsCount - el.P} <span>шт.</span>
                  </div>
                  <div className='btns-block'>
                    <button className='remove_from_cart' onClick={() => this.props.removeFromCart(el)}>
                      Убрать
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={`cartsCounter ${styles.cartsCounter}`}>
          {cartItems.reduce((sum, current) => sum + current.rublePrice * (current.goodsCount - current.P), 0).toFixed(1)} <span>руб.</span>
        </div>
      </div>
    );
  }
}

export default Cart;
