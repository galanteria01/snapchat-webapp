import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { selectCameraImage } from './features/cameraSlice';
import './Preview.css'

const Preview = () => {

    const cameraImage = useSelector(selectCameraImage);
    const history = useHistory();
    useEffect( () => {
        if(!cameraImage) {
            history.replace('/');
        }
    } ,[cameraImage,history] )

    return (
        <div className="preview">
            <img src={cameraImage} alt=""/>
        </div>
    )
}

export default Preview
