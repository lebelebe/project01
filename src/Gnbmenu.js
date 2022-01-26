import React, { Component } from "react";
import naviData from "./naviData.json"

const navd1a = naviData.map((nav1) => {return(
        <li className={nav1.d1text.d1Class}>
            <a href={nav1.d1text.link}>{nav1.d1text.nm}</a>
            <ul>
                {
                    nav1.d1text.d2ul.map((nav2)=>{
                            return(
                                <li className={nav2.d2Class}>
                                    <a href={nav2.d2link}>{nav2.d2nm}</a>
                                </li>
                            )
                        }
                    )
                }
            </ul>
        </li>
        )
    }
)


class Gnbmenu extends Component{

    render(){

        return(
            <ul className="gnb">
                {navd1a}
            </ul>
        )
    }
}

export default Gnbmenu;