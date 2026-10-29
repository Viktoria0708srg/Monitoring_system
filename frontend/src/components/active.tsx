import { Card, List, Tag, Typography, Button } from 'antd';
const { Text } = Typography;

interface ActiveIncidentsProps {
  incidents: any[];
  title: string;
  totalText: string;
}

export function ActiveIncidents({ incidents, title, totalText }: ActiveIncidentsProps) {
  return (
    <Card 
      title={
        <div style={{ display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' }}>
          <div style={{ display: 'flex', 
            alignItems: 'center', 
            gap: '8px' }}>
            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{title}</span>
            <Tag color="error" style={{ borderRadius: '12px' }}>{totalText}</Tag>
          </div>
          <Button type="link" size="small" style={{ padding: 0 }}>Все →</Button>
        </div>
      }
      style={{ borderRadius: '12px', textAlign: 'left', height: '100%' }}
      bodyStyle={{ padding: '0' }} 
    >
      <List
        dataSource={incidents}
        renderItem={(item) => (
          <div style={{ padding: '16px 24px', borderBottom: '1px solid #f0f0f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <Text strong>{item.title}</Text>
              <Text type="secondary" style={{ fontSize: '12px' }}>{item.time}</Text>
            </div>
            <div style={{ fontSize: '13px', color: '#5c6b7f', borderLeft: `3px solid ${item.type === 'error' ? '#ff4d4f' : '#faad14'}`, paddingLeft: '8px' }}>
              {item.desc}
              <br />
              <Text type="secondary" style={{ fontSize: '12px' }}>{item.details}</Text>
            </div>
          </div>
        )}
      />
    </Card>
  );
}