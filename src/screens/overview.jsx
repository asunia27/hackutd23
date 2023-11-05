import Button from '@mui/joy/Button';
import TransactionTable from '../components/transaction-table';
import { useNavigate } from 'react-router-dom';
import './overview.css'

const OverviewSC = () => {
    const navigate = useNavigate();

    function handleBtn(e) {
        e.preventDefault()
        navigate('/new');
    }

    return (
        <>
            <div className='cover sticky'>
                <Button onClick={handleBtn} style={{marginTop: '10rem'}} >New Item</Button>
            </div>
            <div className='mt-5'>
                <TransactionTable/>
            </div>
        </>
    )
}

export default OverviewSC