import { Link } from "react-router-dom"; 
import { useState } from "react";
import { Arrow } from "../assets/arrow";

export default function CheckPay (){
    
    const [page_number, changeNumber] = useState(0)

    const renderSwitch = (pagenumber) => {
        switch(pagenumber) {
          case 0:
            return selectOpt();
          case 1:
            return buyforself();
          case 2:
            return buyforsomeone();
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
    const customer = {
        "firstName": "example",//shouldn't it be passed via the ussd backend?
        "lastName": "example",//shouldn't it be passed via the ussd backend?
        "phoneNumber": "example"//
    }

    const purchase = {//how do I pass customer's number?
        "customerId": "c7fe6c0d-a028-3abd-8e96-b311aeb9eedc",//generate uuid
        "eventId": "53cc4db5-43d7-3569-a51c-1d76ac6f278e",//get from db
        "ticketType": {
        "id": 55,//get from db
        "name": "example"//get from db
        },
        "ticketCount": 0,
        "payment": {
        "payee": "Name",
        "amount": 0,//based on on number of tickets entered
        "currency": "LRD",
        "narration": "Ticket purchased for MLMA event",
        "appliedDiscount": 0.0,
        "appliedDiscountType": ""
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
        <button type="button" class="button" onClick={()=>{changeNumber(1)}}>Buy for Yourself</button>
        <br/><br/>
        <button type="button"class="button" onClick={()=>{changeNumber(2)}}>Buy for Others</button>
        <br/><br/></>
    }

    function buyforself () {
        return <><div class="p-6">
        <div onClick={()=>{changeNumber(0)}}>
            <Arrow/>
        </div>
        </div>
        <div class="clear-both text-lg">Buy For Yourself</div>
        <br/>
        <input class="input" placeholder="Enter Your Phone Number"/>
        <br/><br/>
        <button type="button" class="button float-right" onClick={()=>{changeNumber(3)}}>Submit</button>
        <br/><br/>
        <p class="text-sm">SMS to other networks might cost additional charges</p>
        </>
    }

    function buyforsomeone () {
        return <><div class="p-6">
        <div onClick={()=>{changeNumber(0)}}>
            <Arrow/>        
        </div>
        </div>
        <div class="clear-both text-lg">Buy For Others</div>
        <br/>
        <div class="">
        <input class="input" placeholder="Enter Your Phone Number"/>
        <p class="text-sm">Payment prompt will be sent to this number</p>
        <br/>
        <input class="input" placeholder="Enter Beneficicary Number"/>
        <br/><br/>
        <button type="button"class="button float-right" onClick={()=>{changeNumber(3)}}>Submit</button>
        <br/><br/>
        <p class="text-sm">SMS to other networks might cost additional charges</p>
        </div>
        </>
    }

    function numberOfTickets() {
        return <><div class="p-6">
        <div onClick={()=>{changeNumber(2)}}>
            <Arrow/>
        </div>
        </div>
        <div class="clear-both text-lg">Enter Number Of MLMA Tickets</div>
        <br/>
        <input class="input" placeholder="Enter Number Of Tickets To Purchase"/>
        <br/><br/>
        <button type="button" class="button float-right" onClick={()=>{changeNumber(4)}}>Submit</button>
        <br/><br/> 
        </>
    }

    function choosecurrency () {
        return <><div class="p-6">
        <div onClick={()=>{changeNumber(3)}}>
            <Arrow/>
        </div>
        </div>
        <div class="clear-both text-lg">Choose Currency</div>
        <br/><br/>
        <button type="button" class="button" onClick={()=>{changeNumber(5)}}>LRD (Amount)</button>
        <br/><br/>
        <button type="button"class="button" onClick={()=>{changeNumber(5)}}>USD (Amount)</button>
        <br/><br/></>
    }

    function promptSent() {
        return <> 
        <br/>
        <p class="text-lg">Almost Done!</p>
        <br/> 
        <p>Payment prompt sent to XXXXXXXXX</p>
        <br/><br/>
        <Link to="/"><button className="button">Go Home</button></Link>
        </>
    }
}