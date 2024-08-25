import ModalWindow from "./Modal";
import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { logoPaypal } from "ionicons/icons";


const createOrder = async () => {

  try {
    const response = await fetch('https://localhost:7271/Paypal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.Message);
    }

    const responseData = await response.json();
    console.log('Order created successfully:', responseData);
    // Handle the response data as needed
  } catch (error) {
    console.error('Error creating order:', error.message);
    // Handle errors appropriately
  }
};

export default function Pay() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  //to handle the click.
  const handleClick = (event) => {
    event.preventDefault(); // Prevent default button behavior
    createOrder();
    // Optionally, you can navigate or perform other actions after creating the order
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isModalOpen && (
        <ModalWindow title="Shopping Cart" onClose={handleCloseModal}>
          <div>
            <label htmlFor="select-Item-X">Please choose your items</label>
            <select id="select-Item-X" required>
              <option value="">Earrings</option>
              <option value="necklace">Necklace</option>
              <option value="bags">Bags</option>
              <option value="bracelet">Bracelet</option>
              <option value="rings">Rings</option>
            </select>
          </div>

          <div className="selected-items">
            <label htmlFor="Item-X">Item-X</label>
            <div className="item-input-btn">
              <input id="Item-X" type="text" placeholder="Item-X" required />
              <div className="btn plus">
                <button>-</button>
                <button>+</button>
              </div>
            </div>
          </div>

          <button className="btn btn--form toPay" onClick={handleClick}>
            <span>to Pay</span>
            <IonIcon icon={logoPaypal} className="pay-icon" />
          </button>
        </ModalWindow>
      )}
    </div>
  );
}
