import { Radio, Space } from "antd";
import { useState } from "react";

const SolutionPage = () => {
    const allQuiz = {
        blockName: 'Address',
        quizList: [
            {
                question: "what's your name?",
                questionList: ['shariful', 'mehedi', 'hasan', 'abir'],
                correct: 'shariful',
                selectedAnswer: 'shariful',
                imageUrl: null

            },
            {
                question: "tell me your name?",
                questionList: ['arif', 'mizan', 'hasan', 'santo'],
                correct: 'arif',
                selectedAnswer: 'mizan',
                imageUrl: null

            },
            {
                question: "Do you know about my self",
                questionList: ['nope', 'yes', 'no', 'none'],
                correct: 'yes',
                selectedAnswer: 'nope',
                imageUrl: null

            }
        ]
    }

    const [myQuiz, setMyQuiz] = useState(allQuiz)


    return (
        <section className="w-full flex justify-center items-center mt-20">
            <div className="w-full sm:w-[700px] px-4">
                {myQuiz.quizList.map((quiz, index) =>
                    <div key={index} className='w-full flex justify-between items-center flex-col-reverse sm:flex-row gap-4 mb-4  p-5 rounded-md shadow-sm bg-white'>
                        <div className='w-full'>
                            <h4 className='font-normal text-base mb-1'> {index + 1}) {myQuiz.quizList[index].question}</h4>
                            <Radio.Group value={myQuiz.quizList[index].correct}>
                                <Space direction="vertical">
                                    {myQuiz.quizList[index].questionList.map((item, childIndex) =>
                                        <Radio key={childIndex} value={item}>{item}</Radio>)}
                                </Space>
                            </Radio.Group>
                            {quiz.selectedAnswer && quiz.correct !== quiz.selectedAnswer && <div className="mt-3 text-sm">
                                <p className="bg-red-200 inline-block rounded-sm px-2 py-1 font-semibold">you have selected 👉 <span className="text-red-600">{quiz.selectedAnswer}</span> .correct answer is <span className="text-green-600">✅ {quiz.correct}</span></p>
                            </div>
                            }
                        </div>
                        {
                            myQuiz.quizList[index].imageUrl &&
                            <img className='w-40 sm:w-48 h-auto inline-block' src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000" alt="logo" />
                        }
                    </div>
                )}
            </div>
        </section >
    );
};

export default SolutionPage;