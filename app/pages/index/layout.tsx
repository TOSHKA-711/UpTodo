import Footer from '@/app/items/Footer'
import NavBar from '@/app/items/NavBar'
import React from 'react'

export default function layout({children} : {children:React.ReactNode} ) {
  return (
    <div>
        <NavBar/>
      {children}
      <Footer/>
    </div>
  )
}

