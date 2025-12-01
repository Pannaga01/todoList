function ChatInput(){
            return(
                <div>
                    <input placeholder="Type a message" />
                    <button>Send</button>
                </div>
            )
        }
        // ChatMessage({message, isUser=false})
        function ChatMessage(props){
            return (
                <div className = "message">
                    {props.message}
                    <img src = {props.isUser ? "user.webp" : "bot.webp"}
                    width="32" height="32" />
                </div>
            )
        }

function ChatBot(){
    return (
        <><ChatInput /><ChatMessage /></>
    )
}

export default ChatBot;
