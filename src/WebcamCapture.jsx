import React, { useCallback, useRef, useState } from 'react'
import Webcam from 'react-webcam';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch } from 'react-redux';
import { setCameraImage } from './features/cameraSlice';
import { useHistory } from 'react-router-dom';
import './WebcamCapture.css'

const videoConstraints = {
    height: 400,
    width: 300,
    facingMode: "user"
}

const WebcamCapture = () => {
    const webCamRef = useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();

    const capture = useCallback( () => {
        const imageSrc = webCamRef.current.getScreenshot();
        dispatch(setCameraImage(imageSrc));
        history.push("/preview");
    } ,[webCamRef] )

    return (
        <div className="webcamCapture">
            <Webcam
                audio={false}
                height={videoConstraints.height}
                ref={webCamRef}
                width={videoConstraints.width}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
             />
             <RadioButtonUncheckedIcon 
             className="webcamCapture__button" 
             onClick={capture}

              />
        </div>
    )
}

export default WebcamCapture
