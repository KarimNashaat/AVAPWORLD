import React from 'react'

const Services = () => {
    return (
        <div id='services' className='container p-5'>
            <div className='row d-flex justify-content-center'>
                <div className='col-12 justify-content-center d-flex'>
                    <div className='seven w-50'>
                        <h1 > Services </h1>
                    </div>
                </div>
            </div>
            <div className='row my-3 justify-content-around'>
                <div className="card text-black p-0 m-3 shadow" style={{ width: "18rem" }}>
                    <div className='d-flex justify-content-center'>
                        <img src="/asserts/images/coding.png" className="card-img-top w-25 mt-4" alt="..." style={{}} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-center">Live, Interactive Classes </h5>
                        <p className="card-text">Daily live classes, taught by experienced, highly qualified working professionals. Classes are scheduled in the late evening hours to meet the needs of everyone. </p>
                    </div>
                </div>
                <div className="card text-black p-0 m-3 shadow" style={{ width: "18rem" }}>
                    <div className='d-flex justify-content-center'>
                        <img src="/asserts/images/coding.png" className="card-img-top w-25 mt-4" alt="..." style={{}} />
                    </div>
                    <div className="card-body pb-3">
                        <h5 className="card-title text-center">Coding Practice </h5>
                        <p className="card-text">We strongly believe in learning by doing. Go through a structured, rigorous problem solving doily, with live mentor support & daily solution sessions. </p>
                    </div>
                </div>
                <div className="card text-black p-0 m-3 shadow" style={{ width: "18rem" }}>
                    <div className='d-flex justify-content-center'>
                        <img src="/asserts/images/coding.png" className="card-img-top w-25 mt-4" alt="..." style={{}} />
                    </div>
                    <div className="card-body">
                        <h5 className="card- text-center">Mentoring  </h5>
                        <p className="card-text">Stuck while solving tough coding challenges? We got you covered. Our highly qualified team of mentors will unblock you right away and correct your coding approach. </p>
                    </div>
                </div>
                <div className="card text-black p-0 m-3 shadow" style={{ width: "18rem" }}>
                    <div className='d-flex justify-content-center'>
                        <img src="/asserts/images/coding.png" className="card-img-top w-25 mt-4" alt="..." style={{}} />
                    </div>
                    <div className="card-body pb-5">
                        <h5 className="card-title text-center">Real World Projects & Code reviews </h5>
                        <p className="card-text">Strengthen your resume and get industry ready by working on real life full stack projects under the guidance of industry mentors who will review your codes to suggest best industry coding practices. </p>
                    </div>
                </div>
                <div className="card text-black p-0 m-3 shadow" style={{ width: "18rem" }}>
                    <div className='d-flex justify-content-center'>
                        <img src="/asserts/images/coding.png" className="card-img-top w-25 mt-4" alt="..." style={{}} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-center">Career Coaching & Mock Interviews </h5>
                        <p className="card-text">Interact with industry mentors, who will guide you personally in 1:1 sessions. Regular mock interviews will help you become interview ready. </p>
                    </div>
                </div>
                <div className="card text-black p-0 m-3 shadow" style={{ width: "18rem" }}>
                    <div className='d-flex justify-content-center'>
                        <img src="/asserts/images/coding.png" className="card-img-top w-25 mt-4" alt="..." style={{}} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-center">Placement Accountability.  </h5>
                        <p className="card-text">We take personal responsibility to help you land your dream job by providing world class career services -dedicated Placement team, hiring partners, referrals, mock interviews, soft skills and many more. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services