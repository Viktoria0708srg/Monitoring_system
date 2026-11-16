import { Card, Table, Tag, Button, Space, Typography } from 'antd';
const { Text } = Typography;

export function EventLog({ data }: { data: any[] }) {
  const columns = [
    { 
      title: 'Время', 
      dataIndex: 'time', 
      width: '10%',
      render: (text: string) => <span style={{ color: '#8c9baa' }}>{text}</span>
    },
    { 
      title: 'Объект', 
      dataIndex: 'object',
      render: (obj: any) => (
        <div style={{ textAlign: 'left' }}>
          <span style={{ color: obj.color, marginRight: '6px', fontSize: '10px' }}>●</span>
          <Text strong>{obj.name}</Text>
        </div>
      )
    },
    { title: 'Тип', dataIndex: 'type', width: '12%' },
    { title: 'Событие', dataIndex: 'event' },
    { title: 'Длительность', dataIndex: 'duration', width: '12%' },
    { 
      title: 'Статус', 
      dataIndex: 'status',
      width: '12%',
      render: (status: any) => (
        <Tag color={status.color} style={{ borderRadius: '12px', color: status.textColor, backgroundColor: status.bgColor }}>
          {status.text}
        </Tag>
      )
    },
  ];

  return (
    <Card 
      title={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', textAlign: 'left', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ fontSize: '16px', fontWeight: 'bold' }}>Журнал ИТ-событий</div>

          </div>
          <Space>
            <Button type="primary" shape="round" size="small" style={{ backgroundColor: '#e6f4ff', color: '#1890ff', border: 'none' }}>
              Все события
            </Button>
            <Button shape="round" size="small">Только аварии</Button>
            <Button shape="round" size="small">Экспорт в XLSX</Button>
          </Space>
        </div>
      }
      style={{ borderRadius: '12px', textAlign: 'left', marginTop: '24px' }}
      bodyStyle={{ padding: '0' }} 
    >
      <Table 
        dataSource={data} 
        columns={columns} 
        pagination={false} 
        size="small" 
        style={{ marginTop: '8px' }}
      />
    </Card>
  );
}
