
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Product from "./Product";
import './index.css'
import { useState } from "react";
import img1 from './images/dashboard-v1.jpg'
import img2 from './images/dashboard v2.jpg'
import img3 from './images/my own.jpg'
import img4 from './images/dashboard-v1-changelog.jpg'
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
import { GiPodiumWinner } from "react-icons/gi";
import { LuBellRing } from "react-icons/lu";
import { FaLink } from "react-icons/fa";


function App() {
  return (
    <>


      <Routes>
        <Route path="/" element={
          <>
      <Navbar />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
      <SeventhPage />
      <EighthPage />
      <NinthPage />
      <TenthPage />
      <EleventhPage />
      <TwelfthPage />
      <ThirteenthPage />
      <FourteenthPage />
      <FifteenthPage />
      <RandomPage />
      <Features />
      <SixteenthPage />
      <ComparisonTableV2 />
      <SeventeenthPage />
      <HowItWorks />
      <EighteenthPage />
      <Pricing />
      <NinteenthPage />
      <Values />
      <TwentiethPage />
      <twentyfirstPage />
      <CTA />
      <TwentysecondPage />
      <FaqItem />
      <Footer />
          </>
        } />

        <Route path="/product" element={<Product />} />
      </Routes>
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
            <Link to="/product">Product</Link>
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

function SeventhPage() {
  return (
    <div className='second-page'>
      <img src={img2} alt="User Feedback Visualization" className='firstimg'/>
    </div>
  );
};

function EighthPage() {
  return (
<div className='third-page'>
      <div className='titlethree'>
        <h2 className='title'>A product roadmap that</h2>
        <h2 className='subtitle'>updates itself automatically.</h2>
      </div>
      <div className='ptag'>
        <p className='thirdpart'>Never update a spreadsheet again. Change feedback status → roadmap reflects it instantly. Show users what's coming and keep them engaged</p>
      </div>
    </div>
  );
};

function NinthPage() {
  return (
    <div className='sixth-page'>
      <div className='sixth-page-first'>
        <div>
         <MdHowToVote className='touchheart' id='purple'/>
         <h5>Status-based updates</h5>
         <p>Users stay when they see you building their requests</p>
        </div>

        <div>
         <GiPodiumWinner className='touchheart' id='blue'/>
         <h5>Vote visibility</h5>
         <p>Users stay when they see you building their requests</p>
        </div>

        <div>
         <LuBellRing className='touchheart' id='green'/>
         <h5>Progress notifications</h5>
         <p>Users stay when they see you building their requests</p>
        </div>

        <div>
         <LuAppWindowMac className='touchheart' id='orange'/>
         <h5>In-app roadma</h5>
         <p>Users stay when they see you building their requests</p>
        </div>




      </div>
    </div>
  );
}


function TenthPage() {
  return (
       <div className='second-page'>
      <img src={img3} alt="Project Image" className='firstimg'/>
    </div> 
  );
}

function EleventhPage() {
  return (
   <div className='third-page'>
      <div className='titlethree'>
        <h2 className='title'>AI-powered changelog that</h2>
        <h2 className='subtitle'>writes, schedules, and notifies.</h2>
      </div>
      <div className='ptag'>
        <p className='thirdpart'>The most advanced changelog tool: AI writes your posts, pulls in shipped feedback, and notifies the right users automatically. Collaborate with your team and keep customers engaged—no manual work.</p>
      </div>
    </div>
  );
}

function TwelfthPage() { 
 return (
    <div className='sixth-page'>
      <div className='sixth-page-first'>
        <div>
         <FaRobot className='touchheart' id='purple'/>
         <h5>Status-based updates</h5>
         <p>Users stay when they see you building their requests</p>
        </div>

        <div>
         <FaLink className='touchheart' id='blue'/>
         <h5>Vote visibility</h5>
         <p>Users stay when they see you building their requests</p>
        </div>

        <div>
         <LuBellRing className='touchheart' id='green'/>
         <h5>Progress notifications</h5>
         <p>Users stay when they see you building their requests</p>
        </div>

        <div>
         <LuAppWindowMac className='touchheart' id='orange'/>
         <h5>In-app roadma</h5>
         <p>Users stay when they see you building their requests</p>
        </div>




      </div>
    </div>
 );
};

function ThirteenthPage() {
  return (
           <div className='second-page'>
      <img src={img4} alt="Project Image" className='firstimg'/>
    </div> 
  );
}

function FourteenthPage() {
  return (
       <div className='third-page'>
      <div className='titlethree'>
        <h2 className='title'>Collect feedback</h2>
        <h2 className='subtitle'>wherever your users are</h2>
      </div>
      </div>
  );
};

function FifteenthPage() {
  return (
   <><div className='fifthteenth-page'>
      <div className='fifteenth-page-first'>
        <h2>Standalone feedback portal</h2>
        <p>Get your own subdomain feedback.acme.com or use ours. A beautiful, public space where users can browse all feedback, vote on favorites, and submit new ideas. No code required, just share the link</p>
      </div>
      <div className='fifteenth-page-second'>
        <h2>Embedded widget for your app</h2>
        <p>Add our widget with script src="..."/script Users submit ideas without leaving. They see the roadmap. They read changelogs. All in a beautiful floating widget that matches your brand</p>
      </div>
    </div><hr className='line' /></>

  );
};


function RandomPage() {

  return (
            <div className='fifth-page'>
      <div>
       <h2>The engagement engine that</h2>
       <h2>runs on autopilot</h2>
      </div>
     
     <div>
      <p>UserJot doesn't just collect feedback—it creates an engagement loop that keeps users coming back. All automated, no work required.
      </p>
     </div> 
    </div>
  );
};





function Features() {
  return (
    <section className="features">
      <div className="feature">
        <span className="icon blue">🔔</span>
        <h3>Instant notifications</h3>
        <p>
          When someone upvotes or comments on their idea. Users see
          that others care about their suggestions, keeping them
          engaged with your product.
        </p>
      </div>

      <div className="feature">
        <span className="icon purple">📊</span>
        <h3>Status updates</h3>
        <p>
          When their request moves to "Planned" or "In Progress".
          They see you're actively working on what they asked for,
          building trust and reducing churn.
        </p>
      </div>

      <div className="feature">
        <span className="icon green">📬</span>
        <h3>Weekly digests</h3>
        <p>
          Top new ideas to vote on each week. Keeps users checking
          back regularly even when they're not actively using
          your product.
        </p>
      </div>

      <div className="feature">
        <span className="icon orange">📣</span>
        <h3>Launch alerts</h3>
        <p>
          When you ship what they asked for. The moment that
          turns satisfied users into champions who tell others
          about your product.
        </p>
      </div>
    </section>
  );
};




function SixteenthPage() {
  return (
        <div className='fifth-page'>
      <div>
       <h2>Built for modern SaaS teams,</h2>
       <h2>not enterprise committees</h2>
      </div>
     
     <div>
      <p>We built UserJot because existing tools are either too expensive, too ugly, or too complicated. Usually all three.
      </p>
     </div> 
    </div>
  );
};

function ComparisonTableV2() {
  return (
    <section className="compare-section">
      <div className="compare-table">
        <div className="compare-row compare-header">
          <div>Feature</div>
          <div>UserJot</div>
          <div>Canny & Others</div>
        </div>

        <Row
          feature="Pricing model"
          left="∞ Unlimited users, all plans"
          right="$79+/mo for 100 users"
        />
        <Row
          feature="Setup time"
          left="⚡ 30 seconds"
          right="Days of configuration"
        />
        <Row
          feature="Design quality"
          left="✨ Beautiful, modern UI"
          right="Dated, corporate feel"
        />
        <Row
          feature="Free tier"
          left="🎁 Forever, core features"
          right="14-day trial"
        />
        <Row
          feature="Feedback → Roadmap"
          left="✓ Automatic sync"
          right="Manual updates"
        />
        <Row
          feature="Changelog included"
          left="✓ Included"
          right="Separate tool needed"
        />
        <Row
          feature="Email automation"
          left="✓ Built-in, designed"
          right="DIY or basic"
        />
        <Row
          feature="AI features"
          left="🤖 Duplicate detection, tagging"
          right="Limited or none"
        />
        <Row
          feature="Target market"
          left="🚀 Modern SaaS teams"
          right="Enterprise focus"
        />
      </div>
    </section>
  );
}

function Row({ feature, left, right }) {
  return (
    <div className="compare-row">
      <div className="compare-feature">{feature}</div>
      <div className="compare-left">{left}</div>
      <div className="compare-right">{right}</div>
    </div>
  );
}


function SeventeenthPage() {
  return (
            <div className='fifth-page'>
      <div>
       <h2>Up and running</h2>
       <h2>in 30 seconds.</h2>
      </div>
      </div>
  );
}


function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="steps">
        <div className="step">
          <div className="step-number blue">1</div>
          <h3>Create workspace</h3>
          <p>
            Sign up with just an email. Pick a name. That’s it. No credit card,
            no sales call, no 47-field form.
          </p>
        </div>

        <div className="step">
          <div className="step-number purple">2</div>
          <h3>Add to your app</h3>
          <p>
            Copy one line of code for the widget, or just share your board link.
            Both work instantly.
          </p>
        </div>

        <div className="step">
          <div className="step-number green">3</div>
          <h3>Watch magic happen</h3>
          <p>
            Users start submitting. Votes pile up. You ship features. Users get
            notified. Churn drops.
          </p>
        </div>
      </div>

      <div className="callout">
        Seriously, it’s that simple. Our average customer is collecting feedback
        within 2 minutes of signing up.
      </div>
    </section>
  );
};

