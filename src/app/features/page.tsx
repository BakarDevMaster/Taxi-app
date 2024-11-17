import React from 'react'
import Hero from '../Components/FeaturesComponents/Hero/Hero'
import Customer from '../Components/FeaturesComponents/Customer/Customer'
import FeatureSection from '../Components/FeaturesComponents/Feature/Feature'
import Passengers from '../Components/FeaturesComponents/Passengers/Passengers'
import CTAButton from '../Components/FeaturesComponents/ButtonCustomer/Customerbutton'
import LoyalDrivers from '../Components/FeaturesComponents/LoyalDrivers/LoyalDrivers'
import TexiServices from '../Components/FeaturesComponents/TexiService/TexiService'
import Performance from '../Components/FeaturesComponents/Performance/Performance'
import Attract from '../Components/FeaturesComponents/Attract/Attract'
import DriverBTN from '../Components/FeaturesComponents/DriverBTN/DriverBTN'
import Operator from '../Components/FeaturesComponents/Operator/Operator'
import OnePlace from '../Components/FeaturesComponents/OnePlace/OnePlace'
import OperatorBTN from '../Components/FeaturesComponents/OperatorBTN/OperatorBTN'
import MyHub from '../Components/FeaturesComponents/MyHub/MYHub'

const page = () => {
  return (
    <div>
      <Hero/>
      <div className='mt-10'>
      <Customer/>
      </div>
      <div className='mt-10'>
      <FeatureSection/>
      </div>
      <div className='mt-4'>
      <Passengers/>
      </div>
      <div className='mt-4'>
      <CTAButton/>
      </div>
      <div className='mt-10'>
      <LoyalDrivers/>
      </div>
      <div className='mt-10'>
      <TexiServices/>
      </div>
      <div className='mt-10'>
      <Performance/>
      </div>
      <div className='mt-10'>
      <Attract/>
      </div>
      <div className='mt-4'>
      <DriverBTN/>
      </div>
      <div className='mt-10'>
      <Operator/>
      </div>
      <div className='mt-10'>
      <OnePlace/>
      </div>
      <div className='mt-4'>
      <OperatorBTN/>
      </div>
      <div className='mt-4'>
      <MyHub/>
      </div>
    
    </div>
  )
}

export default page
