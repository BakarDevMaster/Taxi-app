import React from 'react'
import BannerStudie from '../Components/CaseStudieComponents/BannerCase/BannerCase'
import Countries from '../Components/CaseStudieComponents/Countries/Countries'
import Navigationmenus from '../Components/CaseStudieComponents/Navigationmenus/NavigationMenus'
import CaseCompanies from '../Components/CaseStudieComponents/CaseCompanies/CaseCompnies'

const page = () => {
  return (
    <div>
        <div>
            <BannerStudie/>
        </div>
        <div>
            <Navigationmenus/>
        </div>
        <div>
            <Countries/>
        </div>
        <div>
            <CaseCompanies/>
        </div>
        
    </div>
  )
}

export default page