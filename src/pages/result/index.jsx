import React, { useRef } from 'react';
import { Button, Space, Table } from 'antd';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Link } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../libs/firebase';



const columns = [
    {
        title: 'Surname',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Result',
        dataIndex: 'age',
        key: 'age',
        render: () => (<Button className='cursor-default' type='primary'>Passed</Button>),
    },


    {
        title: 'Action',
        key: 'action',
        render: () => (
            <Space size="middle">
                <p>75%</p>
                <Button type='link'><Link to='/result/3'>Details</Link></Button>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
    },
];

const Result = () => {
    const pdfRef = useRef();
    const downloadPdf = () => {
        const input = pdfRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 30;
            pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('q-result.pdf')
        })
    }
    const [user] = useAuthState(auth);
    return (
        <div className='w-ful mt-20' ref={pdfRef}>
            <div className='bg-white mx-4 rounded-sm'>
                <h1 className='text-sm sm:text-base text-start py-3 ml-4 text-blue-500'>Result by {user?.displayName || ''}</h1>
                <Table columns={columns} dataSource={data} />
            </div>
            <button className='mx-80' onClick={downloadPdf}>Downdolad</button>
        </div>
    );
};

export default Result;

