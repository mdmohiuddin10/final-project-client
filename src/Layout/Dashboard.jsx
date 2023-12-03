
import useAdmin from '../Hooks/useAdmin';
import { FaAd, FaBook, FaCalendar, FaEdit, FaEnvelope, FaEnvelopeOpen, FaFileContract, FaGrinHearts, FaHeart, FaHistory, FaHome, FaList, FaPaypal, FaShoppingCart, FaUsers } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  const [isAdmin] = useAdmin()
  const { logOut } = useContext(AuthContext)
  const handleLogout = () => {
    logOut();
  }
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#D1A054] pt-10">
        <h2 className="text-3xl font-bold text-center">Porinhoy.com</h2>
        <ul className="menu text-xl px-5 space-y-5 mt-5">
          {
            isAdmin ? <>
              <div className='flex items-center gap-2'>
                <FaHome></FaHome>
                <li className='flex gap-2'><NavLink to={'/dashboard/admin home'}>
                  Admin Home</NavLink>
                </li>
              </div>
              <div className='flex items-center gap-2'>
                <FaUsers></FaUsers>
                <li><NavLink to={'/dashboard/manage users'}>
                  Manage users</NavLink>
                </li>
              </div>
              <div className='flex items-center gap-2'>
                <FaList></FaList>
                <li><NavLink to={'/dashboard/approve'}>
                  Approved Premium</NavLink>
                </li>
              </div>
              <div className='flex items-center gap-2'>
                <FaEnvelopeOpen></FaEnvelopeOpen>
                <li><NavLink to={'/dashboard/Approve request contact'}>
                  Approved Contact Request</NavLink>
                </li>
              </div>
              <div className='flex items-center gap-2'>
                <FaHistory></FaHistory>
                <li><NavLink to={'/dashboard/success story'}>
                  success story</NavLink>
                </li>
              </div>
              <div className='flex items-center gap-2'>
                <FaList></FaList>
                <li onClick={handleLogout}><NavLink to={''}>
                  Log Out</NavLink>
                </li>
              </div>
            </>
              :
              <>
                <div className='flex items-center gap-2'>
                  <span><FaEdit></FaEdit></span>
                  <li className='flex-row'><NavLink to={'/dashboard/edit data'}>
                    Edit Biodata</NavLink>
                  </li>
                </div>
                <div className='flex items-center gap-2'>
                  <FaBook></FaBook>
                  <li><NavLink to={'/dashboard/view data'}>
                    View Biodata</NavLink>
                  </li>
                </div>
                <div className='flex items-center gap-2'>
                  <FaFileContract></FaFileContract>
                  <li><NavLink to={'/dashboard/contact request'}>
                    My Contact Request</NavLink>
                  </li>
                </div>
                <div className='flex items-center gap-2'>
                  <FaHeart></FaHeart>
                  <li><NavLink to={'/dashboard/favourite data'}>
                    Favourites Biodata</NavLink>
                  </li>
                </div>
                <div className='flex items-center gap-2'>
                  <FaGrinHearts></FaGrinHearts>
                  <li><NavLink to={'/dashboard/Got Married'}>
                    Got Married</NavLink>
                  </li>
                </div>
                <div className='flex items-center gap-2'>
                  <FaList></FaList>
                  <li onClick={handleLogout}><NavLink to={''}>
                    Log Out</NavLink>
                  </li>
                </div>
              </>
          }

          {/* shared nav links */}
          <div><hr className='font-bold text-slate-400' /></div>

          <div className='flex items-center gap-2'>
            <span><FaHome></FaHome></span>
            <li className=''><NavLink to={'/'}>
              Home</NavLink>
            </li>
          </div>
          <div className='flex items-center gap-2'>
            <FaBook></FaBook>
            <li><NavLink to={'/About Us'}>
              About Us</NavLink>
            </li>
          </div>
          <div className='flex items-center gap-2'>
            <FaEnvelope></FaEnvelope>
            <li><NavLink to={'/contact us'}>
              Contact</NavLink>
            </li>
          </div>

        </ul>

      </div >
      {/* dashboard content */}
      < div className="flex-1 pt-10" >
        <Outlet></Outlet>
      </div >
    </div >
  );
};

export default Dashboard;










