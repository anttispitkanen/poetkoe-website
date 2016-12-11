import React, {Component} from 'react';
import InstagramEmbed from 'react-instagram-embed';


export default class Instagram extends Component {

/*
    displayEmbed() {
        document.getElementById('instagram-embed').classList.add('loaded');
        console.log("ig ladattu");
    }
*/

    render() {
        return(
            <div id="instagram" className="instagram clearfix">

                <InstagramEmbed
                    id="instagram-embed"
                    className="instagram-embed"
                    url='https://www.instagram.com/p/BAFIOYokfI8/'
                    maxWidth={340}
                />

                <div className="instagram-text">
                    <h2><a href="https://www.instagram.com/poetkoe" target="_blank"><i className="fa fa-instagram"></i> Instagram</a></h2>
                    <p>
                        I tend to share music-related content on Instagram along with everything else.
                        You might also see some nature, Moomin and coffee.
                    </p>
                    <p>Maisa the cat has found her way to many pictures as well.</p>
                    <p><a href="https://www.instagram.com/poetkoe" target="_blank">There's cats and stuff!</a></p>
                </div>

            </div>
        )
    }
}
