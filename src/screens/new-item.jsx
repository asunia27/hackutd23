import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import {useState} from "react";
import ProductCard from './product-card';

function createData(transactionNum, time, numItems, amount, paymentMethod, notes) {
    return {transactionNum, time, numItems, amount, paymentMethod, notes};
}

function addRow() {
    const [tableData, setTableData] = React.useState([]);

}

const NewItemSC = () => {
    return (
        <div>
            <ProductCard productName="Raiden Print" quantity="14" imgSrc="https://static.animecorner.me/2022/10/raiden-shogun.png"/>
        </div>
    )
}

export default NewItemSC