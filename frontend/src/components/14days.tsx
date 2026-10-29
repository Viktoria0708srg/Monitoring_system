import { Card, Typography } from 'antd';
import { Column } from '@ant-design/plots';
const { Text } = Typography;

interface IncidentsChartProps {
  data: any[];
  title: string;
  
}

export function IncidentsChart({ data, title }: IncidentsChartProps) {
  return (
    <Card 
      title={
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{title}</div>
          
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
            range: ['#00c298', '#58e777'],
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