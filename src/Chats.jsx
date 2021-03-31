import React, { useEffect, useState } from 'react'
import './Chats.css'
import {Avatar} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import {auth, database} from './Firebase';
import Chat from './Chat.jsx';
import { useSelector } from 'react-redux';
import { selectUser } from './features/appSlice';
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded';
import { useHistory } from 'react-router-dom';

const Chats = () => {

    const [posts,setPosts] = useState([]);
    const user = useSelector(selectUser);
    const history = useHistory();
    useEffect(() => {
        database.collection('posts').orderBy('timestamp','desc').onSnapshot(
            (snapshot) => setPosts(snapshot.docs.map(
                (doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))))
    },[])

    const takeSnap = () => {
        history.push("/")
    }

    return (
        <div className="chats">
            <div className="chats__header">
                <Avatar 
                src={user.profilePic} 
                onClick={() => auth.signOut()} 
                className="chats__avatar" 
                />
                <div className="chats__search">
                    <SearchIcon className="chats__searchIcon"/>
                    <input placeholder="Friends" type="text" />
                </div>
                <ChatBubbleIcon className="chats__chatBubble"/>
            </div>
            <div className="chats__posts">
                {posts.map(({id, data: { profilePic, username,timestamp,imageUrl,read }}) => (
                    <Chat 
                    key={id}
                    id={id}
                    username={username}
                    timestamp={timestamp}
                    imageUrl={imageUrl}
                    read={read}
                    profilePic={profilePic}
                    />
                ))}
            </div>
            <RadioButtonUncheckedRoundedIcon 
            className="chats__takePicIcon"
            onClick={takeSnap}
            fontSize="large"
            
            />
        </div>
    )
}

export default Chats
