import { Card, Typography, Tag } from 'antd';
import { Column } from '@ant-design/plots';
const { Text } = Typography;

export function CamerasAvailability({ data }: { data: any[] }) {
  return (
    <Card 
      title={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', textAlign: 'left' }}>
          <div>
            <div style={{ fontSize: '16px', fontWeight: 'bold' }}>Доступность камер за 7 дней</div>
          </div>
          <Tag color="success" style={{ borderRadius: '12px', margin: 0, color: '#00c298', backgroundColor: '#e6f9f0' }}>
            ср. 95,4 %
          </Tag>
        </div>
      }
      style={{ borderRadius: '12px', textAlign: 'left', height: '100%' }}
      bodyStyle={{ padding: '16px', height: '220px' }} 
    >
      <div style={{ position: 'relative', height: '100%' }}>
        
        {/* Линия норматива */}
        <div style={{
          position: 'absolute',
          top: '13%', // высота линии норматива
          left: '40px', 
          right: '10px',
          borderTop: '1px dashed #faad14',
          zIndex: 1,
          pointerEvents: 'none'
        }}>
          <span style={{
            position: 'absolute',
            right: 0,
            top: '-16px',
            fontSize: '11px',
            color: '#faad14',
            fontWeight: 'bold',
            backgroundColor: '#fff',
            padding: '0 4px'
          }}>
            норматив 95 %
          </span>
        </div>

        <Column 
          data={data} 
          xField="day" 
          yField="value" 
          height={260} 
          
          
          colorField="status"
          scale={{
            color: {
              domain: ['norm', 'warning'],
              range: ['#00c298', '#faad14'],
            }
          }}

          yAxis={{ 
            label: { formatter: (v: string) => `${v} %`, style: { fill: '#8c9baa', fontSize: 10 } } 
          }}
          
          xAxis={{ label: { style: { fill: '#8c9baa', fontSize: 10 } } }}
          
          label={{
            position: 'top',
            formatter: (datum: any) => (datum.value < 95 ? `${datum.value} %` : ''),
            style: { fill: '#faad14', fontWeight: 'bold', fontSize: 10 }
          }}
          
          tooltip={false}
          legend={false}
          style={{ maxWidth: 30 }} 
        />
      </div>
    </Card>
  );
}