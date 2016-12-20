import React, {Component} from 'react';



export default class Banner extends Component {

    constructor() {
        super();
        this.state = {
            catShowing: false
        }
    }

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

    //this function shows the hidden cat when the main logo is double clicked
    //and hides it after six seconds
    showCat(event) {
        event.preventDefault();

        if(!this.state.catShowing) {
            document.getElementById('hidden-cat').classList.remove('hidden');
            this.setState( { catShowing: true } );

            setTimeout(() => {
                document.getElementById('hidden-cat').classList.add('hidden');
                this.setState( { catShowing: false } );
            }, 6000);

        }


    }


    render() {
        return(
            <header className="banner" id="home">

                <div id="spinner" className="spinner"></div>

                <div id="hidden-cat" className="hidden-cat hidden">
                    <img src="images/hidden-cat.png"></img>
                    <p>You found the hidden cat! Meow! :DD</p>
                </div>

                <div className="header-logo" onDoubleClick={this.showCat.bind(this)}></div>
                <p className="header-slogan">ARTIST /// SONGWRITER /// PRODUCER</p>

            </header>
        )
    }
}
