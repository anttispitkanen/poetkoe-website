import React, {Component} from 'react';
import InstagramEmbed from 'react-instagram-embed';


export default class Instagram extends Component {

    render() {
        return(
            <div id="instagram" className="instagram clearfix">

                <InstagramEmbed
                    className="instagram-embed"
                    url='https://www.instagram.com/p/BAFIOYokfI8/'
                />

                <div className="instagram-text">
                    <h2><a href="https://www.instagram.com/poetkoe" target="_blank"><i className="fa fa-instagram"></i> Instagram</a></h2>
                    <p>
                        My Instagram is mostly about music and exercise (calisthenics and mobility work are my favorites).
                        Maisa the cat has found her way to many pictures as well.
                    </p>
                    <p>I also like nature, coffee, Moomin, cartoons and comic strips.</p>
                    <p><a href="https://www.instagram.com/poetkoe" target="_blank">There's cats and stuff!</a></p>
                </div>

            </div>
        )
    }
}
