import { Card, Typography, Tag } from 'antd';
import { Area } from '@ant-design/plots';
const { Text } = Typography;

export function ViPNetChart({ data }: { data: any[] }) {

  const maxValue = data.length > 0 ? Math.max(...data.map(item => item.value)) : 0;

  return (
    <Card 
      title={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', textAlign: 'left' }}>
          <div>
            <div style={{ fontSize: '16px', fontWeight: 'bold' }}>Загрузка канала ViPNet</div>
          </div>

          <Tag color="blue" style={{ borderRadius: '12px', margin: 0, color: '#00c298', backgroundColor: '#e6fff8' }}>
            пик {maxValue}
          </Tag>
        </div>
      }
      style={{ borderRadius: '12px', textAlign: 'left', height: '100%' }}
      bodyStyle={{ padding: '16px', height: '220px' }}
    >
      <Area 
        data={data} 
        xField="time" 
        yField="value" 
        height={260}
        
        axis={{
          x: { 
            labelFill: '#8c9baa', 
            labelFontSize: 10,
          },
          y: { 
            labelFill: '#8c9baa', 
            labelFontSize: 10,
            labelFormatter: (v: number) => v,
          }
        }}

        scale={{
          y: {
            domainMin: 0,
            domainMax: 50,
            tickCount: 4
          }
        }}
        
        style={{
          fill: 'l(270) 0:#ffffff 1:#00c298',
          fillOpacity: 0.3,
          stroke: '#00c298',
          lineWidth: 2,
        }}

        tooltip={false}
        legend={false}
      />
    </Card>
  );
}