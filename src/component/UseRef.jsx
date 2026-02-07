import React , {useState ,useEffect,useRef} from 'react'

export default function UseRef() {
    //eg 1
     const inputRef=useRef()
      const focusInput =() => {
        inputRef.current.focus();
      };
      // eg2
      const [sec,setSec]=useState(0)
      const intervalRef=useRef()
      useEffect(() => {
        intervalRef.current=setInterval(() => {
            setSec((prev) => prev+1 )
        },1000)
        return () => clearInterval(intervalRef.current)
      } ,[])
// eg3
const[newProduct,setNewProduct]=useState(true)
const[imageURL, setImageURL]=useState("")
const imgref=useRef(0)
const handleClick=(e) => {
    const file=e.target.files[0]
    if (file){
        const preview = URL.createObjectURL(file);
    setImageURL(preview)
    setNewProduct(false)
}
}
  return (
    <div>
     {/* eg1*/}
     <nav>
        <input type="text" ref={inputRef} placeholder="Type Here"/>
        <button onClick={focusInput}>focus input</button>
     </nav>
     {/*eg2*/}
     <nav>
        <p>timer:{sec}</p>
        <button>stop</button>
     </nav>
     {/*eg3*/}
     
    <nav>
        {/* hidden file input */}
        <input
          ref={imgref}
          type="file"
          accept="image/*"
          onChange={handleClick}
          style={{ display: "none" }}
        />

        {newProduct ? (
          <div
            className="image-box"
            onClick={() => imgref.current.click()}
          >
            Upload Image
          </div>
        ) : (
          <img className="Hello" src={imageURL} alt="preview" />
        )}
      </nav>
      </div>
  )
}
