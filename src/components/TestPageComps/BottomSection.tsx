import { useSelector } from 'react-redux'
import { getCurrentEmail } from '../../redux/reducers/emailStore'


const BottomSection = () => {
    const currentEmail = useSelector(getCurrentEmail)
    return (
        <div>
            <div>
                {currentEmail}
            </div>
        </div>
    )
}

export default BottomSection