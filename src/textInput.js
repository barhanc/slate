/**
 * Wrapper class for SpeechRecognition API
 */
class STT {
    /**
     * @param {any} SpeechRecognition The SpeechRecognition constructor
     * @param {string} lang Language code (e.g., "en-US")
     */
    constructor(SpeechRecognition, lang) {
        if (!SpeechRecognition) throw Error()

        this.isListening = false;
        this.recognition = new SpeechRecognition();

        this.recognition.lang = lang;
        this.recognition.continuous = true;
        this.recognition.interimResults = true;

        this.recognition.onresult = (e) => {
            let transcript = "";
            for (let i = e.resultIndex; i < e.results.length; i++)
                if (e.results[i].isFinal)
                    transcript += e.results[i][0].transcript;

            const textInput = document.getElementById("text-input");
            if (transcript)
                textInput.value = textInput.value + (textInput.value ? " " : "") + transcript;
        };

        this.recognition.onerror = (e) => {
            console.error("Speech recognition error:", e.error);
            this.stopListening();
        };

        this.recognition.onend = () => { if (this.isListening) this.recognition.start(); };
    }

    startListening() {
        this.isListening = true;
        this.recognition.start();
        document.getElementById("btn-stt").classList.add("listening");
    }

    stopListening() {
        this.isListening = false;
        this.recognition.stop();
        document.getElementById("btn-stt").classList.remove("listening");
    }
}

/**
 * Initializes the SpeechRecognition instance if supported by the browser.
 * @param {string} [lang="en-US"] 
 * @returns {STT|null}
 */
function initializeSTT(lang = "en-US") {
    if (!window.webkitSpeechRecognition && !window.SpeechRecognition) {
        document.getElementById("btn-stt").style.display = "none";
        return null;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    return new STT(SpeechRecognition, lang);
}

// ========================================================
// Initialization
// ========================================================

const stt = initializeSTT();
const canvas = window.canvas;

// ========================================================
// Font Selection
// ========================================================

const availableFonts = [
    { name: "Anton", value: "'Anton', sans-serif" },
    { name: "Indie Flower", value: "'Indie Flower', cursive" },
    { name: "Londrina Outline", value: "'Londrina Outline', cursive" },
    { name: "Patua One", value: "'Patua One', serif" },
    { name: "Pixelify Sans", value: "'Pixelify Sans', sans-serif" },
    { name: "Rubik Mono One", value: "'Rubik Mono One', monospace" },
    { name: "Young Serif", value: "'Young Serif', serif" },
    { name: "Roboto Regular", value: "'Roboto', sans-serif", weight: 400 },
    { name: "Roboto Medium", value: "'Roboto', sans-serif", weight: 500 },
    { name: "Roboto SemiBold", value: "'Roboto', sans-serif", weight: 600 },
    { name: "Roboto Bold", value: "'Roboto', sans-serif", weight: 700 },
    { name: "Roboto Black", value: "'Roboto', sans-serif", weight: 900 },
    { name: "Roboto Italic", value: "'Roboto', sans-serif", weight: 400, style: 'italic' },
    { name: "Roboto Med. Italic", value: "'Roboto', sans-serif", weight: 500, style: 'italic' },
    { name: "Roboto Bold Italic", value: "'Roboto', sans-serif", weight: 700, style: 'italic' },
    { name: "Roboto Black Italic", value: "'Roboto', sans-serif", weight: 900, style: 'italic' },
];

availableFonts.forEach(font => {
    const option = document.createElement("option");
    option.value = font.value;
    option.textContent = font.name;
    option.style.fontFamily = font.value;
    
    if (font.weight) {
        option.style.fontWeight = font.weight;
        option.setAttribute("data-weight", font.weight);
    }
    
    if (font.style) {
        option.style.fontStyle = font.style;
        option.setAttribute("data-style", font.style);
    }
    
    document.getElementById("font-select").appendChild(option);
});


// ========================================================
// Event Listeners
// ========================================================

document.getElementById("text-modal").onclick = (e) => {
    if (e.target !== document.getElementById("text-modal")) return
    if (stt) stt.stopListening();
    document.getElementById("text-modal").classList.remove("visible");
};

document.getElementById("btn-stt").onclick = () => {
    if (!stt) return;
    if (stt.isListening) stt.stopListening();
    else stt.startListening();
};

document.getElementById("btn-confirm-text").onclick = () => {
    if (stt) stt.stopListening();

    const textModal = document.getElementById("text-modal");
    const textInput = document.getElementById("text-input");
    const fontSelect = document.getElementById("font-select");
    const textColor = document.getElementById("text-color");
    const text = textInput.value.trim();

    textModal.classList.remove("visible");

    if (!text) return;

    const selectedOption = fontSelect.options[fontSelect.selectedIndex];
    const weight = selectedOption.getAttribute("data-weight");
    const style = selectedOption.getAttribute("data-style");

    const textObj = new fabric.IText(text, {
        left: canvas.getVpCenter().x,
        top: canvas.getVpCenter().y,
        originX: "center",
        originY: "center",
        fontFamily: fontSelect ? fontSelect.value : "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
        fontSize: 32,
        fill: textColor ? textColor.value : "#ff0000",
        fontWeight: weight ? parseInt(weight) : 400,
        fontStyle: style || "normal",
    });

    canvas.add(textObj);
    canvas.setActiveObject(textObj);
    canvas.requestRenderAll();
};

// Allow Enter key to add text (Shift+Enter for new line)
document.getElementById("text-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        document.getElementById("btn-confirm-text").click();
    }
});