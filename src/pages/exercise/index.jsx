import { Row, Col, Button } from "antd";

const Exercises = () => {
    const startExercisesList = [
        {
            name: 'BLOCK 1 | Address',
            question: 'A total of 34 questions.',
            reuiredInfo: 'You must answer at least 23 questions correctly.'
        },
        {
            name: 'BLOCK 1 | Pictures',
            question: 'A total of 4 questions.',
            reuiredInfo: 'You must answer at least 4 questions correctly.'
        },
        {
            name: 'BLOCK 1 | Routes',
            question: '35 minutes. A total of 15 questions.',
            reuiredInfo: 'You must answer at least 10 questions correctly.'
        },
    ]
    return (
        <section>
            <div>
                {startExercisesList.map((quiz, index) => (
                    <Row key={index}>
                        <Col flex='auto' className="bg-white px-6 py-4 my-4">
                            <h2>{quiz.name}</h2>
                            <p>{quiz.question}</p>
                            <p>{quiz.reuiredInfo}</p>
                            <Button>Begin</Button>
                        </Col>
                    </Row>
                ))}
            </div>
        </section>
    );
};

export default Exercises;