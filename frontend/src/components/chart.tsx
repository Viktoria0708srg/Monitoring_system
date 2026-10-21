import { Card, Typography } from 'antd';
import { Line } from '@ant-design/plots';

const { Text } = Typography;

const data = [
    { time: '00:00', type: 'Камеры', value: 99.8 },
    { time: '07:00', type: 'Камеры', value: 97.5 },
    { time: '12:00', type: 'Камеры', value: 98.5 },
    { time: '20:00', type: 'Камеры', value: 99.3 },
    { time: '00:00', type: 'Серверы', value: 99.9 },
    { time: '07:00', type: 'Серверы', value: 99.8 }, 
    { time: '12:00', type: 'Серверы', value: 99.9 }, 
    { time: '20:00', type: 'Серверы', value: 99.9 },
    { time: '00:00', type: 'ViPNet', value: 98.6 },
    { time: '07:00', type: 'ViPNet', value: 91.4 },
    { time: '12:00', type: 'ViPNet', value: 97.0 }, 
    { time: '20:00', type: 'ViPNet', value: 98.0 },
];

export function AvailabilityChart() {
  return (
    <Card 
      title={
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Доступность инфраструктуры за 24 часа</div>
          <Text type="secondary" style={{ fontSize: '13px', fontWeight: 'normal' }}>Доля устройств на связи, %</Text>
        </div>
      }
      style={{ borderRadius: '12px', textAlign: 'left' }}
    >
      <Line 
        data={data}
        xField="time"
        yField="value"
        seriesField="type"
        smooth
        height={250}
        tooltip={false}
        color={['#1890ff', '#52c41a', '#722ed1']}
        yAxis={{ min: 90, max: 100, label: { formatter: (v: string) => `${v}%` } }}
        legend={{ position: 'top-right' }}
      />
    </Card>
  );
}