import { Button } from "antd";
import googleIcon from '../../assets/icons/google.png';


const GoogleAuth = () => {
    return (
        <div className="w-auto flex justify-center mb-2">
            <Button className="flex justify-center items-center shadow-xs border-[1px] border-gray-200 text-center space-x-2 font-semibold text-sm text-black px-3 py-2" type="link">
                <img src={googleIcon} alt="google" />
                <span>Login with Google</span>
            </Button>
        </div>
    );
};

export default GoogleAuth;