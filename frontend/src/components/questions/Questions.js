import React from 'react'

const Questions = () => {
    return (
        <div className='d-flex flex-column p-5 align-items-center'>
            <div className='seven w-50'>
                <h1 > Frequently Asked Questions </h1>
            </div>
            <div className='d-flex flex-column w-75 justify-content-center p-5 align-self-center' >
                <div>
                    <p>
                        <a class="btn btn-light px-5 py-3 accordion-button collapsed text-black border shadow" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <h4>
                                Who is eligible for this full stack developer course?
                            </h4>
                        </a>
                    </p>
                    <div class="collapse my-3" id="collapseExample">
                        <div class="card card-body text-black question-answer">
                            <ul>
                                <li>
                                    The only eligibility criteria that we have for the Avapworld_ed Full Stack
                                    Development class is for the student to be learning oriented individual and is seeking
                                    opportunities to upskill for faster career growth.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <p>
                        <a class="btn btn-light px-5 py-3 accordion-button collapsed text-black border shadow" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                            <h4>
                                I’m from a non-engineering background or New to programming. Am I eligible for this course?
                            </h4>
                        </a>
                    </p>
                    <div class="collapse my-3" id="collapseExample2">
                        <div class="card card-body text-black question-answer">
                            <ul>
                                <li>
                                    With the objective of creating as many job opportunities for our students, we do
                                    intend to help every student who is willing to “make the extra catching up needed” in
                                    terms of programming & Development logic.
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div>
                    <p>
                        <a class="btn btn-light px-5 py-3 accordion-button collapsed text-black border shadow" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3">
                            <h4>
                                What is meant by Full Stack Development Course?
                            </h4>
                        </a>
                    </p>
                    <div class="collapse" id="collapseExample3">
                        <div class="card card-body text-black question-answer">
                            <ul>
                                <li>
                                    Full Stack Course breaks down the fundamentals of each technology that you would
                                    require to become a Full Stack Developer. The entire course is broken down into five
                                    separate segments: Frontend, Backend, Database, Other Essential Technologies
                                    and Debugging/Version Control.
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions