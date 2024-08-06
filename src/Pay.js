import ModalWindow from "./Modal";
import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { logoPaypal } from "ionicons/icons";

export default function Pay() {
  const [isModalOpen, setIsModalOpen] = useState(true);

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
              <div className="btn">
                <button>-</button>
                <button>+</button>
              </div>
            </div>
          </div>

          <button className="btn btn--form toPay">
            <span>to Pay</span>
            <IonIcon icon={logoPaypal} className="pay-icon" />
          </button>
        </ModalWindow>
      )}
    </div>
  );
}
