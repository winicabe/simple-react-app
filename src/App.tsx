import { useState } from "react";
import { Tweet } from "./components/Tweet";

import './App.css';

function App() {
  const [tweets, setTweets] = useState<string[]>(['lindo 1',
   'lindo 2',
    'lindo 3'
  ]);
  function createTweet(){
    setTweets([...tweets, 'tweet 5'])
  }
  return <p>
    {tweets.map(tweet => {
      return <Tweet text={tweet}/>
    })
    }
    <button onClick={createTweet}>Adicionar Tweet</button>
  </p>
}
export default App;
