import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { OverviewPage } from './pages/1'; 
import { VoronezhPage } from './pages/2'; 
import { ModelPage } from './pages/3'; // Добавили импорт

const { Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: 'transparent' }}>
      <Content style={{ padding: 0, backgroundColor: 'transparent' }}>
        <Routes>
          <Route path="/" element={<OverviewPage />} /> 
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/voronezh" element={<VoronezhPage />} />
          <Route path="/model" element={<ModelPage />} /> {/* Добавили маршрут */}
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