import { Card } from 'antd';

interface KpiCardProps {
  title: string;
  mainValue: number | string;
  subValue?: string; 
  percent: number;   
  errorText?: string; 
  goodText?: string;
}

export function KpiCard({ title, mainValue, subValue, percent, errorText, goodText }: KpiCardProps) {
  return (
    
    <Card style={{ width: '100%', borderRadius: '12px' }} bodyStyle={{ padding: '16px' }}>
      
      {/* заголовок */}
      <div style={{ fontSize: '14px',
        textAlign: 'left',
        color: '#5c6b7f',
        fontWeight: '500',
        marginBottom: '4px' }}>
        {title}
      </div>

      {/* главная цифра */}
      <div style={{ display: 'flex',
        alignItems: 'baseline',
        marginBottom: '12px' }}>

        <span style={{ fontSize: '26px', fontWeight: 'bold', color: '#111b2e', lineHeight: 1 }}>
          {mainValue}
        </span>

        {subValue && (
          <span style={{ fontSize: '13px', color: '#8c9baa', marginLeft: '6px' }}>
            {subValue}
          </span>
        )}
      </div>

      <div style={{ 
        display: 'flex', 
        height: '4px', 
        borderRadius: '2px', 
        overflow: 'hidden',
        backgroundColor: errorText ? '#ff4d4f' : '#00c298' 
      }}>
        <div style={{ 
          width: `${percent}%`, 
          backgroundColor: '#00c298', 
          height: '100%' 
        }}></div>
      </div>

      {errorText && (
        <div style={{ marginTop: '12px', textAlign: 'left' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: '#fff1f0',
            color: '#cf1322',
            padding: '2px 10px', 
            borderRadius: '12px',
            fontSize: '12px', 
            fontWeight: '500'
          }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#cf1322', marginRight: '6px' }}></div>
            {errorText}
          </div>
        </div>
      )}

      {goodText && (
        <div style={{ marginTop: '12px', textAlign: 'left' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: '#8fe4d149',
            color: '#00c298',
            padding: '2px 10px',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: '500'
          }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#00c298', marginRight: '6px' }}></div>
            {goodText}
          </div>
        </div>
      )}

    </Card>
  );
}