import { Card, Table, Progress, Tag } from 'antd';

const statusMap: any = {
  ok: { color: 'success', text: 'Норма' },
  warn: { color: 'warning', text: 'Внимание' },
  error: { color: 'error', text: 'Авария' }
};

export function BranchTable({ data }: { data: any[] }) {
  const columns = [
    { title: 'Филиал', dataIndex: 'name' },
    { title: 'ПП на связи', dataIndex: 'pp' },
    { title: 'Камеры', dataIndex: 'cams' },
    { title: 'Серверы', dataIndex: 'servers' },
    { title: 'RTT', dataIndex: 'rtt' },

    { 
      title: 'Индекс состояния', 
      dataIndex: 'index',
      render: (val: number) => <Progress percent={val} size="small" strokeColor="#00c298" />
    },
    { 
      title: 'Статус', 
      dataIndex: 'status',
      render: (status: string) => <Tag color={statusMap[status].color} style={{ borderRadius: '12px' }}>{statusMap[status].text}</Tag>
    },
  ];

  return (
    <Card title={<span style={{ fontSize: '18px', fontWeight: 'bold' }}>ИТ-состояние по филиалам</span>} 
    style={{ borderRadius: '12px', textAlign: 'left', height: '100%' }}>

      <Table 
      dataSource={data} 
      columns={columns} 
      pagination={false} 
      size="small" />
    </Card>
  );
}