import { Box, Button, FormControl, Input, InputLabel, Typography } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentEmail } from './../../redux/reducers/emailStore'

const TopSection = () => {
    const dispatch = useDispatch()
    const [emailVal, setEmailVal] = useState('Test')

    const onButtonClick = () => {
        dispatch(setCurrentEmail({ email: emailVal }))
    }

    return (
        <Box>
            <Typography variant='h2'>Header Section</Typography>
            <FormControl  >
                <InputLabel>Set Current Email</InputLabel>
                <Input value={emailVal} onChange={(e) => { setEmailVal(e.target.value) }}></Input>
            </FormControl>
            <Button onClick={onButtonClick} color="primary">Dispatch</Button>
        </Box>
    )
}

export default TopSection

