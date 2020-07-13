import React, { Component } from 'react';
import './Arts.css';
import Menu from '../../components/Menu/Menu';
import { artworks } from '../../shared/arts';



class Arts extends Component {

    render() {
        let arts = artworks.map((item, index) => {
            const style = "Element"+String(index)+" GridBox";
            return (
            <div className={style}>
                <img src={item}/>
            </div>
            );
        });

        return(
            <div>
                <div className="SmallGreenSpace"></div>
                <Menu/>
                <div className="Arts">
                    <h1>Arts</h1>
                    <div className="Wrapper E">
                        {arts}
                    </div>
                </div>
            </div>
        );
    }
}
export default Arts;