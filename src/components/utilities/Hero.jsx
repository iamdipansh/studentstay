import SearchIcon from '@mui/icons-material/Search';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const Hero = () => {
  return (
    <div className='w-full h-72  flex flex-col items-center justify-center'>
        <div className=' mb-6'>
          <ToggleGroup variant="outline" type="multiple" className='gap-4'>
            <ToggleGroupItem value="flat" className='px-6 rounded-3xl border-sky-500'> Flat </ToggleGroupItem>
            <ToggleGroupItem value="pg" className='px-6 rounded-3xl border-sky-500'> PGs </ToggleGroupItem>
            <ToggleGroupItem value="rk" className='px-6 rounded-3xl border-sky-500'> RKs </ToggleGroupItem>
            <ToggleGroupItem value="hostel" className='px-6 rounded-3xl border-sky-500'> Hostels </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className='border-2 border-sky-500 w-[900px] h-[62px] px-12 rounded-[32px] flex items-center justify-between'>
          <div className=' pr-12 flex gap-1 border-r-2 border-blue-900'><FmdGoodIcon /><p>Indore</p></div>
          <input type="text" placeholder='Enter location in Indore' className=' w-full mx-6 h-12 outline-none ' />
          <SearchIcon />
        </div>
      </div>
  )
}

export default Hero