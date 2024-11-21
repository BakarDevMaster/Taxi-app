import React from 'react'
import RideHailingHero from '../Components/RideHailingComponents/Ride-HailingHero/Ride-HailingHero'
import BusinessScale from '../Components/RideHailingComponents/BusinessScale/BusinessScale'
import ConsultationImage from '../Components/RideHailingComponents/ConsultationImage/ConsultationImage'
import SetApart from '../Components/RideHailingComponents/SetApart/SetApart'
import RidePlan from '../Components/RideHailingComponents/RidePlan/RidePlan'
import RideTestimonials from '../Components/RideHailingComponents/RideTestimonials/RideTestimonials'
import CaseStudies from '../Components/RideHailingComponents/CaseStudies/CaseStudies'
import DreamImage from '../Components/RideHailingComponents/DreamImage/DreamImage'

const page = () => {
  return (
    <div>
        <div >
            <RideHailingHero/>
        </div>
        <div >
            <BusinessScale/>
        </div>
        <div >
            <ConsultationImage/>
        </div>
        <div >
            <SetApart/>
        </div>
        <div >
            <RidePlan/>
        </div>
        <div >
            <RideTestimonials/>
        </div>
        <div >
            <CaseStudies/>
        </div>
        <div >
            <DreamImage/>
        </div>
    </div>
  )
}

export default page