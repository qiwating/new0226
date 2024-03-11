'use client'

import React, { useEffect, useState } from 'react'

import { Product } from '../../../payload/payload-types'

import classes from './index.module.scss'

// Import statements...

export const Price: React.FC<{
  product: Product
  quantity?: number
  button?: 'addToCart' | 'removeFromCart' | false
  price?: number  // Add a new prop for the price
}> = props => {
  const { product, quantity, button = 'addToCart', price } = props;

  const formattedPrice = (price / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD', // Change to your desired currency
  });

  const totalPrice = (price * (quantity || 1)) / 100;
  const formattedTotalPrice = totalPrice.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD', // Change to your desired currency
  });

  return (
    <div className={classes.actions}>
      {typeof price !== 'undefined' && (
        <div className={classes.price}>
          {quantity && (
            <p>
              {formattedTotalPrice} ({quantity} {quantity > 1 ? 'items' : 'item'})
            </p>
          )}
          {!quantity && <p>{formattedPrice}</p>}
        </div>
      )}
    </div>
  );
};
