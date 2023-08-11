import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        <>
            <p>Navbar</p>
            <Outlet />
            <p>Footer</p>
        </>
    );
};

export default RootLayout;