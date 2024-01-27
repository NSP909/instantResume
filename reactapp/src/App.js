import "./App.css";
import { useState, useEffect } from "react";
import { sendMsgtoOpenAI } from "./OpenAi";
import OPENAI_API_KEY from "./apiKey";
import template from "./templates/Template";
import selectTemplate, {selectedTemplate} from "./templateSelector";
import sample_latex from "./templates/SampleLatex";


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
    <header className="p-7 bg-headerColor border-b-gray-500 border-b-[1px] sticky top-0">
      <h1 className='text-center text-4xl tracking-wider font-["Nunito Sans"] text-textColor'>
        <p className="inline text-secondary">ASAP</p>Resume
      </h1>
    </header>
  );
}

function Main() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  return (
    <div className="grid grid-cols-[20%_,35%_,45%] bg-headerColor h-[100vh]">
      <Templates setSelectedTemplate={setSelectedTemplate} />
      <PdfView selectedTemplate={selectedTemplate} />
      <FreeWrite selectedTemplate={selectedTemplate}/>
    </div>
  );
}



function Templates(props) {
  const { setSelectedTemplate } = props;

  const templateImages = [
    "./images/33601.jpeg",
    "./images/33428.jpeg",
    "./images/33137.jpeg",
    "./images/31023.jpeg",
    "./images/33536.jpeg",
    // Add more template images as needed
  ];

  const handleTemplateClick = (index) => {
    setSelectedTemplate(index);
  };

  return (
    <div className="flex flex-col items-center pt-10 gap-10 max-w-[100%] overflow-scroll scrollable-element will-change-scroll bg-[#1A2433] border-r-gray-500 border-r-[1px] sm:px-2">
      {templateImages.map((template, index) => (
        <img
          key={index}
          src={template}
          className={`h-[250px] hover:border-secondary hover:border-4 ${props.selectedTemplate === index ? 'border-secondary border-4' : ''}`}
          onClick={() => handleTemplateClick(index)}
        />
      ))}
    </div>
  );
}



function PdfView({ selectedTemplate }) {
  const templateImages = [
    "./images/33601.jpeg",
    "./images/33428.jpeg",
    "./images/33137.jpeg",
    "./images/31023.jpeg",
    "./images/33536.jpeg",
    // Add more template images as needed
  ];

  return (
    <div className="flex items-center justify-center border-r-gray-500 border-r-[1px]">
      {selectedTemplate !== null && (
        <img src={templateImages[selectedTemplate]} className="max-h-[70vh] p-4" />
      )}
    </div>
  );
}



function FreeWrite({selectedTemplate}) {
  const [input, setinput] = useState("");
  const [latex, setLatex] = useState("");
  const apiKey = OPENAI_API_KEY;
  const stemplate = selectTemplate(selectedTemplate);
  const handleChange = (e) => {
    setinput(e.target.value);
  };

  const handleSend = async () => {
    console.log("Input:", input); 
    sendMsgtoOpenAI(input, apiKey, stemplate)
      .then((response) => {
        setLatex(()=>response)
        console.log("Response from AI:", response);
      })
      .catch((error) => {
        console.error("Error", error);
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
      <Convert latex_content= {latex}/>
    </div>
  );
}

function Convert(props){
  const [pdfLink, setPdfLink] = useState('a')

  const url = 'http://127.0.0.1:5000/convert'
  const handleReceive = async ()=> {
    let response = await fetch(url, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({latex:String.raw`${props.latex_content}`})//
    })
    // let latex = await response.json()
    // console.log(latex.received_latex)
    const blob = await response.blob() //change response to latex later on maybe
    const output = window.URL.createObjectURL(blob)
    setPdfLink(()=>output)
  }

  // const testFunc = () => {
  //   console.log(props.latex_content)
  // }

  const returnLink = ()=>{
    if(pdfLink!=='a'){
      return (
        <button
        className="mt-10 rounded-xl w-[80px] text-sm h-[50px] md:w-[150px] md:h-[60px] md:text-xl bg-[#1abc9c] text-textColor font-semibold">
          <a target = "_blank" href ={pdfLink} className="text-textColor">Pdf here</a>
        </button>
      )
    }
  }

  return(
    <div className="flex justify-center gap-10">
      <button
        className="mt-10 rounded-xl w-[80px] text-sm h-[50px] md:w-[150px] md:h-[60px] md:text-xl bg-[#1abc9c] text-textColor font-semibold"
        onClick={handleReceive}
      >
        Test
      </button>      
      {returnLink()}

    </div>
  )
}


export default App;
