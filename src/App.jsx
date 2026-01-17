
import './index.css'
import img1 from './images/dashboard-v1.jpg'
import { IoIosArrowDroprightCircle } from "react-icons/io"
import { IoInfiniteOutline } from "react-icons/io5";
import { TbWavesElectricity } from "react-icons/tb";
import { IoGiftOutline } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { PiHandHeartBold } from "react-icons/pi";
import { MdHowToVote } from "react-icons/md";
import { FaRegWindowRestore, FaSearch, FaStar } from "react-icons/fa";
import { FaCar, FaRegClock, FaWindows } from "react-icons/fa6";
import { MdPeople } from "react-icons/md";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { FaTag } from "react-icons/fa6";
import { LuMessageSquareLock } from "react-icons/lu";
import { LuAppWindowMac } from "react-icons/lu";
import { FaRobot } from "react-icons/fa6";
import { FaUserSecret } from "react-icons/fa6";
import { LiaSearchengin } from "react-icons/lia";


function App() {
  return (
    <>
      <Navbar />
      <FirstPage /> 
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
    </>
  )
}

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>
          UserJot
        </h2>
      </div>
     
      <nav className="nav-items">
        <ul>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
        </ul>
      </nav>
    </div>
);
}


function FirstPage() {
  return (
    <div className='overall'>
      <div className='first-div'>
        <p className='first-text'><MdMessage className='sui'/> Collect feedback <PiHandHeartBold  className='him'/> prioritize with votes <MdHowToVote className='raa' /> auto-sync your roadmap, and <FaStar className='shine' /> keep users engaged automatically</p>
      </div>
      <div className='second-div'>
        <p className='second-text'>
          UserJot is the complete feedback platform for SaaS teams. Beautiful feedback boards that organize ideas,
          roadmaps that sync automatically, changelogs that write themselves, and engagement loops that run themselves.
        </p>
      </div>
      <button className='first-button'>Get Started <IoIosArrowDroprightCircle /></button>
      <div className='text-and-icons'>
        <p><IoGiftOutline /> Free forever</p>
        <p><TbWavesElectricity /> 30-second setup</p>
        <p><IoInfiniteOutline /> Unlimited users</p>
      </div>
    </div>
  );
}

function SecondPage() {
  return (
    <div className='second-page'>
      <img src={img1} alt="Project Image" className='firstimg'/>
    </div>
    );
}



function ThirdPage() {
  return (
    <div className='third-page'>
      <div className='titlethree'>
        <h2 className='title'>Your users are telling you what to build.</h2>
        <h2 className='subtitle'>Are you listening?</h2>
      </div>
      <div className='ptag'>
        <p className='thirdpart'><strong className='strongs'>Teams using UserJot see 40% more feedback submissions</strong> because users finally have a place where 
             their voice matters. No more scattered emails, lost Slack messages, or ignored feature requests.</p>
      </div>
    </div>
  );
}

function FourthPage() {
  return (
    <div className='fourth-page'>
      <div className='icontextone'>
        <PiHandHeartBold className='touchheart'/>
        <h5>200+ votes on one idea</h5>
        <p>See what users really want, not just who shouts loudest</p>
      </div>

      <div className='icontexttwo'>
        <LuChartNoAxesCombined className='sats'/>
        <h5>10% lower churn</h5>
        <p>Users stay when they see you building their requests</p>
      </div>

      <div className='icontexttwo'>
        <FaRegClock className='clock'/>
        <h5>5 hours/week saved</h5>
        <p>Users stay when they see you building their requests</p>
      </div>

      <div className='icontexttwo'>
        <MdPeople className='people'/>
        <h5>10% lower churn</h5>
        <p>Users stay when they see you building their requests</p>
      </div> 

      <hr className='line'/>


    </div>

  );
}


function FifthPage() {
  return (
    <div className='fifth-page'>
      <div>
       <h2>Beautiful feedback boards</h2>
       <h2>where great ideas are born</h2>
      </div>
     
     <div>
      <p>Give your users a dedicated space to share ideas, vote on features they want, and see what you're building.
         Our AI-powered boards organize feedback automatically, detect duplicates, and help you discover what really 
         matters to your customers.
      </p>
     </div> 
    </div>
    );
}

function SixthPage() {
  return (
    <div className='sixth-page'>
      <div className='sixth-page-first'>
        <div>
         <PiHandHeartBold className='touchheart'/>
         <h5>10% lower churn</h5>
         <p>Users stay when they see you building their requests</p>
        </div>

        <div>
         <FaRobot className='touchheartrobot'/>
         <h5>10% lower churn</h5>
         <p>Users stay when they see you building their requests</p>
        </div>

        <div>
         <FaTag className='touchhearttag'/>
         <h5>10% lower churn</h5>
         <p>Users stay when they see you building their requests</p>
        </div>
                 
        <div>
          <MdMessage className='touchheartmessage'/>
          <h5>10% lower churn</h5>
          <p>Users stay when they see you building their requests</p>
        </div>
      </div>
      <div className='sixth-page-second'>
        <div>
          <FaUserSecret className='user-icon'/>
         <h5>10% lower churn</h5>
         <p>Users stay when they see you building their requests</p>
        </div>


        <div>
         <LuMessageSquareLock className='mlock-icon'/>
         <h5>10% lower churn</h5>
         <p>Users stay when they see you building their requests</p>
        </div>
              
        <div>
          <LiaSearchengin className='search-icon'/>
          <h5>10% lower churn</h5>
          <p>Users stay when they see you building their requests</p>
        </div>
                 
        <div>
          <LuAppWindowMac className='engine-icon'/>
          <h5>10% lower churn</h5>
         <p>Users stay when they see you building their requests</p>
        </div>
      </div> 
    </div>
  );
}

export default App