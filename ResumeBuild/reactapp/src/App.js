import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

function Header(){
  return(
    <header className = 'p-7 bg-headerColor rounded-b-lg'>
        <h1 className='text-center text-3xl font-extrabold tracking-wider font-["Nunito Sans"] text-textColor'>RESUMIKE</h1>
    </header>
  )
}

function Main(){
  return(
    <div className='flex'>
      <Template/>
      <FreeWrite/>
      
    </div>
  )
}

function FreeWrite(){
  return(
    <div className='flex flex-col gap-10 w-[80%] sticky top-0 justify-center p-10'>
      <p className='text-center text-xl'>Enter Your Information Below:</p>
      <form className='flex flex-col'>
        <textarea className='m-auto rounded-md w-[80%] h-[40vh] indent-5 text-2xl pt-5 text-headerColor font-serif' id="freeWrite" placeholder="Write here..."></textarea>
        <button className='mt-10 rounded-xl w-[150px] h-[60px] m-auto text-xl bg-secondary text-textColor font-semibold hover:bg-[#1abc9c]'>Generate</button>
      </form>
    </div>
  )
}

function Template(){
  return(
    <div className='flex justify-center items-center flex-col pt-10 gap-10 h-[90vh] min-w-[30vw] '>
      <img src="./images/1131w-f5JNR-K5jjw.webp" className='h-[300px] rounded-lg hover:border-secondary hover:border-4'/>
      <img src="./images/1131w-f5JNR-K5jjw.webp" className='h-[300px] rounded-lg hover:border-secondary hover:border-4'/>
      <img src="./images/1131w-f5JNR-K5jjw.webp" className='h-[300px] rounded-lg hover:border-secondary hover:border-4'/>
    </div>
  )
}

export default App;