function EighteenthPage() {

  return (
    <div className='fifth-page'>
      <div>
       <h2>Pricing that doesn't punish growth</h2>
      </div>
     
     <div>
      <p>Unlimited users on every plan. Because charging per user for a feedback tool is like charging per customer for a store. It's backwards.
      </p>
     </div> 
    </div>
  );
};

function Pricing() {
  return (
    <div className="pricing-wrapper">
      <div className="pricing-columns">
        {/* Free */}
        <div className="pricing-col">
          <h3 className="plan-title">Free</h3>

          <div className="price-line">
            <span className="currency">$</span>
            <span className="price">0</span>
            <span className="per">per month</span>
          </div>

          <p className="plan-desc">Free, forever.</p>

          <h4 className="included">What's included</h4>
          <ul className="features">
            <li><span className="check" />Unlimited Posts</li>
            <li><span className="check" />Unlimited Users</li>
            <li><span className="check" />3 Admin Roles</li>
            <li><span className="check" />2 Feedback Boards</li>
            <li><span className="check" />Roadmap</li>
            <li><span className="check" />Changelog</li>
          </ul>

          <button className="btn">Get Free <span>›</span></button>
        </div>

        {/* Starter */}
        <div className="pricing-col">
          <h3 className="plan-title">Starter</h3>

          <div className="price-line">
            <span className="currency">$</span>
            <span className="price">29</span>
            <span className="per">per month</span>
          </div>

          <p className="plan-desc">For small teams.</p>

          <h4 className="included">What's included</h4>
          <ul className="features">
            <li><span className="check" />Custom Domain</li>
            <li><span className="check" />Guest Posting</li>
            <li><span className="check" />Automatic Login</li>
            <li><span className="check" />5 Feedback Boards</li>
            <li><span className="check" />Private Boards</li>
            <li><span className="check" />One Integration</li>
          </ul>

          <button className="btn">Get Starter <span>›</span></button>
        </div>

        {/* Professional */}
        <div className="pricing-col">
          <h3 className="plan-title">Professional</h3>

          <div className="price-line">
            <span className="currency">$</span>
            <span className="price">59</span>
            <span className="per">per month</span>
          </div>

          <p className="plan-desc">For growing teams.</p>

          <h4 className="included">What's included</h4>
          <ul className="features">
            <li><span className="check" />Unlimited Boards</li>
            <li><span className="check" />Advanced Search</li>
            <li><span className="check" />Single Sign-On</li>
            <li><span className="check" />Unlimited Integrations</li>
            <li><span className="check" />Unlimited Admin Roles</li>
            <li><span className="check" />Public identity masking</li>
          </ul>

          <button className="btn">Get Pro <span>›</span></button>
        </div>
      </div>
    </div>
  );
}


