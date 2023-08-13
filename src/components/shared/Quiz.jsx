import { Button, Progress, Radio, Space } from 'antd';
import logo from '../../assets/logo.jpg';



const Quiz = () => {
    return (
        <>
            <div className='flex justify-between items-center mb-2'>
                <h3 className='text-base sm:text-lg font-semibold'>Address</h3>
                <img className='w-10' src={logo} alt="logo" />
            </div>
            <Progress showInfo={false} percent={0} status="active" />
            <form >
                <div className='flex justify-between items-start flex-col-reverse sm:flex-row gap-2'>
                    <div>
                        <h4 className='font-normal text-base mb-1'>1. Where is the office building for the 18th district?</h4>
                        <Radio.Group onChange={() => ''} value={2}>
                            <Space direction="vertical">
                                <Radio value={1}>Option A</Radio>
                                <Radio value={2}>Option B</Radio>
                                <Radio value={3}>Option C</Radio>
                                <Radio value={4}>Option D</Radio>
                            </Space>
                        </Radio.Group>
                    </div>
                    <h2 className='bg-blue-500 text-base text-white px-3 py-1 rounded-md shadow-sm w-16  font-semibold '>18:46</h2>
                </div>
                <div className='text-end'>
                    <Button type='primary'>Next</Button>
                </div>
            </form>
        </>
    );
};

export default Quiz;