import React, { useState } from "react";

export default function Textform(props) {
  const upcs = () => {
    let ntx = text.toUpperCase();
    setText(ntx);
    if(ntx === '')
    {
      props.showAlert("Your text area is empty !","Warning");
    }
    else{
      props.showAlert("Converted to Uppercase !","success");
    }
  };

  const locs =()=>{
    let ltx = text.toLowerCase();
    setText(ltx);
    if(ltx === '')
      {
        props.showAlert("Your text area is empty !","Warning");
      }
      else{
        props.showAlert("Converted to Lowercase !","success");
      }
  }

  const Copy = ()=>{
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    if(text === '')
      {
        props.showAlert("Your text area is empty !","Warning");
      }
      else{
        props.showAlert("Text Copyed Successfully !","success");
      }
  }

  const extsp =()=>{
    let ntx1 = text.split(/[ ]+/);
    setText(ntx1.join(" "));
    if(ntx1 === '')
      {
        props.showAlert("Your text area is empty !","Warning");
      }
      else{
        props.showAlert("Extra space removed !","success");
      }
  }

  const clear = ()=>{
    setText('');
    props.showAlert("All area is Cleared !","success");
  }

  const upchange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  return (
    <>
    <div className="container" style={{color :props.mode==='light'?'black':'white'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={upchange}
          id="mybox"
          rows="8"
          style={{backgroundColor : props.mode==='dark'?'gray':'white', color:props.mode==='light'?'black':'white'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={upcs}>
        Uppercase
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={locs}>
        Lowercase
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={Copy}>
        Copy text
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={clear}>
        Clear text
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={extsp}>
        remove spaces
      </button>
    </div>
    <div className="container" style={{color :props.mode==='light'?'black':'white'}}>
      <h2>Here is your text summary</h2>
      <p> {text.split(" ").filter((Element)=> {return Element.length !== 0}).length} word and {text.length} character.</p>
      <p> {0.008 * text.split(" ").length} it take time to read. </p>
      <h2>Perview</h2>
      <p>{text.length > 0 ? text:"write something to preview here"}</p>
    </div>
    </>
  );
}

// import React, { useState } from "react";

// export default function Textform() {
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const [error, seterror] = useState("");
//   const Disnm = (e) => {
//     e.preventDefault();
//     if (email === '' || pass === '') {
//       seterror("both field is empty or one of then.");
//       return;
//     }

//     if (email === "harshilkheni200@gmail.com" && pass === "har123") {
//       alert("welcome back sir");
//     } else {
//       seterror("Wrong credentials");
//     }
//   };
//   return (
//     <>
//       <div className="container">
//         <form onSubmit={Disnm}>
//           {error && <h2 style={{color:"red"}}>{error}</h2>}
//           <div className="input-group flex-nowrap my-3">
//             <span className="input-group-text" id="addon-wrapping">
//               @
//             </span>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Username"
//               aria-label="Username"
//               aria-describedby="addon-wrapping"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Passcode"
//               aria-label="Username"
//               aria-describedby="addon-wrapping"
//               onChange={(e) => setPass(e.target.value)}
//             />
//           </div>
//           <button type="submit" className="btn btn-primary my-3 ">
//             {" "}
//             submit
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }
