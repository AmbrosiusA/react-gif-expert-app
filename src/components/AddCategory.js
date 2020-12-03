import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputText = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }

        
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={ inputValue }
                    onChange={ handleInputText }
                />
            </form>
        </>
    );

    AddCategory.propTypes = {
        setCategories: PropTypes.func.isRequired
    }
}
