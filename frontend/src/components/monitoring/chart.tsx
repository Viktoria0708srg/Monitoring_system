import { Card, Typography } from 'antd';
import { Line } from '@ant-design/plots';
const { Text } = Typography;

interface ChartProps {
  data: any[];
  title: string;
  headerRight?: React.ReactNode;
}

export function AvailabilityChart({ data, title, headerRight }: ChartProps) {
  return (
    <Card 
      title={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{title}</div>
          {headerRight} 
        </div>
      }
      style={{ borderRadius: '12px', textAlign: 'left', height: '100%' }}
      bodyStyle={{ padding: '16px' }}
    >
      <Line 
        data={data} 
        xField="time" 
        yField="value" 
        seriesField="type" 
        smooth 
        height={250} 
        tooltip={false}
        
        // ГЛАВНАЯ МАГИЯ: colorField + scale
        colorField="type"
        scale={{
          color: {
            domain: ['Камеры', 'Серверы', 'ViPNet'],
            range: ['#1890ff', '#52c41a', '#d12e2e'],
          },
          y: {
            domainMin: 90,
            domainMax: 100,
          }
        }}

        point={{ size: 4, shape: 'circle', style: { fill: '#fff', lineWidth: 2 } }}
        
        yAxis={{ 
          label: { 
            formatter: (v: string) => `${v}%`, 
            style: { fill: '#8c9baa', fontSize: 10 } 
          } 
        }}
        xAxis={{ 
          label: { style: { fill: '#8c9baa', fontSize: 10 } } 
        }}
        legend={false}
      />
    </Card>
  );
}