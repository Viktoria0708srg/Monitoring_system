import { Button, Card } from 'antd';

function App() {
  return (
    <div style={{ padding: '50px', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <Card title="проверка" style={{ width: 400 }}>
        <p>всё работает!</p>
        <Button type="primary">Нажми меня</Button>
      </Card>
    </div>
  );
}

export default App;