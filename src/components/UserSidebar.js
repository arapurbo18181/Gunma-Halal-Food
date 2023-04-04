import React from 'react'
import { Link } from 'react-router-dom';
import { useApi } from '../context/ApiContext';

const UserSidebar = () => {
    const {UserMenu,ToggleUserMenu, setToggleUserMenu, UserImage, UserEmail, UserData} = useApi();
  return (
    <section className='w-full flex xl:flex-col justify-center items-center xl:items-start space-x-2'>
        <div className='border flex-1 flex flex-col justify-center items-center space-y-2 h-[250px] w-full xl:w-[250px] py-2 px-2 bg-gradient-to-t from-emerald-800 to-emerald-300 '>
            <div className='rounded-full overflow-hidden h-24 w-24 md:h-32 md:w-32 xl:h-40 xl:w-40 '>
                <img className='object-cover' src="https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=" alt="" />
            </div>
            <h2 className='text-white font-semibold text-xl'>{UserData.name}</h2>
            <h2 className='text-white font-semibold text-xl'>{UserData.email}</h2>
        </div>
        <div className='flex-1 mt-10 flex flex-col md:flex-row xl:flex-col justify-start items-center md:space-x-6 space-y-2 xl:space-x-0'>
            {
                UserMenu.map((item, i)=>{
                    return(
                        <button key={i} onClick={()=>setToggleUserMenu(item.id)} className={`${ToggleUserMenu === i ? "bg-white text-black border border-emerald-500 rounded w-full py-2 text-sm md:text-base xl:text-xl px-4" : "bg-gradient-to-t w-full py-2 from-emerald-500 to-emerald-200 text-sm md:text-base xl:text-xl border border-emerald-500 px-4"}`}>
                            {item.tab}
                        </button>
                    )
                })
            }
        </div>
    </section>
  )
}

export default UserSidebar