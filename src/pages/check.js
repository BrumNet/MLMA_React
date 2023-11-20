import { Link } from "react-router-dom";
import { Arrow } from "../assets/arrow";

export default function Check (){
    return <div class="h-4/5 grid">
        <div class="card">
        <div>
          <Link to="/"><Arrow/></Link>
          <div class="clear-both font-bold text-large" >Check Tickets</div>
          <br/>
          <input type="text" class="input" placeholder="Enter Phone Number"/>
          <br/><br/>
          <div>
            <div class="float-right bg-black text-white px-4 py-2 rounded">
              <button type="button">Send</button>
            </div>
          </div>
          <br/>

    </div>
   </div>
   </div>
}

//onclick send change state instead of link to your tickets