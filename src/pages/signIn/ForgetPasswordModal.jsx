import { Button, Modal } from "antd";

// eslint-disable-next-line react/prop-types
const ForgetPasswordModal = ({ openModal = false, resetHandler = () => '', resetCancel = () => false }) => {
    return (
        <div>
            <Modal
                open={openModal}
                onOk={resetHandler}
                onCancel={resetCancel}
                closeIcon={false}
                width={500}
                footer={<div>
                    <Button onClick={resetCancel}>Cancel</Button>
                    <Button type="primary" onClick={resetHandler}>Send Email</Button>
                </div>}
            >
                <div className="text-center">
                    <h2 className="font-semibold text-lg">Reset Your Password</h2>
                    <p>Enter your e-mail address and we will sent a link to reset your password</p>

                    <input className="block w-full px-2 py-2 focus:outline-none rounded-[4px] my-3 border-0 bg-gray-100 placeholder-gray-500" type="email" placeholder="Email" />
                </div>
            </Modal>
        </div>
    );
};

export default ForgetPasswordModal;