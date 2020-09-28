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

  addToCart = (item, name, rublePrice) => {
    this.setState((prevState) => {
      // console.log(goodsCount);
      // return state.cartItems.push({ ...item, name, rublePrice, goodsCount });
      const cartItems = prevState.cartItems;
      // if (cartItems.find((el) => el.name === name) && item.P > 0) {
      //   --item.P;
      //   console.log(item.P);
      //   return cartItems.push({ ...item, name, rublePrice });
      // }
      // if (cartItems.item.P === prevState.cartItems.item.P)
      if (item.P === 0) {
        return prevState.cartItems;
      }
      if (cartItems.find((el) => el.name === name)) {
        --item.P;
        console.log(item.P);
      }
      return cartItems.push({ ...item, name, rublePrice });

      // while (item.P > 0) {
      //   if (cartItems.find((el) => el.name === name)) {
      //     --item.P;
      //     console.log(item.P);
      //   }
      //   return cartItems.push({ ...item, name, rublePrice });
      // }
      // {
      //   if (cartItems.find((el) => el.name === name)) {
      //     --item.P;
      //     console.log(item.P);
      //   }
      //   return cartItems.push({ ...item, name, rublePrice });
      // }

      // if (cartItems.find((el) => el.name === name)) {
      //   do {
      //     item.P--;
      //   } while (item.P >= 0);
      // }

      // cartItems.forEach((el) => {
      //   if (el.name === name) {
      //     item.P--;
      //     goodsCount--;
      //   }
      // });
      // console.log(goodsCount);

      // let productInCart = false;
      // if (item.G === goodsCount) {
      //   item.P--;
      // }

      // if (!productInCart) {
      // }
      //  cartItems;
      //  prevState.cartItems.push({ ...item, name, rublePrice, goodsCount });
      // cartItems.push(...prevState.goods);
    });
    console.log(this.state);
  };

  componentDidMount() {
    this.setState({
      goods: data.Value.Goods,
      goodsGroups: Array.from(new Set(data.Value.Goods.map((el) => el.G))),
      // filteredGoods: Array.from(new Set(data.Value.Goods.map((el) => el.G))),
    });
  }

  render() {
    // const items = Array.from(new Set(data.Value.Goods.map((el) => el.G))).map((item, index) => {
    //   return <GoodsList key={index} groupeID={item} />;
    // });

    return (
      <div className={`App ${styles.App}`}>
        <div className='goods_section'>
          <GoodsList
            goods={this.state.goods}
            goodsGroups={this.state.goodsGroups}
            addToCart={this.addToCart}
          />
        </div>
        <div className='cart_section'>
          <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} />
        </div>
      </div>
    );
  }
}

export default App;
