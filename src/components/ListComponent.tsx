import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getEmails } from './../redux/reducers/emailStore'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const ListComponent = () => {
    const emails = useSelector(getEmails)
    const [selected, setSelected] = useState<string>('')
    return (
        <div>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    onChange={(event)=>{
                        console.log(event.target.value)
                    }}
                >
                    {emails.map(
                        (item, index)=>(<FormControlLabel  key={index} value={item} control={<Radio />} label={item} />))
                    }

                </RadioGroup>

            {emails}</div>
    )
}

export default ListComponent