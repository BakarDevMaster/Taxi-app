import React from 'react'
import WhiteLabel from '../Components/ProductsComponents/WhiteLabel/Whitelabel'
import AppImage from '../Components/ProductsComponents/AppImage/AppImage'
import DriverImage from '../Components/ProductsComponents/DriverImage/DriverImage'
import CompanyManagementSystem from '../Components/ProductsComponents/CompanyManagement/CompanyManagement'
import Operatorapp from '../Components/ProductsComponents/Operatorapp/Operatorapp'
import WebAppImge from '../Components/ProductsComponents/Webapp/Webapp'
import Client from '../Components/ProductsComponents/Client/Client'

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
      <div className='mt-6'>
       <CompanyManagementSystem/>
      </div>
      <div className='mt-6'>
       <Operatorapp/>
      </div>
      <div className='mt-6'>
       <WebAppImge/>
      </div>
      <div className='mt-6'>
       <Client/>
      </div>
    </div>
  )
}

export default page
