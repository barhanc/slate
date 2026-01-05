// ========================================================
// Speech to Text Class
// ========================================================

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
    const text = textInput.value.trim();

    textModal.classList.remove("visible");

    if (!text) return;

    const textObj = new fabric.IText(text, {
        left: canvas.getVpCenter().x,
        top: canvas.getVpCenter().y,
        originX: "center",
        originY: "center",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
        fontSize: 32,
        fill: "#333333",
        fontWeight: 500,
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