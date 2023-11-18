import { Link } from "react-router-dom"; 
import { useState } from "react";

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
        "firstName": "example",
        "lastName": "example",
        "phoneNumber": "example"
    }

    const purchase = {
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
            {
                renderSwitch(page_number)
            }
            </div>
        </div>
    
    function selectOpt () {
        return <><div class="p-6">
        <div>
            <Link to="/"><img class="float-right" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" /></Link>
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
            <img class="float-right" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" />
        </div>
        </div>
        <div class="clear-both text-lg">Buy For Yourself</div>
        <br/>
        <input class="input ml-4" placeholder="Enter Your Phone Number"/>
        <br/><br/>
        <button type="button" class="button float-right" onClick={()=>{changeNumber(3)}}>Submit</button>
        <br/><br/>
        <p class="text-sm">SMS to other networks might cost additional charges</p>
        </>
    }

    function buyforsomeone () {
        return <><div class="p-6">
        <div onClick={()=>{changeNumber(0)}}>
            <img class="float-right" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" />
        </div>
        </div>
        <div class="clear-both text-lg">Buy For Yourself</div>
        <br/>
        <div class="ml-6">
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
            <img class="float-right" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" />
        </div>
        </div>
        <div class="clear-both text-lg">Enter Number Of MLMA Tickets</div>
        <br/>
        <input class="input ml-4" placeholder="Enter Number Of Tickets To Purchase"/>
        <br/><br/>
        <button type="button" class="button float-right" onClick={()=>{changeNumber(4)}}>Submit</button>
        <br/><br/> 
        </>
    }

    function choosecurrency () {
        return <><div class="p-6">
        <div onClick={()=>{changeNumber(3)}}>
            <img class="float-right" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" />
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
        <p class="text-lg">Almost Done!</p>
        <br/><br/>
        <p>Payment prompt sent to XXXXXXXXX</p>
        <br/><br/></>
    }
}