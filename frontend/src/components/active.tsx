import { Card, List, Tag, Typography, Button } from 'antd';

const { Text } = Typography;

// 1. Описываем структуру инцидента
export interface IncidentData {
  id: number;
  title: string;
  desc: string;
  time: string;
  type: 'error' | 'warning';
  details: string;
}

interface ActiveIncidentsProps {
  incidents: IncidentData[];
  totalCount: number; // Общее количество открытых, чтобы вывести в теге
}

export function ActiveIncidents({ incidents, totalCount }: ActiveIncidentsProps) {
  return (
    <Card 
      title={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Активные инциденты</span>
            <Tag color="error" style={{ borderRadius: '12px' }}>{totalCount} открытых</Tag>
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
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <Text strong>{item.title}</Text>
                <Text type="secondary" style={{ fontSize: '12px' }}>{item.time}</Text>
              </div>
              <div style={{ 
                fontSize: '13px', 
                color: '#5c6b7f', 
                borderLeft: `3px solid ${item.type === 'error' ? '#ff4d4f' : '#faad14'}`, 
                paddingLeft: '8px',
                marginBottom: '4px'
              }}>
                {item.desc}
              </div>
              <Text type="secondary" style={{ fontSize: '12px' }}>{item.details}</Text>
            </div>
          </List.Item>
        )}
      />
    </Card>
  );
}