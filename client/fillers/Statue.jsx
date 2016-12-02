import React, {Component} from 'react';

export default class Statue extends Component {
    render() {
        return(
            <div className="filler-image statue">
                <div className="quote-container">
                    <span className="quote">
                        “If I were not a physicist, I would probably be a musician.
                        I often think in music. I live my daydreams in music.
                        I see my life in terms of music.”
                    </span><br/><br/>
                    <span className="quoted-person">―Albert Einstein</span>
                </div>
            </div>
        )
    }
}
