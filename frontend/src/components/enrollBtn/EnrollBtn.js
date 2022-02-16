import React from 'react'
import './EnrollBtn.css'

const EnrollBtn = () => {
    return (
        <>
            <button className="animated-button1 mt-5" style={{ color: "white" }}
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '#contact';
                }}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Enroll
            </button>
        </>
    )
}

export default EnrollBtn