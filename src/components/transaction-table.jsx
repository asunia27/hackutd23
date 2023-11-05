import React from 'react';
import { TRANSACS } from '../test-data';
import Table from '@mui/joy/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';


function ItemInfo(props) {
    const {item} = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <tr>
                <td onClick={() => setOpen(!open)} style={{cursor: 'pointer'}}>
                    {open ? <FontAwesomeIcon icon={faAngleUp}/> : <FontAwesomeIcon icon={faAngleDown}/>}
                </td>
                <td></td>
                <td>{item.id}</td>
                <td>{item.time}</td>
                <td>{item.numItems}</td>
                <td>${item.price}</td>
                <td>{item.method}</td>
                <td>{item.notes}</td>
            </tr>
            <tr>
                {open && (
                    <td style={{ height: 0, padding: 0 }} colSpan={3}>  
                        <Table>
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {item.details.map((dtl) => (
                                    <tr>
                                        <th>{dtl.category}</th>
                                        <th>{dtl.product}</th>
                                        <th>{dtl.quantity}</th>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </td>
                )}
            </tr> 
        </React.Fragment>
    )
}


export default function TransactionTable() {
    return (
        <React.Fragment>
            <Table sx={{ '& tr > *:not(:first-child)': { textAlign: 'left' } }}>
                <thead>
                    <tr>
                        <th style={{width: '3rem'}} />
                        <th style={{width: '3rem'}} />
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
                        <ItemInfo item={t} />
                    ))}
                </tbody>
            </Table>
            
        </React.Fragment>
    )
}