import React from 'react'
import Navs from '../../component/navbar/nav'
import Imgs from  './wallpaperflare.com_wallpaper (2).jpg'
import './home.css'
function home() {
  return ( <>
  <Navs/>
    <div className='center'>
      <h1>hello user page</h1>
    <img src={Imgs} alt="hii" className='helloimg' />
    </div>
    </>
  )
}

export default home