import {useState} from "react";
import ProductCard from '../components/product-card';
import { PRODUCTS } from '../test-data';
import { Typography } from "@mui/joy";

{/*
function createData(transactionNum, time, numItems, amount, paymentMethod, notes) {
    return {transactionNum, time, numItems, amount, paymentMethod, notes};
}


function addRow() {
    const [tableData, setTableData] = React.useState([]);

}
*/}

const NewItemSC = () => {
    return (
        <>
            <Typography level="h1" sx={{py:3}}>Add Items to Order</Typography>

            <div className="d-flex">
                <div className="d-flex col-9">
                    <div className='d-flex row'>
                        {PRODUCTS.map((p) => (
                            <div className="d-flex col-4 gy-2">
                                <ProductCard productName={p.productName} quantity={p.quantity} imgSrc={p.imgSrc} ></ProductCard>
                            </div>
                        ))}
                    </div>
                </div>

                <div className = "d-flex col-3">
                    <Typography>meow</Typography>

                </div>
            </div>
        </>
    )
}

export default NewItemSC