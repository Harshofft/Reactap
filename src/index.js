import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './view/app/App';
import Home from './view/hello/home';
import Navs from './component/navbar/nav';
import Imgss from './wallpaperflare.com_wallpaper (3).jpg'
const root = ReactDOM.createRoot(document.getElementById('root'));
const Hey = window.location.pathname ;
if (Hey === '/'){
  root.render(<>
  <Navs/>
  <div className='center'>
 <h1>home</h1>
    <img src={Imgss} alt="hii" className='helloimg' />
    </div>
  </>
);
}
else if (Hey === '/app') {
    root.render(
      <App />
    );
}
else if (Hey === '/home') {
  root.render(
    <Home />
  );
  
}
else {
  root.render(
    <h1>404</h1>
  );
}
