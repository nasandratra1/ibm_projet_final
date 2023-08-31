import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const MyOrders = () => {
  const arr = [1, 2, 3, 4];
  const orders = [
    {
      orderId: "sdkfsdfdsf",
      status: "En cours de traitement",
      itemQty: 23,
      amount: 2132,
      paymentMethod: "CB",
    },
  ];

  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
          {orders.map((order) => (
              <tr key={order.orderId}>
                <td>#{order.orderId}</td>
                <td>{order.status}</td>
                <td>{order.itemQty}</td>
                <td>${order.amount}</td>
                <td>{order.paymentMethod}</td>
                <td>
                <Link to={`/order/${order.orderId}`}>
                    <AiOutlineEye />
                  </Link>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
