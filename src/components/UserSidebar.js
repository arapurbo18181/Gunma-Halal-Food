import React from 'react'
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext'

const UserSidebar = () => {
    const {UserMenu,ToggleUserMenu, setToggleUserMenu, UserImage} = useUser();
  return (
    <section className='min-w-[340px]'>
        <div className='border flex flex-col justify-center items-center space-y-2 h-[250px] bg-gradient-to-t from-emerald-800 to-emerald-300 '>
            <div className='rounded-full overflow-hidden h-40 w-40'>
                <img className='object-cover' src="https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=" alt="" />
            </div>
            <h2 className='text-white font-semibold text-xl'>John</h2>
            <h2 className='text-white font-semibold text-xl'>john@gmail.com</h2>
        </div>
        <div className='border mt-10 flex flex-col justify-start items-center'>
            {
                UserMenu.map((item, i)=>{
                    return(
                        <button onClick={()=>setToggleUserMenu(item.id)} className={`${ToggleUserMenu === i ? "bg-white text-black border border-emerald-500 rounded w-full py-2 text-xl" : "bg-gradient-to-t w-full py-2 from-emerald-500 to-emerald-200 text-xl border border-emerald-500"}`}>
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