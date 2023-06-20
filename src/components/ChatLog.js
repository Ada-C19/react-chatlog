import { useState } from 'react';
import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/Chatlog.css'

const ChatLog = () => {

};

ChatLog.propTypes = {
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired
};