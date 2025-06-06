import "./Order.css"
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


const menu = [
  {
    id: 1,
    name: "Эспрессо",
    price: 180
  },
  {
    id: 2,
    name: "Капучино",
    price: 220
  },
  {
    id: 3,
    name: "Флэт Уайт",
    price: 240
  },
  {
    id: 4,
    name: "Раф",
    price: 260
  },
  {
    id: 5,
    name: "Апельсиновый раф",
    price: 290
  },
  {
    id: 6,
    name: "Карамельный латте",
    price: 280
  },
  {
    id: 7,
    name: "Тирамису",
    description: "Классический итальянский десерт",
    category: "десерты",
    price: 320
  },
  {
    id: 8,
    name: "Чизкейк Нью-Йорк",
    description: "С ванильным соусом и ягодным топпингом",
    category: "десерты",
    price: 350
  }
];

function Order() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickupTime: "",
    selectedItems: [],
    notes: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("lastOrder");
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    setFormData(prev => {
      if (newQuantity <= 0) {
        return {
          ...prev,
          selectedItems: prev.selectedItems.filter(item => item.id !== itemId)
        };
      }
      
      const existingItemIndex = prev.selectedItems.findIndex(item => item.id === itemId);
      
      if (existingItemIndex >= 0) {
        const updatedItems = [...prev.selectedItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: newQuantity
        };
        return { ...prev, selectedItems: updatedItems };
      }
      
      const menuItem = menu.find(item => item.id === itemId);
      if (!menuItem) return prev;
      
      return {
        ...prev,
        selectedItems: [
          ...prev.selectedItems,
          {
            id: itemId,
            name: menuItem.name,
            price: menuItem.price,
            quantity: newQuantity
          }
        ]
      };
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Введите имя";
    if (!formData.phone.trim()) newErrors.phone = "Введите номер телефона";
    if (!/^\+?\d{7,15}$/.test(formData.phone)) newErrors.phone = "Некорректный формат телефона";
    if (formData.selectedItems.length === 0) newErrors.items = "Выберите хотя бы один товар";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(formData);
    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.setItem("lastOrder", JSON.stringify(formData));

    setIsSubmitted(true);
  };

  const selectedProducts = formData.selectedItems.map(selectedItem => {
    const menuItem = menu.find(item => item.id === selectedItem.id);
    return {
      ...menuItem,
      quantity: selectedItem.quantity,
      totalPrice: selectedItem.quantity * menuItem.price
    };
  });

  const totalAmount = selectedProducts.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <>
      <Header />
      <section className="o-order-section">
        <div className="o-container">
          <div className="o-section-header">
            <h2 className="o-section-subtitle">ОФОРМИТЬ ЗАКАЗ</h2>
            <h1 className="o-section-title">ЗАКАЗ НА САМОВЫВОЗ</h1>
          </div>

          {isSubmitted ? (
            <div className="o-success-message">
              <div className="o-success-icon">✓</div>
              <h3>Заказ успешно оформлен!</h3>
              <div className="o-order-summary">
                <h4>Ваш заказ:</h4>
                <ul>
                  {selectedProducts.map(item => (
                    <li key={item.id} className="o-order-item">
                      <span className="o-item-name">{item.name} × {item.quantity}</span>
                      <span className="o-item-price">{item.totalPrice} ₽</span>
                    </li>
                  ))}
                </ul>
                <div className="o-total">
                  <span>Итого:</span>
                  <span>{totalAmount} ₽</span>
                </div>
                <p className="o-pickup-info">
                  Самовывоз: {formData.pickupTime || "Как можно скорее"}
                </p>
              </div>
              <button
                className="o-back-button"
                onClick={() => {
                  setFormData({
                    name: "",
                    phone: "",
                    pickupTime: "",
                    selectedItems: [],
                    notes: ""
                  });
                  setErrors({});
                  setIsSubmitted(false);
                }}
              >
                Сделать новый заказ
              </button>
            </div>
          ) : (
            <form className="o-order-form" onSubmit={handleSubmit}>
              <div className="o-form-fields">
                <div className="o-form-group">
                  <label className="o-form-label">Ваше имя*</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="o-form-input"
                  />
                  {errors.name && <span className="o-error-message">{errors.name}</span>}
                </div>

                <div className="o-form-group">
                  <label className="o-form-label">Телефон*</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="o-form-input"
                  />
                  {errors.phone && <span className="o-error-message">{errors.phone}</span>}
                </div>

                <div className="o-form-group">
                  <label className="o-form-label">Время самовывоза</label>
                  <input
                    type="time"
                    name="pickupTime"
                    value={formData.pickupTime}
                    onChange={handleChange}
                    className="o-form-input"
                  />
                </div>

                <div className="o-form-group">
                  <label className="o-form-label">Примечания к заказу</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="o-form-textarea"
                    placeholder="Укажите дополнительные пожелания"
                  />
                </div>
              </div>

              <div className="o-menu-selection">
                <h3 className="o-menu-title">Меню</h3>
                {errors.items && <span className="o-error-message">{errors.items}</span>}
                <div className="o-menu-items">
                  {menu.map(item => {
                    const selectedItem = formData.selectedItems.find(sel => sel.id === item.id);
                    const quantity = selectedItem ? selectedItem.quantity : 0;

                    return (
                      <div
                        key={item.id}
                        className={`o-menu-item ${quantity > 0 ? "o-selected" : ""}`}
                      >
                        <div className="o-item-info">
                          <span className="o-item-name">{item.name}</span>
                          <span className="o-item-price">{item.price} ₽</span>
                        </div>
                        <div className="o-quantity-controls">
                          <button
                            type="button"
                            className="o-quantity-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              handleQuantityChange(item.id, quantity - 1);
                            }}
                          >
                            -
                          </button>
                          <span className="o-quantity">{quantity}</span>
                          <button
                            type="button"
                            className="o-quantity-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              handleQuantityChange(item.id, quantity + 1);
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button type="submit" className="o-submit-button">
                ПОДТВЕРДИТЬ ЗАКАЗ
              </button>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Order;
