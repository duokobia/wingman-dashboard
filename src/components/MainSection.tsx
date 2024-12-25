import Content from './Content'
import Header from './Header'

const MainSection = () => {
  return (
    <div className='bg-gray-100 text-gray-500 flex flex-col max-w-full overflow-x-hidden'>
      <Header />
      <Content />
    </div>
  )
}

export default MainSection