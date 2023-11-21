import { Link } from "react-router-dom"; 
import { useState, useRef } from "react"; 
import { Arrow } from "../assets/arrow"; 
import {customer, purchase, ticketsAvailable} from '../api/models'
import { createCustomer } from "../api/api";

export default function CheckPay (){
    
    const [page_number, changeNumber] = useState(0)
    const [err, setErr] = useState("")
    const [target, setTarget] = useState(0)
    const [buyForSelf, setBuyForSelf] = useState(true)
    const fname = useRef("");
    const lname = useRef("");
    const pnumber = useRef("");
    const buyforOthersPayee = useRef("");
    const numberOfTicketsRef = useRef("")

    const validatePhone = (phone) => {
        const phoneReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
        if (phone.match(phoneReg)) return true;
    }
    
    const renderSwitch = (pagenumber) => {
        switch(pagenumber) {
          case 0:
            return selectOpt();
          case 1:
            return buyforothers();
          case 2:
            return buytickets();
          case 3:
            return numberOfTickets();
          case 4:
            return choosecurrency();
          case 5:
            return promptSent();
          default:
            return selectOpt();
        }
      }
       
    return <div class=" h-4/5 grid"> 
            <div class="card">
                <p className=" text-lg font-bold">Purchase Tickets</p>
            {
                renderSwitch(page_number)
            }
            </div>
        </div>
    
    function selectOpt () {
        return <><div class="p-6">
        <div>
            <Link to="/"><Arrow/></Link>
        </div>
        </div>
        <div class="clear-both text-lg">Select Preferred Option</div>
        <br/>
        <button type="button"class="button" onClick={()=>{setBuyForSelf(true); changeNumber(2)}}>Buy Tickets for Yourself</button>
        <br/><br/>
        <button type="button"class="button" onClick={()=>{setBuyForSelf(false);changeNumber(1)}}>Buy Tickets for Others</button>
        <br/><br/></>
    }

    function buyforothers () {
        function executeBuyForOthers(){  
            if(buyforOthersPayee.current.value === "") return setErr("Enter Phone Number");
            if(!validatePhone(buyforOthersPayee.current.value)) return setErr("Kindly Enter A Correct Phone Number");
            purchase.payment.payee = buyforOthersPayee.current.value; 
            changeNumber(2)
            setErr("");
        }
        return <><div class="p-6">
        <div onClick={()=>{setErr(""); changeNumber(0)}}>
            <Arrow/>
        </div>
        </div>
        <div class="clear-both text-lg">Buy For Others</div>
        <br/>
        <input class="input" type="phone" ref={buyforOthersPayee} defaultValue={purchase.payment.payee} placeholder="Enter Your Phone Number"/>
        <br/>
        <small>{err}</small>
        <br/>
        <button type="button" class="button float-right" onClick={()=>executeBuyForOthers()}>Submit</button>
        <br/><br/>
        <p class="text-sm">SMS to other networks might cost additional charges</p>
        </>
    }

    function buytickets () { 
        async function executeBuyTickets (){
             if(fname.current.value === "" || lname.current.value === "" || pnumber.current.value === "" ) return setErr("Inputs Can't be Empty")


            customer.firstName = fname.current.value;
            customer.lastName = lname.current.value;
            customer.phoneNumber = pnumber.current.value;
            changeNumber(3)
            setErr("");
        } 

        return <><div class="p-6">
        <div onClick={()=>{setErr("");buyForSelf?changeNumber(0):changeNumber(1)}}>
            <Arrow/>        
        </div>
        </div>
        <div class="clear-both text-lg">{buyForSelf?"Buy for Yourself":"Beneficiary Details"}</div>
        <br/>
        <div class="">
        <input ref={fname} class="input" defaultValue={customer.firstName} placeholder="First Name"/>
        <br/>
        <input class="input" ref={lname} defaultValue={customer.lastName} placeholder="Last Name"/>
        <br/>
        <input class="input" ref={pnumber} defaultValue={customer.phoneNumber} placeholder="Enter Phone Number"/>
        <br/>
        <small>{err}</small>
        <br/><br/>
        <button type="button"class="button float-right" onClick={()=>executeBuyTickets()}>Submit</button>
        <br/><br/>
        <p class="text-sm">SMS to other networks might cost additional charges</p>
        </div>
        </>
    }

    function numberOfTickets() {
        
        if(purchase.payment.payee === "") purchase.payment.payee = customer.phoneNumber; 
        
        function setPrice(value){ 
            if(value === "VIP") setTarget(0)
            if(value==="Special") setTarget(1)
            if(value==="Standard") setTarget(2)
        }
        function executeNumberOfTickets(){
            if(numberOfTicketsRef.current.value === "") return setErr("Kindly Enter Number Of Tickets");
            if(+numberOfTicketsRef.current.value > +ticketsAvailable[target].maxPerCustomer)  return setErr("Kindly Reduce the Amount of Tickets");
            purchase.ticketCount = numberOfTicketsRef.current.value;
            changeNumber(4)
            setErr("");
        }
        return <><div class="p-6">
        <div onClick={()=>{setErr("");changeNumber(2)}}>
            <Arrow/>
        </div>
        </div>
        <div class="clear-both text-lg">Enter Number Of MLMA Tickets</div>
        <br/>
        Select Ticket Type: <select defaultValue={ticketsAvailable[target].type.name} onChange={(e)=>setPrice(e.target.value)}>{ticketsAvailable.map(x => <option>{x.type.name}</option>)}</select>
        <br/><br/>
        <input class="input" type="number" ref={numberOfTicketsRef}  defaultValue={purchase.ticketCount} placeholder="Enter Number Of Tickets To Purchase"/>
        <br/>
        <small>{err}</small>
        <br/>
        <button type="button" class="button float-right" onClick={()=>{executeNumberOfTickets()}}>Submit</button>
        <br/><br/> 
        </>
    }

   function choosecurrency () {
        async function executeChooseCurrency (value){
            var newCustomer = await createCustomer(customer)
            console.log(newCustomer)
            purchase.customerId = customer.uuid
            purchase.payment.currency = value;
            purchase.ticketType.id = ticketsAvailable[target].type.id
            purchase.ticketType.name = ticketsAvailable[target].type.name
            purchase.payment.amount = purchase.ticketCount * ticketsAvailable[target].costPerTicket
            changeNumber(5)
        }
        return <><div class="p-6">
        <div onClick={()=>{changeNumber(3)}}>
            <Arrow/>
        </div>
        </div>
        <div class="clear-both text-lg">Choose Currency</div>
        <br/><br/>
        <button type="button" class="button" onClick={()=>executeChooseCurrency("LRD")}>LRD (${190 * purchase.ticketCount * ticketsAvailable[target].costPerTicket})</button>
        <br/><br/>
        <button type="button"class="button" onClick={()=> executeChooseCurrency("USD")}>USD (${purchase.ticketCount * ticketsAvailable[target].costPerTicket})</button>
        <br/><br/></>
    }

    function promptSent() {
        return <> 
        <br/>
        <p class="text-lg">Almost Done!</p>
        <br/> 
        <p>Payment prompt sent to {customer["phoneNumber"]}</p>
        <br/><br/>
        <Link to="/"><button className="button">Go Home</button></Link>
        </>
    }
}