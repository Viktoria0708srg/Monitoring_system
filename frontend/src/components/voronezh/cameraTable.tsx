import { Card, Table, Tag } from 'antd';

export function CamerasTable({ data }: { data: any[] }) {
  const columns = [
    { 
      title: 'Камера', 
      dataIndex: 'id',
      render: (text: string, record: any) => (
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontWeight: 'bold' }}>{text}</div>
          <div style={{ fontSize: '12px', color: '#8c9baa' }}>{record.name}</div>
        </div>
      )
    },
    { 
      title: 'Статус', 
      dataIndex: 'status',
      render: (status: string) => {
        let color = '#00c298';
        if (status === 'Офлайн') color = 'error';
        if (status === 'Без записи') color = 'warning';
        return <Tag color={color} style={{ borderRadius: '12px' }}>{status}</Tag>;
      }
    },
    { title: 'Разрешение · FPS', dataIndex: 'res' },
    { title: 'Битрейт', dataIndex: 'bitrate' },
    { title: 'Запись', dataIndex: 'record' },
    { title: 'Глубина архива', dataIndex: 'archive' },
    { title: 'Отклик', dataIndex: 'time' },
  ];

  return (
    <Card 
      title={<span style={{ fontSize: '18px', fontWeight: 'bold' }}>Видеокамеры</span>}
      style={{ borderRadius: '12px', textAlign: 'left', height: '100%' }}
    >
      <Table dataSource={data} columns={columns} pagination={false} size="small" />
    </Card>
  );
}