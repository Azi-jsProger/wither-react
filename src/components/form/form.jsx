import React, {useState} from 'react';
import './form.css'
import imageSearch from '../../assets/search.png'
import Delete from '../../assets/delete.png'

const Form = (props) => {

    const  {
        getWither,
        setError
    } = props

    const [InputValue, setInputValue] = useState('')

    return (
        <div className='form-parents'>
            <input
                type="text"
                placeholder='Search location...'
                className='input-search search-hover'
                onChange={(e) => setInputValue(e.target.value) }
            />

            <button
                className='button-search
                            search-hover
                            wh-but'
                onClick={ () => getWither(InputValue)}
            >
                <img src={imageSearch} alt=""/>
            </button>

            <button
                className='delete
                           search-hover
                           wh-but'
                onClick={() => {
                    getWither('Bishkek')
                }
            }
            >
                <img className='delete search-hover' src={Delete} alt=""/>
            </button>
        </div>
    );
};

export default Form;