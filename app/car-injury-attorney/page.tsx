import CarInjury from '@/components/service/car-injury-attorney/CarInjury'
import ContactSection from '@/components/service/car-injury-attorney/ContactSection'
import LeftSide from '@/components/service/car-injury-attorney/LeftSide'
import RightSidebar from '@/components/service/car-injury-attorney/RightSidebar'
import UninsuredClaimSection from '@/components/service/car-injury-attorney/UninsuredClaimSection'
import React from 'react'

const page = () => {
  return (
    <div>
        <div className="max-w-6xl mx-auto px-8 flex flex-col lg:flex-row gap-12">
            <LeftSide />
            <RightSidebar />
            
        </div>
        <ContactSection />
        
    </div>
  )
}

export default page