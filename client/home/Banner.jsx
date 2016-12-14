import React, {Component} from 'react';



export default class Banner extends Component {

    componentDidMount() {
        let height = window.innerHeight;
        document.getElementById("home").style.height = `${height}px`;

        //let's only resize the height if it changes by more than HEIGHT_DIFFERENCE_THRESHOLD
        //this prevents the mobile browser url bar bug but doesn't prevent resizing e.g. when rotating phone
        window.addEventListener("resize", () => {

            let newHeight = window.innerHeight;
            let heightDifference = Math.abs(height - newHeight);

            const HEIGHT_DIFFERENCE_THRESHOLD = 130;

            if (heightDifference > HEIGHT_DIFFERENCE_THRESHOLD) {
                height = newHeight;
                document.getElementById("home").style.height = `${height}px`;
            }
        });
    }


    render() {
        return(
            <header className="banner" id="home">

                <div id="spinner" className="spinner"></div>
                <div className="header-logo"></div>
                <p className="header-slogan">ARTIST /// SONGWRITER /// PRODUCER</p>

            </header>
        )
    }
}
