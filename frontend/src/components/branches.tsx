import { Card, Table, Progress, Tag } from 'antd';

// Описываем структуру одной строки таблицы
export interface BranchData {
  key: string;
  name: string;
  pp: string;
  cams: string;
  servers: string;
  rtt: string;
  index: number;
  status: 'ok' | 'warn' | 'error';
}

interface BranchTableProps {
  data: BranchData[];
}

export function BranchTable({ data }: BranchTableProps) {
  const columns = [
    { title: 'Филиал', dataIndex: 'name' },
    { title: 'ПП на связи', dataIndex: 'pp' },
    { title: 'Камеры', dataIndex: 'cams' },
    { title: 'Серверы', dataIndex: 'servers' },
    { title: 'RTT', dataIndex: 'rtt' },
    { 
      title: 'Индекс состояния', 
      dataIndex: 'index',
      render: (val: number) => (
        <Progress 
          percent={val} 
          size="small" 
          status={val < 60 ? 'exception' : 'normal'} 
          strokeColor='#1890ff'
        />
      )
    },
    { 
      title: 'Статус', 
      dataIndex: 'status',
      render: (status: string) => {
        const map: any = { ok: ['success', 'Норма'], warn: ['warning', 'Внимание'], error: ['error', 'Авария'] };
        return <Tag color={map[status][0]} style={{ borderRadius: '12px' }}>{map[status][1]}</Tag>;
      }
    },
  ];

  return (
    <Card 
      title={<span style={{ fontSize: '18px', fontWeight: 'bold' }}>ИТ-состояние по филиалам</span>}
      style={{ borderRadius: '12px', textAlign: 'left', height: '100%' }}
    >
      <Table dataSource={data} columns={columns} pagination={false} size="small" />
    </Card>
  );
}