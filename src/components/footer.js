import { Link } from "react-router-dom"

export default function Footer () {
    return  <div class="bg-black h-2/5 text-white p-4">
    <div class="float-left w-1/2">
      <h1 class="text-lg">Call Us For Assistance</h1>
      <br/>
      CopyRight @ 2023<br/><br/>
      info@tech231liberia.com<br/><br/>
     2023 Tech231 Libera Ltd<br/>
     Committed to People, Committed to the Future<br/>
     Your Success is our business!
    </div>
     <div class="float-right">
         <Link to="/agents">Agents SignIn</Link>
     </div>
   </div>
}