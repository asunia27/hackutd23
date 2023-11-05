import Button from '@mui/joy/Button';
import { useNavigate } from 'react-router-dom';

const OverviewSC = () => {
    const navigate = useNavigate();

    function handleBtn(e) {
        e.preventDefault()
        navigate('/new');
    }

    return (
        <>
            <div className='mb-5'>
                <Button onClick={handleBtn}>New Item</Button>
            </div>
            <div>
                aaaaaaaaaaaaaaaa
            </div>
        </>
    )
}

export default OverviewSC