import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'

const Services = () => {

  const serviceData =[
    {
      title : 'Advertising',
      description : 'we turn your ideas into reality. Our team of experts will work closely with you to create a customized advertising strategy that meets your unique needs and goals.',
      icon:  assets.ads_icon
    },
     {
      title : 'content marketing',
      description : 'we help you create and distribute valuable, relevant, and consistent content to attract and retain a clearly defined audience — and, ultimately, to drive profitable customer action.',
      icon:  assets.marketing_icon
    },

     {
      title : 'content writing',
      description : 'we provide high-quality content writing services that are tailored to your specific needs. Our team of experienced writers will work closely with you to create engaging and informative content that resonates with your target audience.',
      icon:  assets.content_icon
    },
     {
      title : 'Social media',
      description : 'we help you build and manage your social media presence to connect with your audience and grow your brand.',
      icon:  assets.social_icon
    },
  ]
  return (
    <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <img src={assets.bgImage2} alt=""  className='absolute -top-110 -left-70 -z-1 dark:hidden'/>


      <Title title={'How can we help?'} desc={'We offer a wide range of services to help your business grow and succeed in the digital world.'}/>

<div className='flex flex-col md:grid grid-cols-2'>
 {serviceData.map((service, index) => (
  <ServiceCard key={index} service={service} index={index} />
))}

</div>
    </div>
  )
}

export default Services