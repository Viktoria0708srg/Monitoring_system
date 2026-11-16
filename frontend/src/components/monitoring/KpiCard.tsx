import { Card } from 'antd';

interface KpiCardProps {
  title: string;
  mainValue: number | string;
  subValue?: string; 
  percent?: number;  
  errorText?: string; 
  goodText?: string;  
}

export function KpiCard({ title, mainValue, subValue, percent = 0, errorText, goodText }: KpiCardProps) {
  
  const isGood = percent > 70;
  const barColor = isGood ? '#00c298' : '#cf0003';

  return (
    <Card style={{ width: '100%', borderRadius: '12px' }} bodyStyle={{ padding: '16px' }}>
      
      <div style={{ fontSize: '14px', textAlign: 'left', color: '#5c6b7f', fontWeight: '500', marginBottom: '4px' }}>
        {title}
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '12px' }}>
        <span style={{ fontSize: '26px', fontWeight: 'bold', color: '#111b2e', lineHeight: 1 }}>
          {mainValue}
        </span>
        {subValue && (
          <span style={{ fontSize: '13px', color: '#8c9baa', marginLeft: '6px' }}>
            {subValue}
          </span>
        )}
      </div>

      {/* Полоска */}
      <div style={{ display: 'flex', 
        height: '4px', 
        borderRadius: '2px', 
        overflow: 'hidden', 
        backgroundColor: '#f0f0f0' }}>
        <div style={{ width: `${Math.min(percent, 100)}%`, backgroundColor: barColor, height: '100%' }}></div>
      </div>

      {/* Плашка */}
      <div style={{ marginTop: '12px', textAlign: 'left' }}>
        <div style={{
          display: 'inline-flex', 
          alignItems: 'center', 
          padding: '2px 10px', 
          borderRadius: '12px', 
          fontSize: '12px', 
          fontWeight: '500',
          backgroundColor: isGood ? '#8fe4d149' : '#e48f8f49',
          color: isGood ? '#00c298' : '#9c000d'
        }}>
          <div style={{ 
            width: '6px', 
            height: '6px', 
            borderRadius: '50%', 
            marginRight: '6px',
            backgroundColor: isGood ? '#00c298' : '#9c000d'
          }}></div>

          {isGood ? (goodText || "норма") : (errorText || "авария")}
        </div>
      </div>

    </Card>
  );
}