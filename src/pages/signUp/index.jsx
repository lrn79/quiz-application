import { Button, Col, Row } from "antd";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from '@ant-design/icons';

import { GoogleAuth } from "../../components/shared";

const SignUp = () => {
    return (
        <section className="w-full h-[70vh] sm:h-screen flex justify-center items-center">
            <div className="w-full sm:w-[400px] bg-white p-5 rounded-md mx-4 shadow-sm">
                <Row align='middle' gutter={4}>
                    <Col>
                        <img src="" alt="Logo" />
                    </Col>
                    <Col>
                        <h3>Logo</h3>
                    </Col>
                </Row>
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
                <form className="mb-3">
                    <Row justify='space-between' align='middle' gutter={16}>
                        <Col span={12}>
                            <input className="block w-full px-2 py-2 focus:outline-none rounded-[4px] mb-3 border-0 bg-gray-100 placeholder-gray-500" type="text" placeholder="First Name" />
                        </Col>
                        <Col span={12}>
                            <input className="block w-full px-2 py-2 focus:outline-none rounded-[4px] mb-3 border-0 bg-gray-100 placeholder-gray-500" type="text" placeholder="Last Name" />
                        </Col>
                    </Row>
                    <input className="block w-full px-2 py-2 focus:outline-none rounded-[4px] mb-3 border-0 bg-gray-100 placeholder-gray-500" type="email" placeholder="Email" />
                    <input className="block w-full px-2 py-2 focus:outline-none rounded-[4px] mb-3 border-0 bg-gray-100 placeholder-gray-500" type="password" placeholder="Password" />

                    <input className="block w-full px-2 py-2 focus:outline-none rounded-[4px] mb-3 border-0 bg-gray-100 placeholder-gray-500" type="password" placeholder="Confirm Password" />

                    <Button className="font-semibold" block type="primary" htmlType="submit">Sign Up</Button>

                    <p className="text-sm font-normal mt-2 text-center sm:text-justify">By signing up I agree to the <Link to='/'>Privacy Policy</Link> and <Link to='/'>Terms of Service</Link>.</p>
                </form>
                <GoogleAuth />
            </div>
        </section>
    );
};

export default SignUp;