import React from 'react';
import data from '../../json/data.json';
import styles from './App.module.css';
import GoodsList from '../GoodsList';
import Cart from '../Cart';

class App extends React.Component {
  state = {
    goods: [],
    goodsGroups: [],
    cartItems: [],
  };

  addToCart = (item, name, rublePrice, goodsCount) => {
    this.setState((prevState) => {
      const cartItems = prevState.cartItems;
      let isGoodsinCart = false;
      if (cartItems.find((el) => el.name === name)) {
        isGoodsinCart = true;
      }
      cartItems
        .filter((el) => el.name === name)
        .map((el) => {
          if (el.P > 0) {
            el.P--;
          }
        });
      if (!isGoodsinCart) {
        cartItems.push({ ...item, name, rublePrice, goodsCount });
      }
      return cartItems;
    });
  };

  removeFromCart = (item) => {
    this.setState((prevState) => {
      const cartItems = prevState.cartItems.pop(item);
      return cartItems;
    });
  };

  componentDidMount() {
    this.setState({
      goods: data.Value.Goods,
      goodsGroups: Array.from(new Set(data.Value.Goods.map((el) => el.G))),
      // filteredGoods: Array.from(new Set(data.Value.Goods.map((el) => el.G))),
    });
  }

  render() {
    return (
      <div className={`App ${styles.App}`}>
        <div className='goods_section'>
          <GoodsList goods={this.state.goods} goodsGroups={this.state.goodsGroups} addToCart={this.addToCart} />
        </div>
        <div className='cart_section'>
          <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} />
        </div>
      </div>
    );
  }
}

export default App;
