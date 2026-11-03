import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import { OverviewPage } from './pages/1'; 
import { VoronezhPage } from './pages/2'; 

const { Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: 'transparent' }}>
      <Content style={{ padding: 0, backgroundColor: 'transparent' }}>
        <Routes>
          <Route path="/" element={<OverviewPage />} /> 
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/voronezh" element={<VoronezhPage />} />
        </Routes>
      </Content>
    </Layout>
  );
}

export default function AppWithRouter() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}