import { useState } from 'react';
import { Button, Progress, Radio, Space } from 'antd';
import logo from '../../assets/logo.jpg';



const Quiz = () => {
    const allQuiz = {
        blockName: 'Address',
        quizList: [
            {
                question: "what's your name?",
                questionList: ['shariful', 'mehedi', 'hasan', 'abir'],
                correct: 'shariful',
                selectedAnswer: null,
                imageUrl: null

            },
            {
                question: "tell me your name?",
                questionList: ['arif', 'mizan', 'hasan', 'santo'],
                correct: 'arif',
                selectedAnswer: null,
                imageUrl: null

            },
            {
                question: "Do you know about my self",
                questionList: ['nope', 'yes', 'no', 'none'],
                correct: 'yes',
                selectedAnswer: null,
                imageUrl: null

            }
        ]
    }

    const [myQuiz, setMyQuiz] = useState(allQuiz)
    const [percent, setPercent] = useState(0);
    const [currentQuiz, setCurrentQuiz] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);



    const increase = () => {
        if (!currentQuiz) {
            const percentCalc = parseFloat(100 / myQuiz.quizList.length);
            let newPercent = percent + percentCalc;
            if (newPercent > 100) {
                newPercent = 100;
            }
            setPercent(newPercent);
        }
    };



    const handleQuiz = (correctAns) => {
        increase()
        setCurrentQuiz(correctAns)
        if (myQuiz.quizList[currentIndex].correct === correctAns) {
            setScore(prevState => prevState + 1)
        }

    }


    const nextQuizHandler = () => {
        if (myQuiz.quizList.length === (currentIndex + 1)) {
            console.log('submit');
        } else {
            setCurrentQuiz(null)
            setCurrentIndex(prevState => prevState + 1)
            console.log('next');
        }
    }



    return (
        <>
            <div className='flex justify-between items-center mb-2'>
                <h3 className='text-base sm:text-lg font-semibold'>Address</h3>
                <img className='w-10' src={logo} alt="logo" />
            </div>
            <Progress showInfo={false} percent={percent} status="active" />
            <form >
                <div className='flex justify-between items-start flex-col-reverse sm:flex-row gap-2'>
                    <div className='flex justify-between items-center flex-col-reverse sm:flex-row gap-4 my-8 sm:mt-14'>

                        <div className='w-full'>
                            <h4 className='font-normal text-base mb-1'>{myQuiz.quizList[currentIndex].question}</h4>
                            <Radio.Group onChange={() => handleQuiz(myQuiz.quizList[currentIndex].correct)}>
                                <Space direction="vertical">
                                    {myQuiz.quizList[currentIndex].questionList.map((quiz, index) => <Radio key={index} value={quiz}>{quiz}</Radio>)}
                                </Space>
                            </Radio.Group>
                        </div>
                        {myQuiz.quizList[currentIndex].imageUrl &&
                            <img className='w-40 sm:w-48 h-auto inline-block' src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000" alt="logo" />
                        }
                    </div>
                    <h2 className='bg-blue-500 text-base text-white px-3 py-1 rounded-md shadow-sm w-16  font-semibold '>18:46</h2>
                </div>
                <div className='text-end'>
                    <Button disabled={!currentQuiz} onClick={nextQuizHandler} type='primary'>{myQuiz.quizList.length === (currentIndex + 1) ? 'Submit' : 'Next'}</Button>
                </div>
            </form>
        </>
    );
};

export default Quiz;