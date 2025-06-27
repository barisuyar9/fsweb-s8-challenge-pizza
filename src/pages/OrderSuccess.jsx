import React from 'react';
import { Link } from 'react-router-dom';
import './OrderSuccess.css';

function OrderSuccess() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🥳 Siparişiniz Alındı!</h2>
      <p style={styles.text}>
        Siparişiniz başarıyla gönderildi. En kısa sürede afiyetle tüketmeniz dileğiyle!
      </p>
      <Link to="/" style={styles.link}>
         <button style={styles.button}>Anasayfaya Dön</button> {/* Anasayfaya geri dön butonu */}
      </Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    padding: '30px',
  },
  heading: {
    color: '#CE2829',
  },
  text: {
    fontSize: '18px',
    margin: '20px 0',
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    backgroundColor: '#FDC913',
    color: '#292929',
    border: 'none',
    padding: '12px 25px',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
  }
};

export default OrderSuccess;
