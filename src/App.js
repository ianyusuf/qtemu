import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="Header">
          <div className="Container">
            <div className="Logo">QTemu</div>
            <nav className="Menu-right">
              <ul>
                <li><a href="#">Create Meetup</a></li>
                <li><a href="#">Explore</a></li>
              </ul>
            </nav>
            <nav>
              <ul>
                <li><a href="#">Login</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="Space-10" />

        <div className="Container">
          <div className="Meetup">
            <div className="Meetup-container">
              <div className="Meetup-image">
                <img src="img/user.jpg"></img>
              </div>
              <div className="Meetup-desc">
                <h1>Hacktiv8 Meetup</h1>
                <table>
                  <tr>
                    <td className="Desc-left">Location</td>
                    <td className="Desc-right">Jakarta, Indonesia</td>
                  </tr>
                  <tr>
                    <td className="Desc-left">Members</td>
                    <td className="Desc-right">1,078</td> 
                  </tr>
                  <tr>
                    <td className="Desc-left">Organizers</td>
                    <td className="Desc-right">Adhy Wiranata</td> 
                  </tr>
                </table>
                <a href="#">
                  <div className="Btn Btn-primary">Join Us</div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="Space-10" />
        
        <div className="Container">
          <div className="Meetup-title">
            <h2>Next Meetup</h2>
          </div>
          <div className="Container">
            <div className="Next">
              <div className="Next-container">
                <p>Awesome meetup and event<br />
                25 January 2019<br />
                Hello, JavaScript & Node.js Ninjas!<br />
                Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018!<br /><br />
                -----<br /><br />
                See you there!<br />
                Best, Hengki, Gioovani, Sofian, Riza, Agung The JakartaJS Organizers</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="Space-10" />
        
        <div className="Container">
          <div className="Meetup-title">
            <h2>About Meetup</h2>
          </div>
          <div className="Container">
            <div className="About">
              <div className="About-container">
                <p>Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area.<br />
                Twitter: @JakartaJS and we use the hashtag #jakartajs</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="Space-10" />
        
        <div className="Container">
          <div class="Members-group">
            <div className="Members-title">
              <h2>Members</h2>
            </div>
            <div className="Members-all">
              <a href="#"><h4>See all</h4></a>
            </div>
          </div>
          <div className="Container">
            <div className="Members">
              <div className="Members-container">
                <div className="Members-image">
                  <img width="100px" src="img/members.png"></img>
                </div>
                <div className="Members-desc">
                  <h3>Hacktiv8 Meetup</h3>
                  <table>
                    <tr>
                      <td className="Members-left">Adhy Wiranata</td>
                      <td className="Members-right">4 others</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="Space-10" />
        
        <div className="Container">
          <div class="Past-group">
            <div className="Past-title">
              <h2>Past Meetups</h2>
            </div>
            <div className="Past-all">
              <a href="#"><h4>See all</h4></a>
            </div>
          </div>
          <div className="Container">
            <div className="Past">
              <div className="Past-container">
                <div className="Past-desc">
                  27 November 2017<br />
                  #39 JakartaJS April Meetup with kumparan<br />
                  139 Went<br />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="Space-10" />

      </div>
    );
  }
}

export default App;
