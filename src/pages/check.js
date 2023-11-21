import { Link } from "react-router-dom";
import { Arrow } from "../assets/arrow";
import { useRef, useState } from "react";
import { getCustomer } from "../api/api";

export default function Check (){
  console.log(process.env)
  const validatePhone = (phone) => {
    const phoneReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    if (phone.match(phoneReg)) return true;
}
    const pnumberCheck = useRef(""); 
    const [checkMsg, changeCheckMsg] = useState("")

    async function executeCheck () {
      if(!validatePhone(pnumberCheck.current.value)) return changeCheckMsg("Please Enter Correct Phone Number")
      if(pnumberCheck.current.value == "") return changeCheckMsg("Please Enter Phone Number")

      const response = await getCustomer(pnumberCheck.current.value);

      console.log(response)
      if(response.uuid) return changeCheckMsg("Ticket Verified")
      else changeCheckMsg("Bad Ticket")
    }

    return <div class="h-4/5 grid">
        <div class="card">
        <div>
          <Link to="/"><Arrow/></Link>
          <div class="clear-both font-bold text-large" >Check Tickets</div>
          <br/>
          <input ref={pnumberCheck} type="text" class="input" placeholder="Enter Phone Number"/>
          <br/>
          <small>{checkMsg}</small>
          <br/>
          <div>
            <div class="float-right bg-black text-white px-4 py-2 rounded">
              <button type="button" onClick={() => executeCheck()}>Send</button>
            </div>
          </div>
          <br/>
    </div>
   </div>
   </div>
}

//onclick send change state instead of link to your tickets