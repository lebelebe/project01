import React, { Component } from "react";
import naviData from "./naviData.json"

class Gnblist extends Component{

    render(){
        let d2li = this.props.d1text.d2db.map((li) => (<li><a href={li.d2link}>{li.d2nm}</a></li>))
        return(
        <li>
            <a href={this.props.d1text.nmlink} className='d1'>{this.props.d1text.nm}</a>
            <ul className='d2'>
                {d2li}
            </ul>
         </li>

        )
    }
}

export default Gnblist;