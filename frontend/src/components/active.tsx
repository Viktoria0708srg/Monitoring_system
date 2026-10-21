import { Card, List, Tag, Typography, Button } from 'antd';

const { Text } = Typography;

// данные для списка инцидентов
const incidents = [
  { id: 1, title: 'МАПП Нехотеевка', desc: 'Потеря связи с видеосервером № 2', time: '12 мин', type: 'error', details: '8 камер недоступны' },
  { id: 2, title: 'ЖДПП Валуйки', desc: 'Канал ViPNet не поднялся после перезагрузки', time: '41 мин', type: 'warning', details: 'нет данных 41 мин' },
  { id: 3, title: 'ВПП Воронеж (Чертовицкое)', desc: 'Заполнение архива 92 %', time: '1 ч', type: 'warning', details: 'глубина архива 11 сут' },
  { id: 4, title: 'МАПП Бугаевка', desc: 'Сервер СУБД: загрузка CPU 91 %', time: '1 ч 20 мин', type: 'warning', details: 'порог 85 %' },
];

export function ActiveIncidents() {
  return (
    <Card 
      title={
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'left' }}>

                <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px' }}>

            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Активные инциденты</span>
            <Tag color="error" style={{ borderRadius: '12px' }}>9 открытых</Tag>
          </div>
          <Button type="link" size="small" style={{ padding: 0 }}>Все →</Button>
        </div>
      }
      style={{ borderRadius: '12px', textAlign: 'left', height: '100%' }}
      bodyStyle={{ padding: '0' }} 
    >
      <List
        itemLayout="horizontal"
        dataSource={incidents}
        renderItem={(item) => (
          <List.Item style={{ padding: '16px 24px', borderBottom: '1px solid #f0f0f0' }}>
            <div style={{ width: '100%' }}>
              
              {/* Заголовок и время */}
              <div style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '4px' }}>

                <Text strong>{item.title}</Text>
                <Text type="secondary" style={{ fontSize: '12px' }}>{item.time}</Text>
              </div>
              
              {/* Описание с цветной полоской слева */}
              <div style={{ 
                fontSize: '13px', 
                color: '#5c6b7f', 
                borderLeft: `3px solid ${item.type === 'error' ? '#ff4d4f' : '#faad14'}`, 
                paddingLeft: '8px',
                marginBottom: '4px'
              }}>
                {item.desc}
              </div>
              
              {/*серый мелкий текст */}
              <Text type="secondary" style={{ fontSize: '12px' }}>{item.details}</Text>
            </div>
          </List.Item>
        )}
      />
    </Card>
  );
}