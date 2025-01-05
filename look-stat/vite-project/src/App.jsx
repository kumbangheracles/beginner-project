import { useState } from 'react';

function Nav(){
    return(
        <nav>
  <div className="logo">
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
      <path fill="#4cac3c" d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2M9 18H7v-6h2zm4 0h-2V7h2zm4 0h-2v-8h2z" />
    </svg>
    <h3>LookStat</h3>
  </div>
  <h4>OVERVIEW</h4>
  <ul className="navbar">
    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
      <path fill="currentColor" d="M224 200h-8V40a8 8 0 0 0-8-8h-56a8 8 0 0 0-8 8v40H96a8 8 0 0 0-8 8v40H48a8 8 0 0 0-8 8v64h-8a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16M160 48h40v152h-40Zm-56 48h40v104h-40Zm-48 48h32v56H56Z" />
    </svg>Dashboard</a></li>
    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path fill="currentColor" d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047a9.005 9.005 0 0 1 5.9 8.181a.75.75 0 1 1-1.499.044a7.5 7.5 0 0 0-14.993 0a.75.75 0 0 1-1.5-.045a9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5M8 8a4 4 0 1 0 8 0a4 4 0 0 0-8 0" />
    </svg>Customers</a></li>
    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
      <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="4">
        <rect width="36" height="30" x="6" y="12" rx="2" />
        <path strokeLinecap="round" d="M17.95 24.008h12M6 13l7-8h22l7 8" />
      </g>
    </svg>Advertisements</a></li>
    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
      <path fill="currentColor" d="M6.923 1.378a3 3 0 0 1 2.154 0l4.962 1.908a1.5 1.5 0 0 1 .961 1.4v6.626a1.5 1.5 0 0 1-.961 1.4l-4.962 1.909a3 3 0 0 1-2.154 0l-4.961-1.909a1.5 1.5 0 0 1-.962-1.4V4.686a1.5 1.5 0 0 1 .962-1.4zm1.795.933a2 2 0 0 0-1.436 0l-1.384.533l5.59 2.116l1.948-.834zM14 4.971L8.5 7.33v6.428q.11-.028.218-.07l4.962-1.908a.5.5 0 0 0 .32-.467zm-6.5 8.786V7.33L2 4.972v6.34a.5.5 0 0 0 .32.467l4.962 1.908q.107.042.218.07M2.564 4.126L8 6.456l2.164-.928l-5.667-2.146z" />
    </svg>Products</a></li>
    <li><a href="#"><svg style={{ transform: "scaleX(-1)" }} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <circle cx="14" cy="14" r="12" />
        <path d="m23 23l7 7" />
      </g>
    </svg>Discover</a></li>
  </ul>
  <h4>ACTIONS</h4>
  <ul className="navbar">
    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <g fill="none" stroke="#949494" strokeWidth={1.5}>
          <circle cx={12} cy={12} r={3}></circle>
          <path d="M13.765 2.152C13.398 2 12.932 2 12 2s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.092.223-.129.484-.143.863a1.62 1.62 0 0 1-.79 1.353a1.62 1.62 0 0 1-1.567.008c-.336-.178-.579-.276-.82-.308a2 2 0 0 0-1.478.396C4.04 5.79 3.806 6.193 3.34 7s-.7 1.21-.751 1.605a2 2 0 0 0 .396 1.479c.148.192.355.353.676.555c.473.297.777.803.777 1.361s-.304 1.064-.777 1.36c-.321.203-.529.364-.676.556a2 2 0 0 0-.396 1.479c.052.394.285.798.75 1.605c.467.807.7 1.21 1.015 1.453a2 2 0 0 0 1.479.396c.24-.032.483-.13.819-.308a1.62 1.62 0 0 1 1.567.008c.483.28.77.795.79 1.353c.014.38.05.64.143.863a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.092-.223.129-.483.143-.863c.02-.558.307-1.074.79-1.353a1.62 1.62 0 0 1 1.567-.008c.336.178.579.276.819.308a2 2 0 0 0 1.479-.396c.315-.242.548-.646 1.014-1.453s.7-1.21.751-1.605a2 2 0 0 0-.396-1.479c-.148-.192-.355-.353-.676-.555A1.62 1.62 0 0 1 19.562 12c0-.558.304-1.064.777-1.36c.321-.203.529-.364.676-.556a2 2 0 0 0 .396-1.479c-.052-.394-.285-.798-.75-1.605c-.467-.807-.7-1.21-1.015-1.453a2 2 0 0 0-1.479-.396c-.24.032-.483.13-.82.308a1.62 1.62 0 0 1-1.566-.008a1.62 1.62 0 0 1-.79-1.353c-.014-.38-.05-.64-.143-.863a2 2 0 0 0-1.083-1.083Z"></path>
        </g>
      </svg>Settings</a>
    </li>
    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
      <path fill="#949494" d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608a17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42a18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"></path>
     </svg>Support</a>
    </li>
    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
      <path fill="#949494" d="M1 2.828c.885-.37 2.154-.769 3.388-.893c1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493c-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752c1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81c-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02c1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877c1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"></path>
    </svg>Guide</a>
    </li>
  </ul>
</nav>
    )
}
function Head(){
    return (
        <div className='head'>
            <div className='head-content1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
	            <path fill="#949494" d="m4 10l-.707.707L2.586 10l.707-.707zm17 8a1 1 0 1 1-2 0zM8.293 15.707l-5-5l1.414-1.414l5 5zm-5-6.414l5-5l1.414 1.414l-5 5zM4 9h10v2H4zm17 7v2h-2v-2zm-7-7a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5z"></path>
            </svg>
            <h3>Website Reports</h3>
            </div>

            <div className='head-content2'>
                <div className="content-head">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <g fill="none" stroke="#949494" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                            <path d="M22 12h-6l-2 3h-4l-2-3H2"></path>
                            <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11"></path>
                        </g>
                    </svg>
                    <p>Inbox<span>^</span></p>
                </div>
                <div className="content-head">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <g fill="none" stroke="#949494" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                        <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></path>
                        <path d="M4 13h3l3 3h4l3-3h3"></path>
                    </g>
                </svg>
                    <p>Anual<span>^</span></p>
                </div>
            </div>
        </div>
    )
}
function SectionMain(){
    return (
        <div className='main-section'>
            <Head/>
        </div>
    )
}


export default function main() {
    return(
        <div className='wrapper'>
            <Nav/>
            <SectionMain/>
        </div>
    
    );
    
}

 
