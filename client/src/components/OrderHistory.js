import React from 'react';
import LiveOrders from './LiveOrders';

const OrderHistory = () => {
  return <div>
      <h2>Order History</h2>
      <LiveOrders/>
      <span>All the previous orders...</span>
  </div>;
};

export default OrderHistory;