function NinteenthPage() {
  return (
            <div className='fifth-page'>
      <div>
       <h2>Built by a team that gets it</h2>
      </div>
     
     <div>
      <p>UserJot is built by an indie SaaS founder who got tired of expensive, bloated feedback tools. We use UserJot to build UserJot. Every feature exists because we needed it.
      </p>
     </div> 
    </div>

  );
};



function Values() {
  return (
    <div className="values-wrapper">
      <div className="values-grid">
        <div className="value-item">
          <div className="icon green">$</div>
          <h4>Indie-friendly pricing</h4>
          <p>We know every dollar counts when you're bootstrapping</p>
        </div>

        <div className="value-item">
          <div className="icon purple">★</div>
          <h4>Design-obsessed</h4>
          <p>Beautiful software makes users want to participate</p>
        </div>

        <div className="value-item">
          <div className="icon orange">⚡</div>
          <h4>Ship fast philosophy</h4>
          <p>We ship updates weekly based on your feedback</p>
        </div>

        <div className="value-item">
          <div className="icon red">❤</div>
          <h4>Customer-funded</h4>
          <p>No VCs means we optimize for you, not an exit</p>
        </div>
      </div>
    </div>
  );
}

function TwentiethPage() {

  return ( 
            <div className='fifth-page'>
      <div>
       <h2>Stop losing customers to silence</h2>
      </div>
     
     <div>
      <p>When users take time to share feedback, they're invested in your success. When you show them you're listening—really listening—they become your biggest champions. That's not just good product management. That's good business.
      </p>
     </div> 
    </div>
  );
}

