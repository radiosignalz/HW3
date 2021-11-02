import React, {useState} from 'react';
import useBotAnswerTimeDelay from '../Hooks/useBotAnswerTimeDelay'
import {MessageInput} from "./components/MessageInput";
import {MessageList} from "./components/MessageList";
// import InputMessages from "./components/inputMessages";
import {ChatList} from "./components/ChatList";
import {makeStyles} from "@material-ui/core/styles";


const useStyles=makeStyles({
    wrapper:{
        display:"grid",
        gridTemplateColumns:"200px 1fr"
    }
})

const HW3 = () => {
    const classes=useStyles();
    const [messageList,setMessageList]=useState([])
    const sendMessage=(text,author)=>{
        const newMessage={
            text,
            author,
        }
        const newMessageList=[...messageList, newMessage];
        setMessageList(newMessageList);

    }

    const onSendMessage=(value)=>{
        sendMessage(value,'user');
}
    const BotText="What we'll tape next Dava ?!"

    useBotAnswerTimeDelay(messageList,sendMessage, [BotText])

    // useEffect(()=>{
    //
    //     if (messageList.length===0){
    //         return;
    //     }
    //
    //     const tail=messageList[messageList.length-1];
    //     console.log(tail)
    //
    //     if (tail.author==='bot'){
    //         return;
    //     }
    //     const timerId=setTimeout(()=>{ sendMessage('hello', 'bot')},1500);
    //     return()=>{
    //         clearTimeout(timerId);
    //     }
    //
    // },[messageList]);


    return (

        <div className={classes.wrapper}>
<ChatList list={[{
    name:'name',
    id:1
}]}/>
        <div className='container'>
            <h1 h1={BotText} >HW3</h1>
            {/*<InputMessages/>*/}
            <MessageList messageList={messageList}/>
            <MessageInput onSend={onSendMessage}/>
        </div>
        </div>
    );
};

export default HW3