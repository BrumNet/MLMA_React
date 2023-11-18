import { Link } from "react-router-dom";

export default function Check (){
    return <div class=" h-4/5 grid">
        <div class="card">
        <div class="gjs-cell">
          <Link to="/"><img id="ioqn" class="float-right" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+"/></Link>
          <div class="clear-both" >Check Tickets</div>
          <br/>
          <input type="text" class="border-2 rounded h-10 w-64 mb-3" id="iyuv" placeholder="Enter Phone Number" />
          <br/>
          <div class="gjs-row" id="i783">
            <div class="float-right bg-black text-white px-4 py-2 mr-6 rounded">
              <button type="button" id="iu60t">Send</button>
            </div>
          </div>
          <br/>

    </div>
   </div>
   </div>
}

//onclick send change state