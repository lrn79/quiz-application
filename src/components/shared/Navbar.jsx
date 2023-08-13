import { DownOutlined } from "@ant-design/icons";
import { Button, Col, Dropdown, Row, Space } from "antd";
import logo from '../../assets/app-logo.png';
import CustomLink from "./CustomLink";

const Navbar = () => {

    const items = [
        {
            key: '1',
            label: <Button block className="mx-auto">Sign Out</Button>
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
                    <Dropdown
                        menu={{
                            items,
                        }}
                        placement="bottom"
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                <h4 className="font-semibold text-white text-sm sm:text-base">Mohammad Shariful</h4>
                                <DownOutlined className="text-white" />
                            </Space>
                        </a>
                    </Dropdown>
                </Col>
            </Row>
        </nav>
    );
};

export default Navbar;