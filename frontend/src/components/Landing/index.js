import React from 'react'
import { Navbar } from '../Navbar'
import { Getstart } from '../Getstart'
import { Unlock } from '../Unlock'
import { Ourcourses } from '../Ourcourses'
import { Aboutus } from '../Aboutus'
import { Testimonials } from '../Testimonials'
import { Vibrant } from '../Vibrant'
import { Ourpackages } from '../Ourpackages'
import { Ourmentors } from '../Ourmentors'
import { Drawer } from '../Drawer'
import { Faqs } from '../Faqs'

export const Landing = () => {

  return (
<>
<Drawer/>
<Navbar/>

<Getstart/>
<Unlock/>
<Ourcourses/>
<Aboutus/>
<Testimonials/>
<Vibrant/>
<Ourpackages/>
<Ourmentors/>
<Faqs/>

    </>
  )
}
