import { useEffect } from "react";
import { Button, Divider } from "antd";
import googleIcon from '../../assets/icons/google.png';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from '../../libs/firebase';
import { useLocation, useNavigate } from "react-router-dom";
import Loading from './Loading';



const GoogleAuth = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, navigate, from]);

    if (loading) {
        return <Loading />;
    }


    return (
        <>
            <Divider style={{ margin: 0, marginBottom: '6px' }}>OR</Divider>
            <div className="w-auto flex justify-center mb-2">
                <Button onClick={() => signInWithGoogle()} className="flex justify-center items-center shadow-xs border-[1px] border-gray-200 text-center space-x-2 font-semibold text-sm text-black px-3 py-2" type="link">
                    <img src={googleIcon} alt="google" />
                    <span>Login with Google</span>
                </Button>
            </div>
            {error && <p className="text-error text-sm text-red-500 text-center">{error.message}</p>}
        </>

    );
};

export default GoogleAuth;