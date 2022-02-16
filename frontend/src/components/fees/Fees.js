import { Button, Card } from 'antd'
import React from 'react'
import { DownloadOutlined } from '@ant-design/icons';

const Fees = () => {
    return (
        <div id='curriculum' className='container p-5'>
            <div className='row d-flex justify-content-center mb-5'>
                <div className='col-12 justify-content-center d-flex'>
                    <div className='seven w-50'>
                        <h1 > Fees Structure </h1>
                    </div>
                </div>
            </div>
            <Card style={{ width: "100%" }} className='shadow rounded'>
                <div className='d-flex flex-wrap justify-content-between'>
                    <div className='ms-5 mt-4'>
                        <p className="fw-bold" style={{ fontSize: "150%", maxWidth:"400px" }}>Our fees plan follows an Income Sharing Agreement (ISA) model through which
                            remaining fees is paid after getting a job. Total fees is capped and remains same even if
                            you get a very high package.</p>
                        <div className='d-flex align-items-start'>
                            <img src="asserts/images/right-mark.png" style={{ height: "20px" }} />
                            <p className='fw-bold ms-2'>{" "}Before course 10000+GST</p>
                        </div>
                        <div className='d-flex align-items-start'>
                            <img src="asserts/images/right-mark.png" style={{ height: "20px" }} />
                            <p className='fw-bold ms-2'>After placement 40000+GST.</p>
                        </div>
                        <Button type="primary" icon={<DownloadOutlined />} className='download-btn my-3 d-flex align-items-center' size='large'>
                            Download Our Brochure
                        </Button>
                    </div>
                    <img src="/asserts/images/agreement.jpg" className="w-50" />
                </div>
            </Card>
        </div>
    )
}

export default Fees 