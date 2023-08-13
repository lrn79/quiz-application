import { Button, Checkbox, Tree } from 'antd';
import logo from '../../assets/logo.jpg';



const TestExam = () => {
    return (
        <section className="w-full flex justify-center items-center mt-20">
            <div className="w-full sm:w-[700px] bg-white p-5 rounded-md mx-4 shadow-sm">
                <div className='flex justify-end mb-2'>
                    <img className='w-10' src={logo} alt="logo" />
                </div>
                <div>
                    {false &&
                        <div className='text-center'>
                            <h1 className='text-base sm:text-[20px] font-semibold'>Welcome to the taxi driver sample test</h1>
                            <p className='my-2 text-sm sm:text-base'>
                                We wish you all the best for the Union Taxi School exam.
                                By clicking "START TEST" you accept the above conditions.
                            </p>
                            <Checkbox className='text-base' onChange={() => ''}>with exam instructions</Checkbox>
                        </div>
                    }
                    {false &&
                        <div className='text-center'>
                            <h1 className='text-base sm:text-[20px] font-semibold'>PROCEDURE OF THE EDP PRELIMINARY TEST:</h1>
                            <Checkbox className='text-base my-2' onChange={() => ''}>BLOCK 1: LOCAL KNOWLEDGE (addresses + pictures + routes)</Checkbox>
                            <Checkbox className='text-base' onChange={() => ''}>BLOCK 2: ALL LEGAL SUBJECTS
                                (company regulations, tariff,
                                road traffic regulations,
                                motor vehicle law, labor law)</Checkbox>
                        </div>
                    }

                    {false &&
                        <div className='flex justify-between flex-col sm:flex-row items-center  sm:items-start gap-4 text-center'>
                            <div className='w-1/2'>
                                <img className='w-24 sm:w-36' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYPRAbTxfmdV_jIUYxjbtjz1iv8gqDsv4Jsg&usqp=CAU" alt="exam-image" />
                                <p className='text-center font-semibold'>Economic Chamber Vienna
                                    4th, dhaka 14,
                                    ground floor / examination room</p>
                            </div>
                            <div className='w-1/2'>
                                <h1 className='text-base sm:text-[20px] font-semibold'>EXAMINATION ROOM</h1>
                                <img className='w-24 sm:w-36' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYPRAbTxfmdV_jIUYxjbtjz1iv8gqDsv4Jsg&usqp=CAU" alt="exam-image" />
                            </div>
                        </div>
                    }
                    {false &&
                        <div className=''>
                            <h1 className='text-base sm:text-[20px] font-semibold text-center mb-2'>REGISTRATION:</h1>
                            <p className='text-base font-normal'>Documents for a first-time exam registration:
                            </p>
                            <ul className='pl-8 my-4'>
                                <li>course attendance confirmation</li>
                                <li>Completed application form + a passport photo</li>
                                <li>Payment receipt for the examination fee (€ 172.30)</li>
                            </ul>
                            <p className='text-base font-normal'>ATTENTION: Max. 20 candidates per appointment!
                            </p>
                        </div>
                    }
                    {false &&
                        <div className=''>
                            <h1 className='text-base sm:text-[20px] font-semibold text-center mb-2'>EXAMINATION PROCEDURE:</h1>
                            <div className='flex justify-between flex-col sm:flex-row mb-2 text-base text-base'>
                                <span>Duration of the exam:</span>
                                <span>approx. 1 hour (Block 1 + Block 2)</span>
                            </div>
                            <div className='flex justify-between flex-col sm:flex-row mb-2 text-base text-base'>
                                <span>Learning material:</span>
                                <span>Questionnaire (issue 8/2018)</span>
                            </div>
                            <div className='flex justify-between flex-col sm:flex-row mb-2 text-base text-base'>
                                <span>Exam Questions:</span>
                                <span>a total of around 100 questions
                                    from all subject areas</span>
                            </div>
                        </div>
                    }
                    {false &&
                        <div className=''>
                            <h1 className='text-base sm:text-[20px] font-semibold text-center mb-2'>EXAMINATION PROCEDURE:</h1>
                            <div className='flex justify-between flex-col sm:flex-row mb-2 text-base'>
                                <span>Examination result
                                    + new date:</span>
                                <span>will be announced after the
                                    exam</span>
                            </div>
                            <div className='flex justify-between flex-col sm:flex-row mb-2 text-base'>
                                <span>Evaluation:</span>
                                <span>The exam is passed with
                                    66% correct answers</span>
                            </div>
                        </div>
                    }
                    {false &&
                        <div className=''>
                            <h1 className='text-base sm:text-[20px] font-semibold text-center mb-2'>EXAM INSTRUCTION</h1>
                            <div className='flex justify-between flex-col sm:flex-row  text-base gap-4'>
                                <div className='w-full sm:w-1/2'>
                                    <h5 className='text-base font-semibold mb-3'>The candidate registers
                                        with the examination
                                        board and receives a
                                        personal code.</h5>
                                    <p className='font-normal'>Name : Mohammad Shariful</p>
                                    <p className='font-normal'>Your code : <span className='font-bold'>C9A538</span></p>
                                </div>
                                <div className='w-full sm:w-1/2'>
                                    <h5 className='text-base font-semibold mb-3'>Here the candidate has to type in his code at the beginning of the exam.A brief exam briefing follows.</h5>
                                    <div className='w-full  bg-[#f8f8f8] p-4 flex justify-center items-center h-[100px] rounded-sm'>
                                        <input className="block w-full px-2 py-2 focus:outline-none rounded-[4px] border-0" type="text" placeholder="please enter your code" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {false &&
                        <div className=''>
                            <h1 className='text-base sm:text-[20px] font-semibold text-center mb-2'>EXAM INSTRUCTION</h1>
                            <p className='font-normal'>Dear candidate!</p>
                            <p className='font-normal'>We wish you all the best for the computer pre-examination. We are allowed
                                to point out that you have to work alone and without tools, otherwise
                                the exam will be canceled and not graded!
                                Mobile phones, teaching materials such as books or worksheets etc. may not
                                be used.</p>
                            <p className='font-normal'>By clicking "I accept" you accept the above terms.</p>
                            <div className='text-end'>
                                <Button type='primary'>I accept</Button>
                            </div>
                        </div>
                    }
                    {true &&
                        <div className=''>
                            <h1 className='text-base sm:text-[20px] font-semibold text-center mb-2'>EXAM INSTRUCTION</h1>
                            <p className='font-normal'>You can see the time progress at the top right. When the time has elapsed, the test will
                                end automatically. The questions submitted up to this point will be
                                used for the assessment.</p>
                            <p className='font-normal my-3'>You must answer all questions, but you cannot jump any questions and you
                                cannot edit questions that have already been answered.</p>
                            <p className='font-normal'>By clicking "Start Test" you accept the above conditions
                                and the test will start.</p>
                            <div className='text-end'>
                                <Button type='primary'>Start Test</Button>
                            </div>
                        </div>
                    }

                </div>
                <div className='text-end'>
                    <Button type='primary'>Next</Button>
                </div>
            </div>
        </section>
    );
};

export default TestExam;