import { Outlet } from 'react-router-dom'
import MainLayout from './layout/MainLayout'

function App() {
  return (
    <>
      <MainLayout>
        <div className="">
          <Outlet />
        </div>
      </MainLayout>
    </>
  )
}

export default App
