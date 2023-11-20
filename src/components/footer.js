import { Link } from "react-router-dom"

export default function Footer () {
    return  <div class="bg-black min-h-2/5 text-white p-4">
    <div class="float-left w-1/2">
      <h1 class="text-lg">Contact Us For Assistance</h1>
      <br/>
      info@tech231liberia.com<br/>
      CopyRight @ 2023<br/><br/>
     2023 Tech231 Libera Ltd<br/>
     Committed to People, Committed to the Future<br/>
     Your Success is our business!
    </div>
     <div class="float-right">
         <Link to="/agents"><u>Agents SignIn</u></Link>
     </div>
     <div className="clear-both"></div>
   </div>
}