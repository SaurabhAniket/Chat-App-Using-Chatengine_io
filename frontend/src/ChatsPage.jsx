import { MultiChatSocket , MultiChatWindow , useMultiChatLogic } from 'react-chat-engine-advanced'
const ChatsPage = (props) =>  {
    const chatProps = useMultiChatLogic(
        '2549c3ce-749e-464a-8d55-c86ed6066629', 
        props.user.username , 
        props.user.secret
    );
    return (
        <div style={{ height: '100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height:'100'}}/>
        </div>
    )
}

export  default ChatsPage