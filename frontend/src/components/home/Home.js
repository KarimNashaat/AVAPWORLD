import React from 'react'
import EnrollBtn from '../enrollBtn/EnrollBtn'
import './Home.css'

const Home = () => {
    const description = (
        <div className='d-flex flex-column p-3'>
            <div className='heading-title'>
                {/* <h1> */}
                Learn programing and get your dream job with salary 5 to 30 lpa
                <span>
                    Full stack development bootcamp
                </span>
            </div>
            <div className='d-flex align-items-start'>
                <img src="/asserts/images/right-mark.png" style={{height:"20px"}}/>
                <p className='heading-title-p ms-3'>
                    100% job placement support.
                </p>
            </div>
            <div className='d-flex align-items-start'>
                <img src="/asserts/images/right-mark.png" style={{height:"20px"}}/>
                <p className='heading-title-p ms-3'>
                Unlimited Mock interviews.
                </p>
            </div>
            <div className='d-flex align-items-start'>
                <img src="/asserts/images/right-mark.png" style={{height:"20px"}}/>
                <p className='heading-title-p ms-3'>
                300+ assignments.
                </p>
            </div>
            <EnrollBtn />
        </div>
    )
    return (
        <div className='container-fluid p-5'>
            <div className='row'>
                <div className='col-md-6 col-sm-12'>
                    {description}
                </div>
                <div className='col-md-6 .d-sm-none .d-md-block'>
                    <img className='p-5 img-fluid' src="/asserts/images/e-learning.jpg" />
                </div>
            </div>
        </div>
    )
}
export default Home