function twentyfirstPage() {

  return (
    <div className='second-page'>
      <img src={img1} alt="Project Image" className='firstimg'/>
    </div>
  );
}

function CTA() {
  return (
    <div className="cta-container">
      <button className="cta-button">
        Start Building What Users Want
        <span className="cta-arrow">→</span>
      </button>

      <p className="cta-subtext">
        Free forever · No credit card · 30-second setup
      </p>
    </div>
  );
}


function TwentysecondPage() {
return (
            <div className='fifth-page'>
      <div>
       <h2>Frequently asked questions</h2>
      </div>
     
     <div>
      <p>Everything you need to know about customer feedback management and how UserJot helps you build better products.
      </p>
     </div> 
    </div>

)
};


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <div className="logo-circle">●</div>
        </div>

        {/* Product */}
        <div className="footer-column">
          <h4>Product</h4>
          <ul>
            <li>Get Started</li>
            <li>Customer Feedback</li>
            <li>Product Roadmap</li>
            <li>Product Changelog</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>Help</li>
            <li>SDKs</li>
            <li>Pricing</li>
            <li>Feedback</li>
            <li>Roadmap</li>
            <li>Updates</li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>Blog</li>
            <li>Contact</li>
            <li>Status</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Tools</li>
          </ul>
        </div>

        {/* Compare */}
        <div className="footer-column">
          <h4>Compare</h4>
          <ul>
            <li>Canny Alternative</li>
            <li>UserVoice Alternative</li>
            <li>Nolt Alternative</li>
            <li>Aha! Alternative</li>
            <li>Productboard Alternative</li>
            <li>Pendo Alternative</li>
            <li>Other Alternatives</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};




function FaqItem() {
  const [open, setOpen] = useState(true);

  return (
    <div className="faq-wrapper">
      <div className="faq-item">
        <div
          className="faq-header"
          onClick={() => setOpen(!open)}
        >
          <h4>Does UserJot offer feedback tracking?</h4>
          <span className={`chevron ${open ? "rotate" : ""}`}>⌃</span>
        </div>

        <div className={`faq-content ${open ? "open" : ""}`}>
          <p>
            Yes, UserJot provides easy-to-use feedback tracking features. You
            can organize, categorize, and track all user feedback in one
            place, ensuring nothing important gets lost.
          </p>
        </div>
      </div>
    </div>
  );
};







export default App