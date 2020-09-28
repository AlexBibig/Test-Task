import React from 'react';

class Cart extends React.Component {
  render() {
    const { cartItems } = this.props;

    return (
      <div className='Cart'>
        {cartItems.length === 0 ? (
          'Корзина пуста'
        ) : (
          <div>
            <h3>Товары в корзине</h3>
            <div className='items_in_cart'>
              <ul></ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Cart;
