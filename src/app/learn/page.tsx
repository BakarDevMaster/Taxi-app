import React from 'react'
import LearnHero from '../Components/LearnComponents/LearnHero/LearnHero'
import { div } from 'framer-motion/client'
import LearnMaterials from '../Components/LearnComponents/LearnMaterials/LearnMaterials'

const page = () => {
  return (
    <div>
<div>
        <LearnHero/>
    </div>
    <div>
        <LearnMaterials/>
    </div>
    </div>
    
  )
}

export default page