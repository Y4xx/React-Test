import React from 'react'
import Cart from "./Cart";

export const DisplayCarts = () => {
    const cartItems = [
        {
          id: 1,
          image: "https://marketplace.canva.com/EAFqNrAJpQs/1/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-WAhofEY5L1U.jpg",
          name: "Bonnie Green",
          role: "Visual Designer",
        },
        {
          id: 2,
          image: "https://marketplace.canva.com/EAFqNrAJpQs/1/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-WAhofEY5L1U.jpg",
          name: "John Doe",
          role: "Web Developer",
        },
        {
          id: 3,
          image: "https://marketplace.canva.com/EAFqNrAJpQs/1/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-WAhofEY5L1U.jpg",
          name: "Sarah Smith",
          role: "Product Manager",
        },
      ];

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {cartItems.map((item) => (
          <Cart image={item.image} name={item.name} role={item.role} />
        ))}
      </div>
    </>
  )
}


export default DisplayCarts;

