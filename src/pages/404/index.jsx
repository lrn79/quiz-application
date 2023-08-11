import { Button } from 'antd';
import { Link } from 'react-router-dom';

const NotFound = () => {

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div>
                <Button type='primary'>
                    <Link replace to='/'>Back To Home</Link>
                </Button>
            </div>
        </div>
    );
};

export default NotFound;