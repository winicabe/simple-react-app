type TweetType = {
    text:string;
}
export function Tweet( props:TweetType ){
    return (<div>{props.text}</div>)
}