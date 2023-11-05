import Button from "@mui/joy/Button";
import ProductCard from '../components/product-card';
import { PRODUCTS } from '../test-data';
import { Typography } from "@mui/joy";
import Divider from "@mui/joy/Divider";
import './new-item.css';
import { useNavigate } from 'react-router-dom';


import { Sheet } from "@mui/joy";
import {useState} from "react";


{/*
function createData(transactionNum, time, numItems, amount, paymentMethod, notes) {
    return {transactionNum, time, numItems, amount, paymentMethod, notes};
}


function addRow() {
    const [tableData, setTableData] = React.useState([]);

}
*/}

const NewItemSC = () => {
    const navigate = useNavigate();

    function handleBack(e) {
        e.preventDefault()
        navigate('/');
    }

    return (
        <>
            <div className="sidebar sticky-side">
                <Typography level="h1" sx={{py:3}}>Items</Typography>
                <Divider/>
                <div style={{height: '66%', marginBottom: '2rem'}}>

                </div>
                <Divider/>
                <Button onClick={handleBack} className='btn-style' style={{borderRadius: '30px', fontSize: '1.5rem', marginTop: '2rem'}}>Done</Button>

            </div>

            <div className="d-flex flex-column align-items-start">
                <Typography level="h1" sx={{py:3}}>Add Items</Typography>
            
                <div className="d-flex col-9">
                    <div className='d-flex row'>
                        {PRODUCTS.map((p) => (
                            <div className="d-flex col-4 gy-2">
                                <ProductCard productName={p.productName} quantity={p.quantity} imgSrc={p.imgSrc} ></ProductCard>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default NewItemSC