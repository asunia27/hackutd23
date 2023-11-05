import Button from '@mui/joy/Button';
import TransactionTable from '../components/transaction-table';
import { AspectRatio } from '@mui/joy';
import Divider from '@mui/joy/Divider';
import Chip from '@mui/joy/Chip';
import { useNavigate } from 'react-router-dom';
import './overview.css'

const OverviewSC = () => {
    const navigate = useNavigate();

    function handleBtn(e) {
        e.preventDefault()
        navigate('/new');
    }

    /*
    <div className='cover sticky'>
                <Button onClick={handleBtn} style={{marginTop: '10rem'}} >New Item</Button>
            </div>
    */

    return (
        <>
            <div className='sticky cover'></div>
            <div className='sticky gradient'>
                <AspectRatio minHeight="15rem" maxHeight="15rem">
                    <img
                        src='https://cdn.discordapp.com/attachments/537843469943701525/1036156180415918120/kazuha_bday_22.png?ex=6559a324&is=65472e24&hm=202eba24355feb241ae566c1c0684fc5e5aab5b8a0e9a93893db49aa26a6a814&'
                        loading="lazy"
                    />
                </AspectRatio>
            </div>

            <div className='new-btn'>
                <Button onClick={handleBtn} className='btn-style' style={{borderRadius: '30px', fontSize: '1.5rem'}}>New Entry</Button>
            </div>
            
            <div style={{marginTop: '16rem'}}>
                <TransactionTable/>
            </div>
        </>
    )
}

export default OverviewSC