import { DownOutlined } from "@ant-design/icons";
import { Button, Col, Dropdown, Row, Space } from "antd";
import logo from '../../assets/app-logo.png';
import CustomLink from "./CustomLink";
import { signOut } from "firebase/auth";
import { auth } from '../../libs/firebase';
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";


const Navbar = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();


    const items = [
        {
            key: '1',
            label: <Button onClick={() => signOut(auth)} block className="mx-auto">Sign Out</Button>
        }
    ]


    return (
        <nav className="w-full h-auto px-3 py-3 bg-blue-500 text-white sticky top-0 left-0 right-0">
            <Row justify='space-between' align='middle'>
                <Col className="flex justify-center items-center">
                    <img className="inline-block w-8 h-auto" src={logo} alt="logo" />
                    <div className="hidden sm:block">
                        <CustomLink to='/'>Home</CustomLink>
                        <CustomLink to='/test-exam'>Test</CustomLink>
                        <CustomLink to='/exercises'>Exercises</CustomLink>
                        <CustomLink to='/result'>Results</CustomLink>
                    </div>
                </Col>
                <Col>
                    {user ? <Dropdown
                        menu={{
                            items,
                        }}
                        placement="bottom"
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                <h4 className="font-semibold text-white text-sm sm:text-base">{user?.displayName || ''}</h4>
                                <DownOutlined className="text-white" />
                            </Space>
                        </a>
                    </Dropdown>
                        :
                        <Button className="font-semibold text-sm" type="primary" onClick={() => navigate('/sign-in')}>SignIn</Button>}
                </Col>
            </Row>
        </nav>
    );
};

export default Navbar;