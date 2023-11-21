import { Link } from "react-router-dom"; 

export default function Home (){
 return <div class="grid grid-cols-1 gap-4 place-content-center w-full px-10 h-4/5 bg-sky-100">
 <div class="mb-14"> 
     <div class="uppercase text-lg">
       Events In the Palm of Your Hand
     </div>
 </div>
 <div class="">
     <Link to="/pay"><button type="button" class="bg-sky-400 px-4 py-2 mr-4 mb-4 rounded" id="i2q4k">Purchase Tickets</button></Link>
     <Link to="/check"><button type="button" class="bg-sky-400 px-4 py-2 rounded">Check Tickets</button></Link>
 </div>
</div>
}