import { DownOutlined } from "@ant-design/icons";
import { Button, Col, Dropdown, Row, Space } from "antd";
import logo from '../../assets/logo.jpg'
import CustomLink from "./CustomLink";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [screenSize, setScreenSize] = useState(768);

    const screenSizeHandler = (e) => {
        setScreenSize(e.target.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', screenSizeHandler);
        return () => window.removeEventListener('resize', screenSizeHandler);
    }, [])

    const items = [
        {
            key: '1',
            label: <Button block className="mx-auto">Sign Out</Button>
        }
    ]


    return (
        <nav className="w-full h-auto px-3 py-3 bg-blue-400 text-white">
            <Row justify='space-between' align='middle'>
                <Col className="flex justify-center items-center">
                    <img className="inline-block w-8 h-auto" src={logo} alt="logo" />
                    {screenSize > 768 && <div>
                        <CustomLink to='/'>Test</CustomLink>
                        <CustomLink to='/exercise'>Exercises</CustomLink>
                        <CustomLink to='/result'>Results</CustomLink>
                    </div>}
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