import React from 'react'
import {Helmet} from "react-helmet";
import './ErrorPage.scss'
import NotMeanBox from '../../components/NotMeanBox';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Error</title>
    </Helmet>
<div className="errorPage">
  <div className="filmBox">
  </div>
  <div className="upBox">
<h1>Oops</h1>
<p>404</p>
<span>Page Not Found</span>
  </div>
<img src="https://assets.stickpng.com/thumbs/5b45cb4fc051e602a568cd12.png" alt="" />
<div class="marquee">
  <div class="marquee__content">
    <ul class="list-inline">
       <li className='firtErrorLi'>Error</li>
       <li className='firtErrorLi'>Error</li>
       <li>Error</li>
       <li>Error</li>
    </ul>
    <ul class="list-inline">
       <li className='firtErrorLi'>Error</li>
       <li className='firtErrorLi'>Error</li>
       <li>Error</li>
       <li>Error</li>
    </ul>
    <ul class="list-inline">
       <li className='firtErrorLi'>Error</li>
       <li className='firtErrorLi'>Error</li>
       <li>Error</li>
       <li>Error</li>
    </ul>
  </div>
</div>
<div class="marquee2">
  <div class="marquee__content">
    <ul class="list-inline">
       <li className='firtErrorLi'>Error</li>
       <li className='firtErrorLi'>Error</li>
       <li>Error</li>
       <li>Error</li>
    </ul>
    <ul class="list-inline">
       <li className='firtErrorLi'>Error</li>
       <li className='firtErrorLi'>Error</li>
       <li>Error</li>
       <li>Error</li>
    </ul>
    <ul class="list-inline">
       <li className='firtErrorLi'>Error</li>
       <li className='firtErrorLi'>Error</li>
       <li>Error</li>
       <li>Error</li>
    </ul>
  </div>
</div>
<div className="backToMovie">   
<Link to={'movies'} className='link'> Back To Movie</Link>
</div>
</div>
  </>
  )
}

export default ErrorPage