import { PiChatTeardropFill, PiPiggyBankFill, PiDatabaseFill } from "react-icons/pi";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { MdLabel } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { BsFillBarChartLineFill } from "react-icons/bs";
import ConsultationsBarChart from "./charts/ConsultationsCharts";
import LegendComponent from "./charts/LegendComponent";
import PastPeriodBarcharts from "./charts/PastPeriodBarcharts";
import OrdersTable from "./OrdersTable";
import Dropdown from "./Dropdown";


const Content = () => {

  const data = [
      { name: 'Mon', value: 28, lineValue: 24, dashedLineValue: 41 },
      { name: 'Tue', value: 28, lineValue: 34, dashedLineValue: 14 },
      { name: 'Wed', value: 32, lineValue: 14, dashedLineValue: 34 },
      { name: 'Thu', value: 54, lineValue: 54, dashedLineValue: 28 },
      { name: 'Fri', value: 32, lineValue: 21, dashedLineValue: 20 },
      { name: 'Sat', value: 37, lineValue: 48, dashedLineValue: 19 },
      { name: 'Sun', value: 37, lineValue: 24, dashedLineValue: 27 },
    ];

  return (
    <main className=' min-h-screen m-8 border-gray-300 border-[1.3px] rounded-3xl'>
      <section className='atAGlance'>
        <div className='my-4 mx-6 py-4 flex justify-between'>
        <h1 className='text-3xl text-wingman-black'>At a glance</h1>
        <Dropdown />
        </div>
        <div className='grid w-full grid-flow-row-dense grid-cols-1 xs:gap-8 lg:mb-0 mt-16 md:mt-8 lg:mt-8 lg:max-w-full lg:grid-cols-3 md:gap-2 lg:gap-8  py-1 px-6'>

          <div className='flex flex-col rounded-3xl border-gray-300 border-[0.82px] shadow-md px-6 py-7 gap-2 bg-white'>
            <h2 className='title font-semibold text-sm text-wingman-lightgray flex items-center gap-3 mb-3'><PiChatTeardropFill />CONSULTATIONS</h2>
            <h3 className="font-medium text-3xl text-wingman-black mb-1">24</h3>
            <span className="flex items-center gap-2 text-md font-light"><span className="flex items-center gap-2 text-wingman-iconGreen "><span className="text-2xl"><FaArrowTrendUp /></span>15%</span>increase</span>
          </div>
          <div className='flex flex-col rounded-3xl border-gray-300 border-[0.82px] shadow-md px-6 py-7 gap-2 bg-white'>
            <h2 className='title font-semibold text-sm text-wingman-lightgray flex items-center gap-3 mb-3'><span className="transform rotate-[-135deg]"><MdLabel /></span>ORDERS PLACED</h2>
            <h3 className="font-medium text-3xl text-wingman-black mb-1">12</h3>
            <span className="flex items-center gap-2 text-md font-light"><span className="flex items-center gap-2 text-wingman-red "><span className="text-2xl"><FaArrowTrendDown /></span>15%</span>decrease</span>
          </div>
          <div className='flex flex-col rounded-3xl border-gray-300 border-[0.82px] shadow-md px-6 py-7 gap-2 bg-white'>
            <h2 className='title font-semibold text-sm text-wingman-lightgray flex items-center gap-3 mb-3'><FaCheck />
            CONVERSION</h2>
            <h3 className="font-medium text-3xl text-wingman-black mb-1">50%</h3>
            <span className="flex items-center gap-2 text-md font-light"><span className="flex items-center gap-2 text-wingman-red "><span className="text-2xl"><FaArrowTrendDown /></span>15%</span>decrease</span>
          </div>

          <div className='flex flex-col rounded-3xl border-gray-300 border-[0.82px] shadow-md px-6 py-7 gap-2 bg-white'>
            <h2 className='title font-semibold text-sm text-wingman-lightgray flex items-center gap-3 mb-3'><PiDatabaseFill />TOTAL SALES VALUE</h2>
            <h3 className="font-medium text-3xl text-wingman-black mb-1">$2,400</h3>
            <span className="flex items-center gap-2 text-md font-light"><span className="flex items-center gap-2 text-wingman-iconGreen "><span className="text-2xl"><FaArrowTrendUp /></span>15%</span>increase</span>
          </div>
          <div className='flex flex-col rounded-3xl border-gray-300 border-[0.82px] shadow-md px-6 py-7 gap-2 bg-white'>
            <h2 className='title font-semibold text-sm text-wingman-lightgray flex items-center gap-3 mb-3'><span ><PiDatabaseFill /></span>AVG ORDER VALUE</h2>
            <h3 className="font-medium text-3xl text-wingman-black mb-1">$240</h3>
            <span className="flex items-center gap-2 text-md font-light"><span className="flex items-center gap-2 text-wingman-iconGreen "><span className="text-2xl"><FaArrowTrendUp /></span>15%</span>increase</span>
          </div>
          <div className='flex flex-col rounded-3xl border-gray-300 border-[0.82px] shadow-md px-6 py-7 gap-2 bg-white'>
            <h2 className='title font-semibold text-sm text-wingman-lightgray flex items-center gap-3 mb-3'><span className="transform rotate-[-135deg]"><PiPiggyBankFill />
            </span>COMMISSION PAID</h2>
            <h3 className="font-medium text-3xl text-wingman-black mb-1">$240</h3>
            <span className="flex items-center gap-2 text-md font-light"><span className="flex items-center gap-2 text-wingman-iconGreen "><span className="text-2xl"><FaArrowTrendUp /></span>15%</span>increase</span>
          </div>
        </div>
      </section>
      <section className='insight my-12'>
      <div className='my-4 mx-6 py-4 flex justify-between'>
        <h1 className='text-3xl text-wingman-black'>Insights</h1>
        </div>
        <div className="grid grid-cols-3 gap-4 lg:grid-cols-[5fr_2fr_2fr] mx-6 mb-6">
          <div className="bg-white py-8 rounded-3xl  border-gray-300 border-[0.82px] shadow-md px-6">
          <h2 className='title font-semibold text-sm text-wingman-lightgray flex items-center gap-3 mb-8'><PiChatTeardropFill />CONSULTATIONS</h2>
          <ConsultationsBarChart data={data} height={300} barColor="#fff3c8" />
          <div className='mt-6 border-b-[0.82px] border-b-gray-600'></div>
          <div className="flex gap-16 pt-8">
            <LegendComponent color="#8A94A6" label="Incoming" />
            <LegendComponent color="#15B79F" label="Answered" />
            <LegendComponent color="#FFF3C6" label="Experts online" />
          </div>
          </div>
          <div className="bg-white py-8 rounded-3xl border-gray-300 border-[0.82px] shadow-md px-4">
          <h2 className='title font-semibold text-sm text-wingman-lightgray flex items-center gap-3 mb-10'><BsFillBarChartLineFill />VS PAST PERIOD</h2>
          <div style={{ width: '100%', height: '330px' }}>
          <PastPeriodBarcharts />
          <div className='border-b-[0.82px] border-b-gray-600 mt-6 mb-5'></div>
          <div className="flex gap-2 pt-3">
            <LegendComponent color="#8A94A6" label="Consultations" />
            <LegendComponent color="#15B79F" label="Orders closed" />
          </div>
          </div>
          </div>
          <div 
            className="relative px-6 py-8 rounded-3xl border-gray-300 border-[0.82px] shadow-md overflow-hidden"    
            style={{ 
              background: `
                radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0) 50%),
                radial-gradient(circle at 80% 80%, rgba(14, 147, 130, 0.8) 0%, rgba(14, 147, 130, 0) 50%),
                radial-gradient(circle at 50% 50%, rgba(21, 183, 159, 1) 0%, rgba(14, 147, 130, 1) 100%)
              `,
              color: 'white'
            }}
        >
            <h2 className='title font-semibold text-sm flex items-center gap-3 mb-3'>
                <PiChatTeardropFill />FORECASTS
            </h2>
            <span className="flex items-center gap-12 mt-10 mb-6">
                <h3 className="font-medium text-5xl">+15%</h3> 
                <span className="font-thin text-2xl pb-4"><FaArrowTrendUp /></span>
            </span>
            <span className="font-extralight">
                forecasted increase in your sales closed by the end of the current month
            </span>
            <span className="flex items-center gap-12 mt-12 mb-6">
                <h3 className="font-medium text-5xl">+20%</h3> 
                <span className="font-thin text-2xl pb-4"><FaArrowTrendUp /></span>
            </span>
            <span className="font-extralight">
                forecasted increase in consultations by the end of the current month
            </span>
        </div>
        </div>
      </section>
    <section className='insight my-12'>
      <div className='my-4 mx-6 py-4 flex justify-between'>
        <h1 className='text-3xl text-wingman-black'>Orders</h1>
        </div>
        <div className="grid grid-cols-1 gap-4 mx-6 mb-6">
          <div className="bg-white rounded-lg border-gray-300 border-[1.5px]">
            <OrdersTable />
          </div>
      
        </div>
      </section>
    </main>
  )
}

export default Content