import React from 'react';
import data from '../../json/data.json';
import styles from './App.module.css';
import GoodsList from '../GoodsList';
import Cart from '../Cart';

class App extends React.Component {
  render() {
    const items = Array.from(new Set(data.Value.Goods.map((el) => el.G))).map((item, index) => {
      return <GoodsList key={index} groupeID={item} />;
    });

    return (
      <div className={`App ${styles.App}`}>
        <div className='goods_section'>
          <h1>Список товаров</h1>
          {items}
        </div>
        <div className='cart_section'>
          <h2>Корзина</h2>
          <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} />
        </div>
      </div>
    );
  }
}

export default App;
