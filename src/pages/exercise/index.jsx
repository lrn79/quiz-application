import { Button } from "antd";
import { useNavigate } from "react-router-dom";


const Exercises = () => {
    const navigate = useNavigate();

    const startExercisesList = [
        {
            label: 'BLOCK 1 | Address',
            question: 'A total of 34 questions.',
            requiredInfo: 'You must answer at least 23 questions correctly.'
        },
        {
            label: 'BLOCK 1 | Pictures',
            question: 'A total of 4 questions.',
            requiredInfo: 'You must answer at least 4 questions correctly.'
        },
        {
            label: 'BLOCK 1 | Routes',
            question: '35 minutes. A total of 15 questions.',
            requiredInfo: 'You must answer at least 10 questions correctly.'
        },
    ]
    return (
        <section className="mt-20 px-4">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                {startExercisesList.map((quiz, index) => (
                    <div key={index}>
                        <div className="flex justify-between items-center bg-white rounded-sm shadow-sm p-4">
                            <div>
                                <h3 className="font-semibold text-lg">{quiz.label}</h3>
                                <h5 className="font-semibold text-base">{quiz.question}</h5>
                                <p className="font-normal">{quiz.requiredInfo}</p>
                            </div>
                            <Button onClick={() => navigate('/exercise/2')} type="primary">Begin</Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Exercises;