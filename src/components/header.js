import logo from '../assets/Logo.png'
import mtnlogo from '../assets/lonestarmtn.webp'

export default function Header(){
    return <div class="flex flex-nowrap bg-sky-400" id="">
    <div class="flex-initial w-1/2 " id="">
    <img className='w-32' src={logo}/>
    </div>
    <div class="flex-initial w-1/2" id="">
    <img class="w-24 float-right" src={mtnlogo}/>
    </div>
</div>
}