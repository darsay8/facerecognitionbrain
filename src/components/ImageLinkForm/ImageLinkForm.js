import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onPictureSubmit}) => {
    return (
        <div>
            <p className='f2 msg white'>
                {'This Magic Brain will detect faces in your pictures. Git it a try.'}
            </p>
            <div className='center'>
                <div className='center form pa4 br2 shadow-5'>
                    <input
                        className='f4 pa2 w-70 center'
                        type="text"
                        onChange={onInputChange}
                    />
                    <button
                        className='w-30 grow f3 link ph3 pv2 dib white bg-blue'
                        onClick={onPictureSubmit}>
                        {'Detect'}
                    </button>
                </div>
            </div>
        </div>
    )
};

export default ImageLinkForm;