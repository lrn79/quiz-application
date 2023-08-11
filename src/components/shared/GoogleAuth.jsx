import { Button } from "antd";


const GoogleAuth = () => {
    return (
        <div className="text-center mb-2">
            <Button className="shadow-xs border-[1px] border-gray-200 text-center space-x-2 font-semibold text-sm text-black inline-block" type="link">
                <img src="" alt="google" />
                <span>Login with Google</span>
            </Button>
        </div>
    );
};

export default GoogleAuth;