import { Button, Col, Row } from "antd";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ArrowRightOutlined } from '@ant-design/icons';
import { GoogleAuth } from "../../components/shared";
import logo from '../../assets/logo.jpg';
import { createUser } from '../../redux/features/user/userSlice';

const SignUp = () => {
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm();



    const createNewUserHandler = (data) => {
        console.log(data);
        dispatch(createUser({ email: data.email, password: data.password }));
    };



    return (
        <section className="w-full h-[70vh] sm:h-screen flex justify-center items-center">
            <div className="w-full sm:w-[400px] bg-white p-5 rounded-md mx-4 shadow-sm">
                <img className="w-12" src={logo} alt="Logo" />
                <Row justify="space-between" align='middle'>
                    <Col>
                        <h4 className="text-base font-semibold sm:text-lg mb-3">Sign Up</h4>
                    </Col>
                    <Col>
                        <Button type="link" className="space-x-2 text-black">
                            <Link to='/sign-in'>I have an account</Link>
                            <ArrowRightOutlined />
                        </Button>
                    </Col>
                </Row>
                <form onSubmit={handleSubmit(createNewUserHandler)} className="mb-3">
                    <Row justify='space-between' align='middle' gutter={16}>
                        <Col span={12}>
                            <input className="block w-full px-2 py-2 focus:outline-none rounded-[4px] mb-3 border-0 bg-gray-100 placeholder-gray-500" type="text" placeholder="First Name" />
                        </Col>
                        <Col span={12}>
                            <input className="block w-full px-2 py-2 focus:outline-none rounded-[4px] mb-3 border-0 bg-gray-100 placeholder-gray-500" type="text" placeholder="Last Name" />
                        </Col>
                    </Row>
                    <input className="block w-full px-2 py-2 focus:outline-none rounded-[4px] mb-3 border-0 bg-gray-100 placeholder-gray-500" type="email" placeholder="Email"
                        {...register('email', { required: 'Email is required' })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}

                    <input className="block w-full px-2 py-2 focus:outline-none rounded-[4px] mb-3 border-0 bg-gray-100 placeholder-gray-500" type="password" placeholder="Password"
                        {...register('password', { required: 'Password is required' })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}

                    <input className="block w-full px-2 py-2 focus:outline-none rounded-[4px] mb-3 border-0 bg-gray-100 placeholder-gray-500" type="password" placeholder="Confirm Password"

                    />


                    <Button className="font-semibold" block type="primary" htmlType="submit">Sign Up</Button>

                    <p className="text-sm font-normal mt-2 text-center sm:text-justify">By signing up I agree to the <Link to='/'>Privacy Policy</Link> and <Link to='/'>Terms of Service</Link>.</p>
                </form>
                <GoogleAuth />
            </div>
        </section>
    );
};

export default SignUp;