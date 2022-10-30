import { createContext } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export const VoiceContext = createContext();

export const VoiceProvider = ({ children }) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const value = { transcript, listening, resetTranscript, SpeechRecognition };
  return (
    <VoiceContext.Provider value={value}> {children} </VoiceContext.Provider>
  );
};
