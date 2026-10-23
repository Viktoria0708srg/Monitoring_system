import { Card, Typography } from 'antd';
import { Line } from '@ant-design/plots';
const { Text } = Typography;

interface ChartProps {
  data: any[];
  title: string;
  subtitle: string;
}

export function AvailabilityChart({ data, title, subtitle }: ChartProps) {
  return (
    <Card 
      title={
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{title}</div>
          <Text type="secondary" style={{ fontSize: '13px', fontWeight: 'normal' }}>{subtitle}</Text>
        </div>
      }
      style={{ borderRadius: '12px', textAlign: 'left', height: '100%' }}>
      <Line 
        data={data} 
        xField="time" 
        yField="value" 
        seriesField="type" 
        
        colorField="type" 
        smooth 
        height={250} 
        tooltip={false}
        color={['#1890ff', '#52c41a', '#722ed1']}
        point={{ size: 4, shape: 'circle', style: { fill: '#fff', lineWidth: 2 } }}
        yAxis={{ min: 90, max: 100, label: { formatter: (v: string) => `${v}%` } }}
        legend={{ position: 'top-right' }}
      />
    </Card>
  );
}