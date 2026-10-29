import { Card } from 'antd';

// пропсы
interface KpiCardProps {
  title: string;
  mainValue: number | string;
  subValue?: string; 
  percent: number;   // для зеленой полосы 
  errorText?: string; 
  goodText?: string;
}

export function KpiCard({ title, mainValue, subValue, percent, errorText, goodText }: KpiCardProps) {
  return (
    <Card style={{ width: '100%', borderRadius: '12px' }}>
      {/*заголовок*/}
      <div style={{ fontSize: '16px',
        textAlign: 'left',
        color: '#5c6b7f',
        fontWeight: '500',
        marginBottom: '8px' }}>
        {title}
      </div>

      {/*цифры*/}
      <div style={{ display: 'flex',
        alignItems: 'baseline',
        marginBottom: '16px' }}>

        <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#111b2e', lineHeight: 1 }}>
          {mainValue}
        </span>

        {subValue && (
          <span style={{ fontSize: '14px', color: '#8c9baa', marginLeft: '8px' }}>
            {subValue}
          </span>
        )}
      </div>

      {/* полоса прогресса */}
      <div style={{ 
        display: 'flex', 
        height: '6px', 
        borderRadius: '3px', 
        overflow: 'hidden',
        backgroundColor: errorText ? '#ff4d4f' : '#00c298' // иначе зеленый
      }}>

        <div style={{ 
          width: `${percent}%`, 
          backgroundColor: '#00c298', 
          height: '100%' 
        }}></div>

      </div>

    {/* ерор текст*/ }
      {errorText && (
        <div style={{ marginTop: '16px', textAlign: 'left' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: '#fff1f0',
            color: '#cf1322',
            padding: '4px 12px',
            borderRadius: '16px',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            <div style={{ width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#cf1322',
                marginRight: '8px' }}></div>
            {errorText}
          </div>
        </div>
      )}

     {/* зеленый текст*/ }
        {goodText && (
        <div style={{ marginTop: '16px', textAlign: 'left' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: '#d8f8d7',
            color: '#199b0d',
            padding: '4px 12px',
            borderRadius: '16px',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            <div style={{ width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#199b0d',
                marginRight: '8px' }}></div>
            {goodText}
          </div>

        </div>
      )}


    </Card>
  );
}