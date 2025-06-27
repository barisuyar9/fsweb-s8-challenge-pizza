import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Router: sayfalar arasında geçiş yapılmasını sağlar.
// Switch: route’ları sırayla okur ve ilk eşleşmeyi render eder.
// Route: belirli bir path ile eşleşirse ilgili bileşeni render eder.
import HomePage from './pages/HomePage';
import OrderForm from './pages/OrderForm';
import OrderSuccess from './pages/OrderSuccess';

function App() {
  return (
    <Router>
      <Switch>
         <Route exact path="/" component={HomePage} /> {/* Anasayfa (HomePage) */}
         <Route path="/order" component={OrderForm} /> {/* Sipariş formu (OrderForm) */}
         <Route path="/success" component={OrderSuccess} /> {/* Sipariş alındı sayfası (OrderSuccess) */}
      </Switch>
    </Router>
  );
}

export default App;
