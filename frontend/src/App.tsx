import { Flex } from 'antd';
import { KpiCard } from './components/KpiCard';

function App() {
  return (
    <div style={{ padding: '24px', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      
      <Flex gap="middle" wrap="nowrap">
        
        {/* пп*/}
        <div style={{ flex: 1 }}>
          <KpiCard 
            title="Пункты пропуска на связи" 
            mainValue={341} 
            subValue="из 363" 
            percent={94} 
            errorText="22 без связи" />
        </div>

        {/* видеокамеры */}
        <div style={{ flex: 1 }}>
          <KpiCard 
            title="Видеокамеры" 
            mainValue={4812} 
            subValue="из 4999" 
            percent={96} 
            errorText="187 офлайн"/>
        </div>
        
        {/* серверы на ПП */}
        <div style={{ flex: 1 }}>
          <KpiCard 
            title="Серверы на ПП" 
            mainValue={726} 
            subValue="в норме из 742" 
            percent={98} 
            errorText="12 предупреждений"/>
        </div>

        {/* КЦОД — доступность */}
        <div style={{ flex: 1 }}>
          <KpiCard 
            title="КЦОД — доступность" 
            mainValue="99,97%" 
            subValue="за 30 дней" 
            percent={99} 
            goodText="норма"/>
        </div>

        {/* каналы випнет */}
        <div style={{ flex: 1 }}>
          <KpiCard 
            title="Каналы ViPNet" 
            mainValue={358} 
            subValue="туннелей активно" 
            percent={98} 
            errorText="5 нестабильных"/>
        </div>

      </Flex>

    </div>
  );
}

export default App;