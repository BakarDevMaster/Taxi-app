import React from 'react'
import WhiteLabel from '../Components/ProductsComponents/WhiteLabel/Whitelabel'
import AppImage from '../Components/ProductsComponents/AppImage/AppImage'
import DriverImage from '../Components/ProductsComponents/DriverImage/DriverImage'
import CompanyManagementSystem from '../Components/ProductsComponents/CompanyManagement/CompanyManagement'
import Operatorapp from '../Components/ProductsComponents/Operatorapp/Operatorapp'
import WebAppImge from '../Components/ProductsComponents/Webapp/Webapp'
import Client from '../Components/ProductsComponents/Client/Client'
import Explore from '../Components/ProductsComponents/explore/Explore'
import DispatchSystem from '../Components/ProductsComponents/Dispatch/DispatchSystem'
import WebBooking from '../Components/ProductsComponents/WebBooking/WebBooking'

const page = () => {
  return (
    <div>
      <div>
      <WhiteLabel/>
      </div>
      <div className='mt-6'>
       <AppImage/>
      </div>
      <div className='mt-6'>
       <DriverImage/>
      </div>
      <div className='mt-16'>
       <CompanyManagementSystem/>
      </div>
      <div className='mt-16'>
       <DispatchSystem/>
      </div>
      <div className='mt-16'>
       <WebBooking/>
      </div>
      <div className='mt-6'>
       <Operatorapp/>
      </div>
      <div className='mt-6'>
       <WebAppImge/>
      </div>
      <div className=''>
       <Explore/>
      </div>
      <div className='mt-6'>
       <Client/>
      </div>
    </div>
  )
}

export default page
