// import React from "react"
// import "./header.css"

// import SearchIcon from "@mui/icons-material/Search"
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
// import AccountBoxIcon from "@mui/icons-material/AccountBox"
// import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle"
// const Header = () => {
//   return (
//     <div className="header_outer_container">
//       <div className="header_container">
//         <div className="header_left">
//           <ul>
//             {/* <li><image src {NteflixLogo} alt="Netflix Logo" width="100"/></li> */}
//             <li>Nteflex</li>
//             <li>Home</li>
//             <li>TVShows</li>
//             <li>Muovies</li>
//             <li>Latest</li>
//             <li>MyList</li>
//             <li>Browse by languages</li>
//           </ul>
//         </div>
//         <div className="header_right">
//           <ul>
//             <li>SearchIcon</li>
//             <li>NotificationsNoneIcon</li>
//             <li>AccountBoxIcon</li>
//             <li>ArrowDropDownIcon</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Header

import React from "react"
import "./header.css"

import SearchIcon from "@mui/icons-material/Search"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import AccountBoxIcon from "@mui/icons-material/AccountBox"
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle"
import image from "..//..//assets/netflix.jpg"
const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={image} alt="Netflix Logo" width="100" />
            </li>
            <li>Nteflex</li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Muovies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownCircleIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
