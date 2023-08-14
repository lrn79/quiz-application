import { useEffect, useState } from "react";
import { Button, Checkbox, Col, Row, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleAuth } from "../../components/shared";
import ForgetPasswordModal from "./ForgetPasswordModal";
import { loginUser } from '../../redux/features/user/userSlice';

import logo from '../../assets/logo.jpg';


const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [modalOpen, setModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const { user, isLoading } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const navigate = useNavigate();


    useEffect(() => {
        if (user.email && !isLoading) {
            navigate('/');
        }
    }, [user?.email]);


    const loginUserHandler = (data) => {
        console.log(data);
        dispatch(loginUser({ email: data.email, password: data.password }));
    };












    const forgetPasswordResetHandler = async () => {
        messageApi.success({
            type: 'success',
            content: 'Email sent',
            duration: 1.5,
        });

        new Promise(() => {
            setTimeout(() => {
                setModalOpen(false);
            }, 1500);
        })

    }




    return (
        <section className="w-full h-[70vh] sm:h-screen flex justify-center items-center">
            <div className="w-full sm:w-[400px] bg-white p-5 rounded-md mx-4 shadow-sm">
                <img className="w-12" src={logo} alt="Logo" />
                <h4 className="text-base font-semibold sm:text-lg mb-3">Login</h4>
                <form onSubmit={handleSubmit(loginUserHandler)}>
                    <input className="block w-full px-2 py-2 focus:outline-none rounded-[4px] mb-3 border-0 bg-gray-100 placeholder-gray-500" type="email" placeholder="Email"
                        {...register('email', { required: 'Email is required' })}
                    />
                    {errors?.email && <p>{errors?.email?.message}</p>}

                    <input className="block w-full px-2 py-2 focus:outline-none rounded-[4px] mb-3 border-0 bg-gray-100 placeholder-gray-500" type="password" placeholder="Password"
                        {...register('password', { required: 'Password is required' })}
                    />
                    {errors?.password && <p>{errors?.password?.message}</p>}

                    <Button className="font-semibold" block type="primary" htmlType="submit">Sign In</Button>
                </form>
                <Row className="my-4 font-semibold" justify="space-between" align='middle'>
                    <Col span={12}> <Checkbox>Remember Me</Checkbox></Col>
                    <Col flex='none' span={12}>
                        <Button onClick={() => setModalOpen(true)} className="text-black font-semibold" type="link">Forgot password?</Button>
                    </Col>
                </Row>
                <GoogleAuth />
                <Button block type="link" className="cursor-default text-black" ><span className="text-black">Don't have an account? </span> <Link replace to='/sign-up'>Sign Up !</Link></Button>
            </div>
            <ForgetPasswordModal openModal={modalOpen} resetHandler={forgetPasswordResetHandler} resetCancel={() => setModalOpen(false)} />
            {contextHolder}
        </section>
    );
};

export default SignIn;