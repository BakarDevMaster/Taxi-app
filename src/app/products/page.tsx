import React from 'react'
import WhiteLabel from '../Components/ProductsComponents/WhiteLabel/Whitelabel'
import AppImage from '../Components/ProductsComponents/AppImage/AppImage'
import DriverImage from '../Components/ProductsComponents/DriverImage/DriverImage'
import CompanyManagementSystem from '../Components/ProductsComponents/CompanyManagement/CompanyManagement'

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
    </div>
  )
}

export default page
