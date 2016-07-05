import React, {Component} from 'react';

export default class Bio extends Component {

  render() {

    return(
      <div className="content-wrapper">
        <div className="bio-wrapper">
          <h1>Bio</h1>

          <img className="bio-pic" src="/images/smiling-poetkoe.jpg" />

          <h3>"Do I want to listen to this myself?"</h3>
          <p>
            That's the question I always ask myself when writing a Poetkoe song. If I don't
            want to listen to it, who else would? After all I have to listen to my songs
            over and over again while producing them, so I better like them to tolerate it.
          </p>
          <p>
            I listen to all kinds of music, so I find it natural not to limit myself to
            any single genre when making music. Some days I feel like picking up the guitar and
            kicking up the distortion, some days are for laid-back electronic soundscaping.
          </p>
          <p>
            I write, play, record, produce and publish all my music myself. I enjoy playing the guitar, bass
            and keys as well as singing or even occasional rapping. I also do all the electronics and programming
            myself. I don't play drums but I beatbox when necessary ;)
          </p>
          <p>
            Doing everything myself has a its advantages – I get to have all the fun of playing every instrument!
            As Poetkoe I can also make any kinds of artistic decisions I feel like making.
          </p>
          <p>
            Not to sound too anti-social: Poetkoe is just one of the musical endeavours of mine. I have
            played in different bands doing weddings and other cover gigs for years, focusing mainly on
            vocals and keys but also occasionally guitar or bass. And our old prog-rock band Ekspansio
            in which I sing and play keys has a habbit of making a comeback gig every few years. You can check
            Ekspansio out on <a href="https://soundcloud.com/ekspansio" target="_blank">SoundCloud</a>.
          </p>
          <p>
            Listing all of my gear would be pointless, but here are the most crucial items:
            <ul className="gearlist">
              <li>MacBook</li>
              <li>GarageBand</li>
              <li>M-Audio Fast Track Pro USB audio interface</li>
              <li>Ibanez ARC500 electric guitar</li>
              <li>Ibanez EWsomething acoustic guitar, I'll have to look it up</li>
              <li>Yamaha BB450 bass (true vintage from 1979!)</li>
              <li>Clavia Nord Electro 2 keyboard</li>
              <li>Miditech Midistart 3 MIDI keyboard</li>
              <li>sE Electronics Magneto condenser microphone</li>
            </ul>
          </p>


        </div>
      </div>
    )
  }
}
