import{usestate} from "react";


const Logo = () => (
  <svg width="300" viewBox="0 0 680 320" role="img" xmlns="http://www.w3.org/2000/svg">
    <style>{`
      .bg { fill: none; }
      .ring { fill: none; stroke: #00ff88; stroke-width: 1; opacity: 0.15; }
      .dot { fill: #00ff88; }
      .dash { fill: #00ff88; }
      .signal { fill: none; stroke: #00ff88; stroke-width: 1.5; opacity: 0.6; }
      .glow { fill: #00ff88; opacity: 0.08; }
      .label { font-family: 'Courier New', monospace; fill: #00ff88; font-weight: 700; font-size: 28px; letter-spacing: 6px; }
      .sublabel { font-family: 'Courier New', monospace; fill: #00ff8855; font-size: 11px; letter-spacing: 12px; }
    `}</style>
    <rect className="bg" width="680" height="320" rx="16"/>
    <circle className="ring" cx="340" cy="130" r="60"/>
    <circle className="ring" cx="340" cy="130" r="95"/>
    <circle className="ring" cx="340" cy="130" r="130"/>
    <circle className="glow" cx="340" cy="130" r="48"/>
    <line x1="340" y1="82" x2="340" y2="52" stroke="#00ff88" strokeWidth="2"/>
    <line x1="320" y1="62" x2="340" y2="52" stroke="#00ff88" strokeWidth="1.5" opacity="0.6"/>
    <line x1="360" y1="62" x2="340" y2="52" stroke="#00ff88" strokeWidth="1.5" opacity="0.6"/>
    <circle cx="340" cy="50" r="3" fill="#00ff88"/>
    <circle cx="316" cy="130" r="7" className="dot"/>
    <rect x="328" y="124" width="24" height="12" rx="6" className="dash"/>
    <circle cx="364" cy="130" r="7" className="dot"/>
    <path className="signal" d="M 160 130 Q 175 110 190 130 Q 205 150 220 130 Q 235 110 250 130 Q 265 150 280 130"/>
    <path className="signal" d="M 400 130 Q 415 110 430 130 Q 445 150 460 130 Q 475 110 490 130 Q 505 150 520 130"/>
    <text x="340" y="202" className="label" textAnchor="middle">MORSE</text>
    <text x="340" y="226" className="sublabel" textAnchor="middle">TRADUCTEUR</text>
  </svg>
)

function Site() {
  const{isOn,setIsOn}= useState(false);
  const Alpha_to_morse = {
  "A": ".-",
  "B": "-...",
  "C": "-.-.",
  "D": "-..",
  "E": ".",
  "F": "..-.",
  "G": "--.",
  "H": "....",
  "I": "..",
  "J": ".---",
  "K": "-.-",
  "L": ".-..",
  "M": "--",
  "N": "-.",
  "O": "---",
  "P": ".--.",
  "Q": "--.-",
  "R": ".-.",
  "S": "...",
  "T": "-",
  "U": "..-",
  "V": "...-",
  "W": ".--",
  "X": "-..-",
  "Y": "-.--",
  "Z": "--..",
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  " ": "/"    ,
  "   ": "//",
}
 const Morse_to_alpha = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "/": " ",
  "//": "   "
}
  return (
    <div>
       <div className="titre">
         <h1>Traducteur morse</h1>
         <Logo />
       </div>
       <div className="traducteur">
         <textarea placeholder="Entrez votre texte en français..." />
         <textarea placeholder="--- .-. ... ."  />
       </div>
       <div>
          <button className="bouton" >Traduire</button>
          <br/>
         <button className="bouton" onClick={() => setIsOn(!isOn)}>
           Utilisation Gemini: {isOn ? "ON" : "OFF"}
         </button>
       </div>
    </div>
  )
}

export default Site