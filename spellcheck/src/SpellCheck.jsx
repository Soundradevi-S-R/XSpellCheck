import { useState } from "react";
import React from "react";


// Define a custom dictionary of words and their corrections
const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
    
  };


export default function SpellCheck(){

    const[inputText,setInputText] = useState("");
    const [suggestText,setsuggestText] = useState("");

    const handleInputChange =(e) =>{

        const current_text = e.target.value;
        setInputText(current_text);

        console.log("current_text >> ",current_text);

         // Implementing a basic spelling check and correction
        const words = current_text.split(" ");

        const correctedWords = words.map((word) => {
            const correctedWord = customDictionary[word.toLowerCase()];
            return correctedWord || word;
          });

        const correctedText = correctedWords.join(" ");

        console.log("correctedText >> ",correctedText);

         // Set the suggested text (first corrected word)
        const firstCorrection = correctedWords.find(
            (word, index) => word !== words[index]
           );
           setsuggestText(firstCorrection);

    }

    return (
     <div>
        <h1>Spell Check and Auto-Correction</h1>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text..."
          rows={5}
          cols={40}
        />

      {suggestText && (
          <p>
            Did you mean: <strong>{suggestText}</strong>?
          </p>
        )}
    
    </div>);

}