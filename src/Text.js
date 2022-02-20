import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import Speech from 'react-speech';

const Text = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <>
    
    <div className='head'>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      
      <button onClick={resetTranscript}>Reset</button>
      
      <p id="text">{transcript}</p>
    </div>
    <Speech 
            
            textAsButton={true}    
            displayText="plays" 
            text={transcript} />
    </>
  );
};
export default Text;