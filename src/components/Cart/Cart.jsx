import React from 'react';

class Cart extends React.Component {
  render() {
    const { cartItems } = this.props;
    console.log(cartItems);

    // console.log(cartItems);
    return (
      <div className='Cart'>
        <h2>Корзина</h2>
        {/* {cartItems.length} */}
        {cartItems.length === 0 ? 'Корзина пуста' : 'Товары в корзине'}
        <div>
          <ul>
            {cartItems.map((el) => {
              return <li>{el.name}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Cart;
