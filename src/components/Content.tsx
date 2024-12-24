import { RxCaretDown } from "react-icons/rx";
import { PiChatTeardropFill, PiPiggyBankFill, PiDatabaseFill } from "react-icons/pi";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { MdLabel } from "react-icons/md";
import { FaCheck } from "react-icons/fa";


const Content = () => {
  return (
    <main className=' min-h-screen m-8 border-gray-300 border-[1.3px] rounded-3xl'>
      <section className='atAGlance'>
        <div className='my-4 mx-6 py-4 flex justify-between'>
        <h1 className='text-3xl text-wingman-black'>At a glance</h1>
        <button className="outline outline-gray-300 rounded-lg px-3 text-wingman-black shadow-md"><span className="flex items-center gap-2">7 days <span className="text-2xl"><RxCaretDown /></span></span></button>
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
      <section className='atAGlance my-12'>
        <h1>Insights</h1>
        <div>
          Charts
        </div>
        <div className='grid w-full grid-flow-row-dense grid-cols-1 xs:gap-8 lg:mb-0 mt-16 md:mt-8 lg:mt-8 lg:max-w-full lg:grid-cols-5 md:gap-2 lg:gap-6  p-4'>
        <div className='flex flex-col rounded-2xl border-gray-300 border-2 p-4 gap-2'>
            <h2 className='title'>Consultations</h2>
            <h3>24</h3>
            <span>Barchart</span>
          </div>
        <div className='flex flex-col rounded-2xl border-gray-300 border-2 p-4 gap-2'>
            <h2 className='title'>vs Past period</h2>
            <h3>24</h3>
            <span>Barchart</span>
          </div>
        <div className='flex flex-col rounded-2xl bg-green-700 text-white border-gray-300 border-2 p-4 gap-2'>
            <h2 className='title'>Chart 1</h2>
            <h3>24</h3>
            <span>Barchart</span>
          </div>
          </div>
      </section>
      <section className='atAGlance p-4'>
        <h1 className='mb-4'>Orders</h1>
        <div>
          {/* <Table /> */}
          <div className='flex flex-col rounded-lg  text-black border-gray-300 border-2 gap-2 p-4'>
            <h2 className='title'>Table</h2>
            <h3>24</h3>
            <span>Barchart</span>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Content