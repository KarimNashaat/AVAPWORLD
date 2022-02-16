import { Carousel } from 'antd'
import React from 'react'

const Curriculum = () => {
    const contentStyle = {
        minHeight: '200px',
        color: 'white !important',
        // lineHeight: '160px', 
        textAlign: 'center',
        background: '#00ACEE',
        padding: '36px'
    };
    return (
        // <div id='curriculum' className='container p-5'>
        //     <div className='row d-flex justify-content-center'>
        //         <div className='col-12 justify-content-center d-flex'>
        //             <h2> Curriculum </h2>
        //         </div>
        //     </div>
        //     <div className='row my-3 justify-content-around'>
        //         <div className="card text-black p-0 m-3" style={{ width: "18rem" }}>
        //             <img src="/asserts/images/frontend-dev.jpeg" className="card-img-top" alt="..." />
        //             <div className="card-body">
        //                 <h5 className="card-title">Front-end Development</h5>
        //                 <p className="card-text">Get a deeper understanding of Client Side Programming or in other words the front
        //                     end development by developing highly responsive web pages across languages</p>
        //             </div>
        //         </div>
        //         <div className="card text-black p-0 m-3" style={{ width: "18rem" }}>
        //             <img src="/asserts/images/backend-dev.png" className="card-img-top" alt="..." style={{ height: "160px" }}/>
        //             <div className="card-body">
        //                 <h5 className="card-title">Back-end Development</h5>
        //                 <p className="card-text">Learn the industry leading ways to design back end development with least response
        //                     time which in turn fast helps loading web applications & how to connect with
        //                     Databases. </p>
        //             </div>
        //         </div>
        //         <div className="card text-black p-0 m-3" style={{ width: "18rem" }}>
        //             <img src="/asserts/images/ds-algh.jpg" className="card-img-top" alt="..." style={{ height: "160px" }}/>

        //         </div>
        //     </div>
        // </div>
        <div id='curriculum' className='container p-5'>
            <div className='row d-flex justify-content-center mb-5'>
                <div className='col-12 justify-content-center d-flex '>
                    <div className='seven w-50'>
                        <h1 > Our Syllabus </h1>
                    </div>
                    {/* <h2 style={{color:"#002766"}}> Our Syllabus </h2> */}
                </div>
            </div>
            <Carousel autoplay>
                <div>
                    <div style={contentStyle} className='text-white'>
                        <h1 className="card-title text-white" >Front-end Development</h1>
                        Get a deeper understanding of Client Side Programming or in other words the front
                        end development by developing highly responsive web pages across languages
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>
                        <h1 className="card-title text-white">Back-end Development</h1>
                        <p className='text-white'>Get a deeper understanding of Client Side Programming or in other words the front
                            end development by developing highly responsive web pages across languages</p>
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>
                        <h1 className="card-title text-white">Data Structures And Algorithm </h1>
                        <p className='text-white'>Learn Data Structures and Algorithms write Efficient, Robust, Optimized code. Learn
                            how to build robust & scalable web servers with a thorough understanding of AWS.</p>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default Curriculum