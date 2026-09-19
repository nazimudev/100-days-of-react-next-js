import Avatar from "./Avatar";
import Details from "./Details";

export default function User(props){
    return (
        <>
            <Avatar {...props} />
            <Details personal={props.personal} />
        </>
    )
}