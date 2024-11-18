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
import HubServices from '../Components/FeaturesComponents/HubServices/HubServices'
import HubBTN from '../Components/FeaturesComponents/HubBTN/HubBTN'
import WebApp from '../Components/FeaturesComponents/WebApp/WebApp'
import WebAppService from '../Components/FeaturesComponents/WebAppService/WebAppService'
import WebAppBTN from '../Components/FeaturesComponents/WebAppBTN/WebAppBTN'
import BusinessVerticals from '../Components/FeaturesComponents/BusinessVertical/BusinessVertical'
import BusinessServices from '../Components/FeaturesComponents/BusinessServices/BusinessServices'
import BusinessBTN from '../Components/FeaturesComponents/BusinessBTN/BusinessBTN'
import MigrationHeader from '../Components/FeaturesComponents/MigrationHeader/MigrationHeader'
import ChallengeImage from '../Components/FeaturesComponents/ChallengeImage/ChallegeImage'
import TourPlateform from '../Components/FeaturesComponents/TourPlateform/TourPlateform'


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
      <div className='mt-4'>
      <HubServices/>
      </div>
      <div className='mt-10'>
      <HubBTN/>
      </div>
      <div className='mt-10'>
      <WebApp/>
      </div>
      <div className='mt-4'>
      <WebAppService/>
      </div>
      <div className='mt-10'>
      <WebAppBTN/>
      </div>
      <div className='mt-10'>
      <BusinessVerticals/>
      </div>
      <div className='mt-4'>
      <BusinessServices/>
      </div>
      <div className='mt-10'>
      <BusinessBTN/>
      </div>
      <div className='mt-10'>
      <MigrationHeader/>
      </div>
      <div className='mt-10'>
      <ChallengeImage/>
      </div>
      <div className='mt-10'>
      <TourPlateform/>
      </div>
    
    </div>
  )
}

export default page
