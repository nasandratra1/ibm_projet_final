import React from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const increment = (item) => {};

  const decrement = (item) => {};

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Cheese Burger"}
          img={burger1}
          value={0}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
          />
        <CartItem
          title={"Cheese Burger Vegane"}
          img={burger2}
          value={0}
          increment={() => increment(2)}
        // Add the function for decrementing the order by 2
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"Cheese Burger avec Frites"}
          img={burger3}
          value={0}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />

        {/* Fill up the code for Cheese Burger similarly */}
       

        <article>
          <div>
            <h4>Sous Total</h4>
            <p>${2000}</p>
          </div>
          <div>
            <h4>TVA</h4>
            <p>${2000 * 0.18}</p>
          </div>
          <div>
            <h4>Frais de livraison</h4>
            <p>${200}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>${2000 + 2000 * 0.18 + 0.18}</p>
          </div>          
          <button
          className="btn"
          style={{ backgroundColor: "#9C003C", color: "white" }}
        >
          <Link to="/menu" style={{textDecoration: "none", color: 'inherit' }}> Payer </Link>
        </button>
          
        </article>
      </main>
    </section>
  );
};

export default Cart;
