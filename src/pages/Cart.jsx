import React from "react";

const Cart = () => {
  const cartItems = [
    {
      imageSrc: "https://picsum.photos/id/237/150/150",
      title: "Product Title",
      description: "Product Description",
      quantity: 1,
      price: "$20.00",
    },
    {
      imageSrc: "https://picsum.photos/id/237/150/150",
      title: "Product Title",
      description: "Product Description",
      quantity: 1,
      price: "$15.00",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-2xl font-bold my-4">Shopping Cart</h1>
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
          Checkout
        </button>
      </div>
      <div className="mt-8">
        {cartItems.map((item, index) => (
          <CartItem key={index} {...item} />
        ))}
      </div>
      <div className="flex justify-end items-center mt-8">
        <span className="text-gray-600 mr-4">Subtotal:</span>
        <span className="text-xl font-bold">
          $
          {cartItems
            .reduce((total, item) => total + parseFloat(item.price.slice(1)), 0)
            .toFixed(2)}
        </span>
      </div>
    </div>
  );
};

const CartItem = ({ imageSrc, title, description, quantity, price }) => {
  return (
    <div className="flex flex-col md:flex-row border-b border-gray-400 py-4">
      <div className="flex-shrink-0">
        <img
          src={imageSrc}
          alt="Product image"
          className="w-32 h-32 object-cover"
        />
      </div>
      <div className="mt-4 md:mt-0 md:ml-6">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="mt-4 flex items-center">
          <span className="mr-2 text-gray-600">Quantity:</span>
          <div className="flex items-center">
            <button className="bg-gray-200 rounded-l-lg px-2 py-1" disabled>
              -
            </button>
            <span className="mx-2 text-gray-600">{quantity}</span>
            <button className="bg-gray-200 rounded-r-lg px-2 py-1" disabled>
              +
            </button>
          </div>
          <span className="ml-auto font-bold">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
