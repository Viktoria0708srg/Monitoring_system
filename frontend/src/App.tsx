import { Flex, Card } from 'antd'; 
import { AvailabilityChart } from './components/chart'; 
import { ActiveIncidents } from './components/active';
import { BranchTable } from './components/branches'; 
import { DataCenterStats } from './components/kzod';
import { KpiCard } from './components/KpiCard';
import { ProblemPoints } from './components/problemPoints'; 

const chartData = [
  { time: '00:00', type: 'Камеры', value: 99.8 }, 
  { time: '07:00', type: 'Камеры', value: 95.5 },
  { time: '12:00', type: 'Камеры', value: 98.5 }, 
  { time: '20:00', type: 'Камеры', value: 99.3 },

  { time: '00:00', type: 'Серверы', value: 93.9 }, 
  { time: '07:00', type: 'Серверы', value: 99.8 }, 
  { time: '12:00', type: 'Серверы', value: 99.9 }, 
  { time: '20:00', type: 'Серверы', value: 98.9 },

  { time: '00:00', type: 'ViPNet', value: 98.6 }, 
  { time: '07:00', type: 'ViPNet', value: 91.4 },
  { time: '12:00', type: 'ViPNet', value: 97.0 }, 
  { time: '20:00', type: 'ViPNet', value: 98.0 },
];

//активные инциденты
const incidentsData = [
  { id: 1, title: 'МАПП Нехотеевка', desc: 'Потеря связи с видеосервером № 2', time: '12 мин', type: 'error', details: '8 камер недоступны' },
  { id: 2, title: 'ЖДПП Валуйки', desc: 'Канал ViPNet не поднялся после перезагрузки', time: '41 мин', type: 'warning', details: 'нет данных 41 мин' },
  { id: 3, title: 'ВПП Воронеж (Чертовицкое)', desc: 'Заполнение архива 92 %', time: '1 ч', type: 'warning', details: 'глубина архива 11 сут' },
];

//филиалы
const branchesData = [
  { key: '1', name: 'Белгородский', pp: '17 / 18', cams: '412 / 431', servers: '38', rtt: '28 мс', index: 72, status: 'warn' },
  { key: '2', name: 'Владивостокский', pp: '31 / 40', cams: '688 / 702', servers: '61', rtt: '41 мс', index: 88, status: 'ok' },
  { key: '3', name: 'Крымский', pp: '9 / 11', cams: '214 / 240', servers: '22', rtt: '63 мс', index: 54, status: 'error' },
  { key: '4', name: 'Мурманский', pp: '14 / 17', cams: '301 / 305', servers: '29', rtt: '33 мс', index: 91, status: 'ok' },
  { key: '5', name: 'Ростовский', pp: '19 / 21', cams: '301 / 305', servers: '29', rtt: '30 мс', index: 61, status: 'warn' },
];


function App() {
  return (
    <div style={{ padding: '24px', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      
      <Flex gap="middle" wrap="nowrap" style={{ marginBottom: '24px' }}>

        <div style={{flex: 1}}>
          <KpiCard 
          title="Пункты пропуска на связи" 
          mainValue={341} 
          subValue="из 363" 
          percent={94} 
          errorText="22 без связи" />
        </div>

        <div style={{ flex: 1}}>
          <KpiCard 
          title="Видеокамеры" 
          mainValue={4812} 
          subValue="из 4999" 
          percent={96} 
          errorText="187 офлайн" />
        </div>

        <div style={{ flex: 1 }}>
          <KpiCard 
          title="Серверы на ПП" 
          mainValue={726} 
          subValue="в норме из 742" 
          percent={98} 
          errorText="12 предупреждений" />
        </div>

        <div style={{ flex: 1 }}>
          <KpiCard 
          title="КЦОД — доступность" 
          mainValue="99,97%" 
          subValue="за 30 дней" 
          percent={99} 
          goodText="норма" />
        </div>

        <div style={{ flex: 1 }}>
          <KpiCard 
          title="Каналы ViPNet" 
          mainValue={358} 
          subValue="туннелей активно" 
          percent={98} 
          errorText="5 нестабильных" />
        </div>
      </Flex>

{/*-----------------------------*/}

      <Flex gap="middle" wrap="nowrap" style={{ marginBottom: '24px' }}>
        <div style={{ flex: 2 }}>
          <AvailabilityChart 
            title="Доступность инфраструктуры за 24 часа"
            subtitle="Доля устройств на связи, %"
            data={chartData} />
        </div>

        <div style={{ flex: 1 }}>
          <ActiveIncidents 
            title="Активные инциденты"
            totalText="9 открытых"
            incidents={incidentsData} />
        </div>
      </Flex>

  {/*------------------------------*/}
      <Flex gap="middle" wrap="nowrap" style={{ marginBottom: '24px' }}>
        <div style={{ flex: 2, minWidth: 0 }}><BranchTable data={branchesData} /></div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <DataCenterStats 
            clusterLoad={62} 
            clusterNodes="12 из 18 узлов"
            storageLoad={78} 
            storageSize="312 ТБ из 400 ТБ"
            temperature="27,4" 
            tempStatus="warn"
            availability="34 / 34" 
            ups="42 мин · заряд 100 %" 
            humidity="44 %"/>
        </div>

      </Flex>

{/*-----------------------------------*/}
      <Flex gap="middle" wrap="nowrap">
        <div style={{ flex: 1 }}>
          <ProblemPoints 
            data={[
              {name:'МАПП Нехотеевка', count: 24},
              {name: 'ЖДПП Валуйки', count: 18} ,
              {name: 'ДАПП Колотиловка', count: 13},
              {name: 'МАПП Шебекино', count: 11},
              {name: 'ЖДПП Головчино', count: 8},
              {name: 'МАПП Ровеньки', count: 6},
            ]} />
        </div>

        <div style={{ flex: 1 }}>
          <Card title="Инциденты за 14 дней" style={{ borderRadius: "12px", height: '100%' }} />
        </div>

        <div style={{ flex: 1 }}>
          <Card title="Парк оборудования" style={{ borderRadius: "12px", height: '100%' }} />
        </div>
      </Flex>

    </div>
  );
}

export default App;