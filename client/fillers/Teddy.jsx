import React, {Component} from 'react';

export default class Teddy extends Component {
    render() {
        return(
            <div className="filler-image teddy">
                <div className="quote-container">
                    <span className="quote">
                        “Beethoven tells you what it's like to be Beethoven and
                        Mozart tells you what it's like to be human.
                        Bach tells you what it's like to be the universe.”
                    </span><br/>
                    <span className="quoted-person">―Douglas Adams</span>
                </div>
            </div>
        )
    }
}
