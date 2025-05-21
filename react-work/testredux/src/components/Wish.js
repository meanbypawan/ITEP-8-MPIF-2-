import { useSelector } from "react-redux";

function Wish(){
    const {morningMessage,eveningMessage,nightMessage} = useSelector((store)=>store.Messages);
    return <>
       <h3>Some popular wishing messages</h3>
       {morningMessage} :
       {eveningMessage} : 
       {nightMessage}
       <hr/>
    </>
}

export default Wish;