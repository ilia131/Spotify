import {useState} from 'react'
import images from './Svgs'

const SideBar = () => {
  const [array , setArray] = useState([
    {title: 'Pins', svg:images.logo1},
    {title: 'PlayLists', svg:images.logo1},
    {title: 'Liked songs', svg:images.logo1},
    {title: 'Saves', svg:images.logo1},
    {title: 'Albums', svg:images.logo1},
    {title: 'Folders', svg:images.logo1},
    {title: 'PodCasts', svg:images.logo1},
    {title: 'Audiobooks', svg:images.logo1},
    {title: 'Artists', svg:images.logo1},
  ])
  return (
    <div 
     className='w-[259px] h-[957px]  bg-[#000000] pr-[7px] pl-[4px] pt-[18px]'
    >
      <div className='h-[40px] w-[248px]  flex items-center justify-between pr-[18px]'
          
      >
        <div className='w-[77px] h-[40px]  flex items-center gap-[10px] pl-[12px]'>
            <div>
             <img src={images.logo1}/>
           </div>
           <p className='text-[#898989] font-primaryRegular'>Pins</p>
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
        <path d="M2.11076 12.2567L7.16211 7.20536L2.11076 2.15401" stroke="#898989" stroke-width="2.3573" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
      </div>
      {/* */}
      <div className='h-[40px] w-[248px]  flex items-center justify-between pr-[18px] mt-[11px]'
          
      >
        <div className='w-[77px] h-[40px]  flex items-center gap-[10px] pl-[12px]'>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" viewBox="0 0 23 25" fill="none">
<rect width="20" height="20" rx="3" transform="matrix(1 0 0 -1 1.07568 23.7405)" stroke="#898989" stroke-width="2" stroke-linejoin="round"/>
<path d="M3.07568 3.74048H19.0757V3.74048C19.0757 2.08362 17.7325 0.740478 16.0757 0.740478H6.07568C4.41883 0.740478 3.07568 2.08362 3.07568 3.74048V3.74048Z" stroke="#898989" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M11.5883 14.6964V9.36548C11.5883 9.0203 11.8681 8.74048 12.2133 8.74048H14.3297M11.5883 14.6964V17.7134C11.5883 18.2682 11.1944 18.7517 10.6397 18.7393C9.67772 18.7179 8.32971 18.3842 8.32971 16.6817C8.32971 14.0346 11.5883 14.6964 11.5883 14.6964Z" stroke="#898989" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
           </div>
           <p className='text-[#898989] font-primaryRegular'>PlayLists</p>
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
        <path d="M2.11076 12.2567L7.16211 7.20536L2.11076 2.15401" stroke="#898989" stroke-width="2.3573" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
      </div>
    </div>
  )
}

export default SideBar