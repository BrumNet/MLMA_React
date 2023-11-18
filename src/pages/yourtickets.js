export default function MyTickets (){
    return <div class=" h-4/5 grid">
        <div class="card">
        <div class="gjs-cell">
          <img id="ioqn" class="float-right" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+"/>
          <div class="clear-both" >Your Tickets</div>
          <br/>
          {["Sample Ticket 1","Sample Ticket 3","Sample Ticket 3",].map((x) => 
            <p>{x}</p>
          )}
          <br/>
          <div class="gjs-row" id="i783">
            <div class="float-right bg-black text-white px-4 py-2 mr-6 rounded">
              <button type="button" id="iu60t">BACK</button>
            </div>
          </div>
          <br/>

    </div>
   </div>
   </div>
}