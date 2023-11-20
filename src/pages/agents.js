import { Link } from "react-router-dom";
import {Arrow} from "../assets/arrow";

export default function Agents (){
    return <div class=" h-4/5 grid">
        <div class="card">
        <div>
          <Link to="/"><Arrow/></Link>
          <div class="clear-both font-bold text-large" >Agent Sign In</div>
          <br/>
          <input type="text" class="input mb-12" placeholder="Enter Agent Number/Code" />
          <br/>
          <div>
            <div class="float-right bg-black text-white px-4 py-2 rounded">
              <button type="button" id="iu60t">SUBMIT</button>
            </div>
          </div>
          <br/>

    </div>
   </div>
   </div>
}

//onclick send change state