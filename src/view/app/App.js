import React from 'react'
import Navs from '../../component/navbar/nav';
import Imgs from './wallpaperflare.com_wallpaper (1).jpg'
import './app.css'
function App() {
  return (<>
  <Navs/>
    <div className='center'>
      <h1>about</h1>
    <img src={Imgs} alt="hii" className='helloimg' />
    </div>
    </>
  )
}

export default App


