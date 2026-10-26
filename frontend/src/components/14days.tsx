import { Card, Typography } from 'antd';
import { Column } from '@ant-design/plots';
const { Text } = Typography;

interface IncidentsChartProps {
  data: any[];
  title: string;
  subtitle: string;
}

export function IncidentsChart({ data, title, subtitle }: IncidentsChartProps) {
  return (
    <Card 
      title={
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{title}</div>
          <Text type="secondary" style={{ fontSize: '13px', fontWeight: 'normal' }}>{subtitle}</Text>
        </div>
      }
      style={{ borderRadius: '12px', textAlign: 'left', height: '100%' }}>

      <Column 
        data={data}
        xField="date"
        yField="count"
        seriesField="type"
        colorField="type" 
        scale={{
          color: {
            domain: ['Авария', 'Предупреждение'],
            range: ['#ff4d4f', '#faad14'],
          }
        }}
        isStack={true}
        legend={{ position: 'top-right' }}
        height={360} 
        tooltip={false}
        xAxis={{ label: { style: { fontSize: 11, fill: '#8c9baa' } } }}
        yAxis={{ label: { style: { fontSize: 11, fill: '#8c9baa' } } }}/>
    </Card>
  );
}