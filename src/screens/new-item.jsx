import Sheet from '@mui/joy/Sheet';
import {useState} from "react";
import ProductCard from '../components/product-card';
import Grid from '@mui/joy/Grid';
import { PRODUCTS } from '../test-data';


function createData(transactionNum, time, numItems, amount, paymentMethod, notes) {
    return {transactionNum, time, numItems, amount, paymentMethod, notes};
}

function addRow() {
    const [tableData, setTableData] = React.useState([]);

}

const NewItemSC = () => {
    return (
        <div className='' style={{width: '50vw'}}>
            <div className='d-flex row'>
                {PRODUCTS.map((p) => (
                    <div className="d-flex col-4">
                        <ProductCard productName={p.productName} quantity={p.quantity} imgSrc={p.imgSrc} ></ProductCard>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default NewItemSC