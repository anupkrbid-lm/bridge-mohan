import React from 'react';

import './ModalShop.css';
import ModalMenu from './ModalMenu/ModalMenu';

const modalShop = props => (
  <section className="menu_blk">
    <h2>{props.shop.shopName}</h2>
    <ModalMenu
      products={props.shop.products}
      shopIndex={props.shopIndex}
      updateCartState={props.updateCartState}
    />
  </section>
);

export default modalShop;
