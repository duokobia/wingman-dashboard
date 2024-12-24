import React from 'react'

const Content = () => {
  return (
    <main className=' min-h-screen m-8  border-gray-300 border-2 rounded-2xl'>
      <section className='atAGlance'>
        <div className='m-4 flex justify-between'>
        <h1>At a glance</h1>
        <button>7 days</button>
        </div>
        <div className='grid w-full grid-flow-row-dense grid-cols-1 xs:gap-8 lg:mb-0 mt-16 md:mt-8 lg:mt-8 lg:max-w-full lg:grid-cols-3 md:gap-2 lg:gap-6  p-4'>
          <div className='flex flex-col rounded-2xl border-gray-300 border-2 p-4 gap-2'>
            <h2 className='title'>Cards</h2>
            <h3>24</h3>
            <span>15% Increase</span>
          </div>
          <div className='flex flex-col rounded-2xl border-gray-300 border-2 p-4 gap-2'>
            <h2 className='title'>Cards</h2>
            <h3>24</h3>
            <span>15% Increase</span>
          </div>
          <div className='flex flex-col rounded-2xl border-gray-300 border-2 p-4 gap-2'>
            <h2 className='title'>Cards</h2>
            <h3>24</h3>
            <span>15% Increase</span>
          </div>
          <div className='flex flex-col rounded-2xl border-gray-300 border-2 p-4 gap-2'>
            <h2 className='title'>Cards</h2>
            <h3>24</h3>
            <span>15% Increase</span>
          </div>
          <div className='flex flex-col rounded-2xl border-gray-300 border-2 p-4 gap-2'>
            <h2 className='title'>Cards</h2>
            <h3>24</h3>
            <span>15% Increase</span>
          </div>
          <div className='flex flex-col rounded-2xl border-gray-300 border-2 p-4 gap-2'>
            <h2 className='title'>Cards</h2>
            <h3>24</h3>
            <span>15% Increase</span>
          </div>
          <div className='flex flex-col rounded-2xl border-gray-300 border-2 p-4 gap-2'>
            <h2 className='title'>Cards</h2>
            <h3>24</h3>
            <span>15% Increase</span>
          </div>
          <div className='flex flex-col rounded-2xl border-gray-300 border-2 p-4 gap-2'>
            <h2 className='title'>Cards</h2>
            <h3>24</h3>
            <span>15% Increase</span>
          </div>
          <div className='flex flex-col rounded-2xl border-gray-300 border-2 p-4 gap-2'>
            <h2 className='title'>Cards</h2>
            <h3>24</h3>
            <span>15% Increase</span>
          </div>

        </div>
      </section>
      <section className='atAGlance'>
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