
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './components/Dashboard/Dashboard';
// Import other components as necessary
import CommissionHistory from './components/CommissionHistory/CommissionHistory';
import Help from './components/Help/Help';
import Orders from './components/Orders/Orders';
import ProductBulkUpload from './components/ProductBulkUpload/ProductBulkUpload';
import ProductReviews from './components/ProductReviews/ProductReviews';
import Products from './components/Products/Products';
import Support from './components/Support/Support';
import Table from './components/Table/Table';
import './App.css';

function App() {
  return (
    <div id="top" className='container'>
      <Layout>
        <Routes>
          <Route path="/vendor-dashboard" element={<Dashboard />} />
          <Route path="/commissionHistory" element={<CommissionHistory />} />
          <Route path="/help" element={<Help />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/productBulkUpload" element={<ProductBulkUpload />} />
          <Route path="/productReviews" element={<ProductReviews />} />
          <Route path="/products" element={<Products />} />
          <Route path="/support" element={<Support />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
