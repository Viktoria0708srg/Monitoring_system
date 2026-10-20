import { Card, Statistic, Flex } from 'antd';

function App() {
  return (
    <div style={{ padding: '24px', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      
      <Flex gap="middle" wrap="nowrap">
        
        <Card style={{ flex: 1 }}>
          <Statistic 
            title="Пункты пропуска" 
            value={50} 
            valueStyle={{ color: '#3f8600' }}/>
        </Card>

        <Card style={{ flex: 1 }}>
          <Statistic 
            title="Видеокамеры" 
            value={75} 
            valueStyle={{ color: '#3f8600' }}/>
        </Card>

        <Card style={{ flex: 1 }}>
          <Statistic 
            title="Серверы на ПП" 
            value={2} 
            valueStyle={{ color: '#cf1322' }}/>
        </Card>

        <Card style={{ flex: 1 }}>
          <Statistic 
            title="КЦОД" 
            value={99}
            suffix="%" />
        </Card>

        <Card style={{ flex: 1 }}>
          <Statistic 
            title="Каналы VipNet" 
            value={100} 
            valueStyle={{ color: '#3f8600' }}/>
        </Card>

      </Flex>
    </div>
  );
}

export default App;