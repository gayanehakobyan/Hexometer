import * as React from "react";
import {Link} from "gatsby";
import "./menuNav.css";


function MenuNav(props)
{
    let [path, setPath] = React.useState<string>("");
    let solotionsItemsRref = React.useRef(null);


    React.useEffect(() =>
    {
        // let params = new URLSearchParams(window.location.search.substring(1));
        setPath(window.location.pathname.split("/")[1] || "home");
 
    });


    const onMouseEnterHandler = () => {
        console.log("asdfgh", )
        if(solotionsItemsRref.current){
            solotionsItemsRref.current.style.display = "block"
        }
    }

    const onMouseLeaveHandler = () => {
         solotionsItemsRref.current.style.display = "none"
    }

    return (
        <>
            <div className="overlay-navigation ">
                <nav role="navigation" className="menu-nav">
                    <ul>
                        <li className={path === "about" ? "active " : "nav-link"}>
                            <Link to="/about" activeClassName="nav-link">
                                <span data-content="The beginning" className="menu-nav-item">How does it works</span>
                            </Link>
                        </li>
                        <li className={`${path === "solutions" ? "active" : ""} dropdownMenu`} onMouseEnter = {onMouseEnterHandler}  onMouseLeave = {onMouseLeaveHandler}>
                                <div className="menu-nav-item">
                                    <span className="sub-title">Solutions</span>
                                </div>
                                <ul className="subMenu" ref = {solotionsItemsRref}>
                                    <li className="nav-item">
                                        <Link to="/ecommerce-and-retail" activeClassName="active" className="nav-link">
                                            E-Commerce and retail
                                        </Link>
                                     </li>
                                     <li className="nav-item">
                                        <Link to="/agencies" activeClassName="active" className="nav-link">
                                            Agencies
                                        </Link>
                                     </li>
                                     <li className="nav-item">
                                        <Link to="/online-publishers" activeClassName="active" className="nav-link">
                                           Online publishers
                                        </Link>
                                     </li>
                            
                                </ul>
                        </li>
                        <li className={path === "pricing" ? "active" : ""}>
                            <Link to="/pricing" activeClassName="active">
                                <div className="menu-nav-item">
                                    <span className="sub-title">
                                    Pricing
                                  </span>
                                </div>
                            </Link>
                        </li>
                        <li className={path === "site-audit-tools-list" ? "active" : ""} >
                            <Link to="/site-audit-tools-list" activeClassName="active">
                                <span className="menu-nav-item">Tools</span>
                            </Link>
                        </li>
                        <li className={path === "academy/" ? "active" : ""}>
                            <Link to="/academy/" activeClassName="active">
                                <span  className="menu-nav-item">Academy</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default MenuNav;