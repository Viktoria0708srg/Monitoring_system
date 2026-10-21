import { Card, Typography } from 'antd';
import { Line } from '@ant-design/plots';

const { Text } = Typography;

// 1. Описываем, какие данные приходят
export interface ChartData {
  time: string;
  type: string;
  value: number;
}

interface AvailabilityChartProps {
  data: ChartData[];
}

// 2. Компонент принимает только data
export function AvailabilityChart({ data }: AvailabilityChartProps) {
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