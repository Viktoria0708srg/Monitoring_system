import { Card, Progress, Typography } from 'antd';
const { Text } = Typography;

export function ProblemPoints({ data }: { data: { name: string; count: number }[] }) {
  const maxCount = Math.max(...data.map((item) => item.count));

  return (
    <Card 
      title={
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Проблемные пункты пропуска</div>
          <Text type="secondary" style={{ fontSize: '13px', fontWeight: 'normal' }}>Неисправные камеры, шт · топ-6</Text>
        </div>
      }
      style={{ borderRadius: '12px', textAlign: 'left', height: '100%' }}
    >
      {data.map((item, index) => (
        <div key={index} style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '4px' }}>
            <span>{item.name}</span>
            <b>{item.count}</b>
          </div>
          <Progress percent={(item.count / maxCount) * 100} showInfo={false} strokeColor="#1890ff" size={['100%', 6]} />
        </div>
      ))}
    </Card>
  );
}