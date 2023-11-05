import React from 'react';
import { TRANSACS } from '../test-data';
import Table from '@mui/joy/Table';


function ItemInfo(props) {
    const item = props;

    return (
        <React.Fragment>
            <tbody>
                <tr>
                    <th>{item.category}</th>
                    <th>{item.product}</th>
                    <th>{item.quantity}</th>
                </tr>
            </tbody>
        </React.Fragment>
    )
}


export default function TransactionTable() {
    return (
        <React.Fragment>
            <Table>
                <thead>
                    <tr>
                        <th>Transaction No.</th>
                        <th>Time</th>
                        <th># of Items</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>Other Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {TRANSACS.map((t) => (
                        <React.Fragment>
                            <tr>
                            <td>{t.id}</td>
                            <td>{t.time}</td>
                            <td>{t.numItems}</td>
                            <td>{t.price}</td>
                            <td>{t.method}</td>
                            <td>{t.notes}</td>
                            </tr>
                            <tr>
                                <td colSpan={3}>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>Category</th>
                                                <th>Product</th>
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        {t.details.map((dtl) => (
                                            <ItemInfo category={dtl.category} product={dtl.product} quantity={dtl.quantity} />
                                        ))}
                                    </Table>
                                </td>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </Table>
            
        </React.Fragment>
    )
}