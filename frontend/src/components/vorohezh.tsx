import { Card, Flex } from 'antd';
import { KpiCard } from './KpiCard'; 

export function VoronezhHeader() {
  return (
    <div style={{ marginBottom: '24px' }}>
      
      {/*  плашка с каналом  */}
      <div style={{ 
        backgroundColor: '#fdfdfd', 
        borderRadius: '12px', 
        padding: '12px 24px', 
        marginBottom: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div style={{ textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#00c298', fontSize: '12px' }}>●</span>
            <span style={{ fontWeight: 'bold', fontSize: '15px' }}>Канал ViPNet · ПП → Центральный аппарат</span>
          </div>
          <div style={{ fontSize: '13px', color: '#8c9baa', marginTop: '4px' }}>
            Туннель активен · координатор ЦА-01 · шифрование ГОСТ
          </div>
        </div>

        <Flex gap="large" style={{ textAlign: 'right' }}>
          <div>
            <div style={{ fontSize: '13px', color: '#8c9baa' }}>RTT</div>
            <div style={{ fontSize: '15px', color: '#00c298', fontWeight: 'bold' }}>28 мс</div>
          </div>
          <div>
            <div style={{ fontSize: '13px', color: '#8c9baa' }}>Потери пакетов</div>
            <div style={{ fontSize: '15px', color: '#00c298', fontWeight: 'bold' }}>0,1 %</div>
          </div>
          <div>
            <div style={{ fontSize: '13px', color: '#8c9baa' }}>Полоса</div>
            <div style={{ fontSize: '15px', fontWeight: 'bold' }}>14 / 200 Мбит/с</div>
          </div>
          <div>
            <div style={{ fontSize: '13px', color: '#8c9baa' }}>Передано за сутки</div>
            <div style={{ fontSize: '15px', fontWeight: 'bold' }}>1,6 ГБ</div>
          </div>
          <div>
            <div style={{ fontSize: '13px', color: '#8c9baa' }}>Последняя синхронизация</div>
            <div style={{ fontSize: '15px', fontWeight: 'bold' }}>12:41:07</div>
          </div>
        </Flex>
      </div>

      {/*  карточки через KpiCard */}
      <Flex gap="middle" wrap="nowrap">
        
        <div style={{ flex: 1 }}>
          <KpiCard 
            title="Видеокамеры" 
            mainValue={24} 
            subValue="из 26 онлайн" 
            percent={92} 
            errorText="2 камеры недоступны" 
          />
        </div>

        <div style={{ flex: 1 }}>
          <KpiCard 
            title="Серверы и СХД" 
            mainValue={3} 
            subValue="из 3 в норме" 
            percent={100} 
            goodText="Все службы работают" 
          />
        </div>

        <div style={{ flex: 1 }}>
          <KpiCard 
            title="Архив видеонаблюдения" 
            mainValue={27} 
            subValue="суток глубина · 68 % ёмкости" 
            percent={90} 
            goodText="Норматив: 30 суток" 
          />
        </div>

        <div style={{ flex: 1 }}>
          <KpiCard 
            title="Каналы связи" 
            mainValue={1} 
            subValue="основной + резервный" 
            percent={100} 
            goodText="Резерв в горячем режиме" 
          />
        </div>
        
      </Flex>

    </div>
  );
}