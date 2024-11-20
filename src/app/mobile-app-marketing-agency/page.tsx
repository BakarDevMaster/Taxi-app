import React from 'react'
import AppTreatmentSection from '../Components/AgencyComponents/AppTreatmentSection/AppTreatmentSection'
import MarketingTrustSection from '../Components/AgencyComponents/MarketingSection/MarketingSection'
import BrickImage from '../Components/AgencyComponents/BrickImage/BrickImage'
import ASOMarketingSection from '../Components/AgencyComponents/ASOMarketingSection/ASOMarketingSection'
import GrowthStats from '../Components/AgencyComponents/GrowthStats/GrowthStats'
import ExpertsSection from '../Components/AgencyComponents/ExpertsSection/ExpertsSection'
import BigIdeas from '../Components/AgencyComponents/Bigideas/Bigideas'
import MarketingCTA from '../Components/AgencyComponents/MarketingCTA/MarketingCTA'

const page = () => {
  return (
    <div>
        <div>
            <AppTreatmentSection/>
        </div>
        <div className='mt-2'>
            <MarketingTrustSection/>
        </div>
        <div className='mt-6'>
            <BrickImage/>
        </div>
        <div className='mt-6'>
            <ASOMarketingSection/>
        </div>
        <div className='mt-6'>
            <GrowthStats/>
        </div>
        <div className='mt-6'>
            <ExpertsSection/>
        </div>
        <div className='mt-6'>
            <BigIdeas/>
        </div>
        <div className='mt-6'>
            <MarketingCTA/>
        </div>
    </div>
  )
}

export default page