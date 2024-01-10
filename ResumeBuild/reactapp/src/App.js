import "./App.css";
import { useState } from "react";
import { sendMsgtoOpenAI } from "./OpenAi";
import OPENAI_API_KEY from "./apiKey";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

function Header() {
  return (
    <header className="p-7 bg-headerColor border-b-gray-500 border-b-[1px]">
      <h1 className='text-center text-4xl tracking-wider font-["Nunito Sans"] text-textColor'>
        <p className="inline text-secondary">ASAP</p>Resume
      </h1>
    </header>
  );
}

function Main() {
  return (
    <div className="grid grid-cols-[20%_,35%_,45%] bg-headerColor w-[100vw] h-[100dvh]">
      <Template />
      <PdfView />
      <FreeWrite />
    </div>
  );
}

function Template() {
  return (
    <div className="flex flex-col items-center pt-10 gap-10 max-w-[100%] overflow-scroll scrollable-element will-change-scroll bg-[#1A2433] border-r-gray-500 border-r-[1px] sm:px-2">
      <img
        src="./images/1131w-f5JNR-K5jjw.webp"
        className="h-[250px] w-auto hover:border-secondary hover:border-4"
      />
      <img
        src="./images/1131w-f5JNR-K5jjw.webp"
        className="h-[250px] hover:border-secondary hover:border-4"
      />
      <img
        src="./images/1131w-f5JNR-K5jjw.webp"
        className="h-[250px] hover:border-secondary hover:border-4"
      />
      <img
        src="./images/1131w-f5JNR-K5jjw.webp"
        className="h-[250px] hover:border-secondary hover:border-4"
      />
      <img
        src="./images/1131w-f5JNR-K5jjw.webp"
        className="h-[250px] hover:border-secondary hover:border-4"
      />
    </div>
  );
}

function PdfView() {
  return (
    <div className="flex items-center justify-center border-r-gray-500 border-r-[1px]">
      <img src="./images/1131w-f5JNR-K5jjw.webp" className="max-h-[70vh] p-4" />
    </div>
  );
}

function FreeWrite() {
  const [input, setinput] = useState("");
  const apiKey = OPENAI_API_KEY;

  const handleChange = (e) => {
    setinput(e.target.value);
  };

  const handleSend = async () => {
    console.log("Input:", input); // Check if input is captured correctly
    sendMsgtoOpenAI(input, apiKey)
      .then((response) => {
        console.log("Response from AI:", response);
        // Handle the response here
      })
      .catch((error) => {
        console.error("Error", error);
        // Handle errors here
      });
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center ">
      <p className="text-center text-2xl">Enter Your Information Below:</p>

      <textarea
        type="text"
        className="rounded-md w-[80%] h-[50%] indent-3 text-2xl text-headerColor font-serif pt-10"
        id="freeWrite"
        placeholder="Write here..."
        value={input}
        onChange={handleChange}
      />
      <button
        className="mt-10 rounded-xl w-[80px] text-sm h-[50px] md:w-[150px] md:h-[60px] md:text-xl bg-secondary text-textColor font-semibold hover:bg-[#1abc9c]"
        onClick={handleSend}
      >
        Generate
      </button>
    </div>
  );
}

export default App;
