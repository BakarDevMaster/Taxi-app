import React from 'react'
import PricingHero from '../Components/PricingComponents/pricingHero/PricingHero'
import PricingHeader from '../Components/PricingComponents/PricingHeader/PricingHeader'
import PricingSection from '../Components/PricingComponents/PricingSection/PricingSection'
import PricingPlaneSection from '../Components/PricingComponents/PricingPlanImage/PricingPlaneImage'
import PricingComparison from '../Components/PricingComponents/PricingComparison/PricingComaprison'
import PricingStates from '../Components/PricingComponents/PricingStates/PricingStates'
import FAQAccordion from '../Components/PricingComponents/FAQAccordion/FAQAccordion'
import TestimonialsSection from '../Components/PricingComponents/TestimonialSection/TestimonialSection'
import TryBeforeBuy from '../Components/PricingComponents/TryBeforeBuy/TryBeforeBuy'

const page = () => {
  return (
    <div>
        <div>
            <PricingHero/>
        </div>
        <div className='mt-4'>
            <PricingHeader/>
        </div>
        <div className='mt-4'>
            <PricingSection/>
        </div>
        <div className='mt-6'>
            <PricingPlaneSection/>
        </div>
        <div className='mt-10'>
            <PricingComparison/>
        </div>
        <div className='mt-10'>
            <PricingStates/>
        </div>
        <div className='mt-10'>
            <FAQAccordion/>
        </div>
        <div className='mt-10'>
            <TestimonialsSection/>
        </div>
        <div className='mt-10'>
            <TryBeforeBuy/>
        </div>
    </div>
  )
}

export default page