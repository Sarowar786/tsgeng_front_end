import About from '@/components/home/About'
import Banner from '@/components/home/Banner'
import CTASection from '@/components/home/CTASection'
import LatestArticles from '@/components/home/LatestArticles'
import ServiceSection from '@/components/home/ServiceSection'
import Testimonial from '@/components/home/Testimonial'
import React from 'react'

export default function HomePage() {
  return (
    <div>
      <Banner/>
      <About/>
      <ServiceSection/>
      <Testimonial/>
      <LatestArticles/>
      <CTASection/>
    </div>
  )
}
