import React from 'react';

import { 
    GroupContainer,
    FormInputContainer,
    FormLabel,
} from './FormInput.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...otherProps} />
        {
            label ?
            (<FormLabel className={otherProps.value.length ? 'shrink' : ''}>
                {label}
            </FormLabel>) : null
        }
    </GroupContainer>
) 

export default FormInput;