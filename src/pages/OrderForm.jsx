import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './OrderForm.css';

function OrderForm() {
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [note, setNote] = useState('');
  const [toppings, setToppings] = useState([]);

  const [dough, setDough] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectionPrice, setSelectionPrice] = useState(0);
  const basePrice = 85.5;

  const history = useHistory();

  const allToppings = [
    'Domates', 'Biber', 'Mantar', 'Zeytin',
    'Sucuk', 'Sosis', 'Mısır', 'Soğan',
    'Ananas', 'Jalapeno',
    'Kanada Jambonu', 'Tavuk Izgara', 'Kıyma', 'Salam' // Görseldeki bazı malzemeler eklendi
  ];

  const handleToppingChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      // 10'dan fazla malzeme seçilmesini engelle (proje gereksinimi)
      if (toppings.length < 10) {
        setToppings([...toppings, value]);
        setSelectionPrice(selectionPrice + 5);
      }
    } else {
      setToppings(toppings.filter((item) => item !== value));
      setSelectionPrice(selectionPrice - 5);
    }
  };

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(quantity + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // İsim alanı boş olmamalı ve en az 3 karakter olmalı
  // Boyut seçilmiş olmalı
  // Hamur seçilmiş olmalı
  // Malzeme seçimi 4 ile 10 arasında olmalı
  const isFormValid = name.trim().length >= 3 && size && dough && toppings.length >= 4 && toppings.length <= 10;


 const handleSubmit = (e) => {
  e.preventDefault();

  if (!isFormValid) {
    alert("Lütfen tüm alanları doğru şekilde doldurunuz.");
    return;
  }

  const order = {
    name: name,
    job: note || "Pizza Developer",
    size,
    dough,
    toppings,
    quantity,
  };

  axios.post('https://jsonplaceholder.typicode.com/posts', order)
    .then((res) => {
      console.log('API yanıtı:', res.data);
      alert('Siparişiniz başarıyla gönderildi!');
      history.push('/success');
    })
    .catch((err) => {
      console.error('Hata:', err);
      alert('API isteği başarısız oldu.');
    });
}; 


  const totalPrice = (basePrice + selectionPrice) * quantity;

  return (
    <>
      {/* Üst Kırmızı Header */}
      <header className="order-form-header">
        Teknolojik Yemekler
      </header>

      <div className="order-form-container">
      

        {/* Bilgi ve Fiyat Bölümü */}
        <div className="info-section">
            <h2 className="pizza-name">Position Absolute Acı Pizza</h2>
            <div className="price-and-rating">
                <span className="price">{basePrice.toFixed(2)}₺</span>
                <div className="rating">
                    <span>4.9</span>
                    <span>(200)</span>
                </div>
            </div>
            <p className="pizza-description">
                Frontend Dev olarak hala position: absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemeler ile kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
            </p>
        </div>


        <form onSubmit={handleSubmit}>
          {/* Boyut Seçimi */}
          <div className="form-section size-dough-selection">
            <div className="size-selection">
              <h3>Boyut Seç <span style={{ color: 'red' }}>*</span></h3>
              <div className="radio-group">
  {['S', 'M', 'L'].map((boyut) => (
    <div key={boyut} className="radio-item">
      <input
        type="radio"
        id={`size-${boyut}`}
        name="size"
        value={boyut}
        checked={size === boyut}
        onChange={(e) => setSize(e.target.value)}
      />
      <label htmlFor={`size-${boyut}`}>{boyut}</label>
    </div>
  ))}
</div>
            </div>

            {/* Hamur Kalınlığı Seçimi */}
            <div className="dough-selection">
              <h3>Hamur Seç <span style={{ color: 'red' }}>*</span></h3>
              <select value={dough} onChange={(e) => setDough(e.target.value)}>
                <option value="">—Hamur Kalınlığı Seç—</option>
                <option value="ince">İnce</option>
                <option value="kalın">Kalın</option>
              </select>
            </div>
          </div>
            
          {/* İsim Inputu */}
          <div className="form-section name-input-group">
            <label htmlFor="name-input">İsim:</label>
            <input
              id="name-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Adınızı giriniz"
            />
          </div>


          {/* Ek Malzemeler */}
          <div className="form-section toppings-section">
            <h3>Ek Malzemeler (en fazla 10 adet)</h3>
            <p className="topping-limit-info">En fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="toppings-grid">
              {allToppings.map((malzeme) => (
                <label key={malzeme}>
                  <input
                    type="checkbox"
                    value={malzeme}
                    checked={toppings.includes(malzeme)}
                    onChange={handleToppingChange}
                    disabled={
                      !toppings.includes(malzeme) && toppings.length >= 10
                    }
                  />
                  {malzeme}
                </label>
              ))}
            </div>
          </div>

          {/* Özel Not */}
          <div className="form-section note-section">
            <label>Sipariş Notu:</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Siparişine eklemek istediğin bir not var mı?"
            />
          </div>

          {/* Adet Kontrolü ve Sipariş Özeti */}
          <div className="order-summary-section">
            <div className="quantity-control">
              <button type="button" onClick={() => handleQuantityChange('decrease')}>-</button>
              <span>{quantity}</span>
              <button type="button" onClick={() => handleQuantityChange('increase')}>+</button>
            </div>

            <div className="order-summary">
              <h3>Sipariş Toplamı</h3>
              <p>Seçimler: {selectionPrice.toFixed(2)}₺</p>
              <p className="total-price">Toplam: {totalPrice.toFixed(2)}₺</p>
              <button type="submit" className="submit-btn" disabled={!isFormValid}>
                Sipariş Ver
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default OrderForm;