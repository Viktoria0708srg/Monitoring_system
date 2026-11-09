import { Card, Typography } from 'antd';
import { Pie } from '@ant-design/plots';
const { Text } = Typography;

export function EquipmentPark({ data, total, title }: { 
  data: { name: string; value: number }[]; 
  total: number; 
  title: string; 
 
}) {
  const colors = ['#80EE98', '#0C6478', '#15919B', '#09D1C7', '#46DFB1'];

  return (
    <Card 
      title={
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: '18px', 
            fontWeight: 'bold',
            gap: '8px' }}>{title}
          </div>
        </div>
      }

      style={{ borderRadius: '12px', textAlign: 'left', height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', height: '220px' }}>
        
        <div style={{ width: '50%', position: 'relative' }}>

          <Pie 
            data={data} 
            angleField="value" 
            colorField="name"
            radius={0.9} 
            innerRadius={0.6} 
            scale={{
              color: {
                domain: ['Камеры', 'Серверы', 'Коммутаторы', 'ИБП', 'Прочее'],
                range: ['#80EE98', '#0C6478', '#15919B', '#09D1C7', '#46DFB1'], // Градиент от темного к светлому
              }
            }}

            legend={false} 
            label={false} 
            tooltip={false} 
            height={300}/>

          {/* Цифра в центре */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', pointerEvents: 'none' }}>
            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{total.toLocaleString('ru-RU')}</div>
            <div style={{ fontSize: '12px', color: '#8c9baa' }}>устройств</div>
          </div>
        </div>

        {/* Легенда */}
        <div style={{ width: '50%', 
          paddingLeft: '16px', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '8px', 
          fontSize: '13px' }}>

          {data.map((item, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>
                <span style={{ color: colors[index % colors.length], marginRight: '5px' }}>●</span>
                {item.name}
              </span>
              <b>{item.value.toLocaleString('ru-RU')}</b>
            </div>
          ))}
        </div>

      </div>
    </Card>
  );
}