import './App.css';


function App(){
    return(
        <div>
        <div className="header">
          <div className="content-header">
            <a href="#" className="a-header a-hover">
              <i className="fa fa-home margin-right" />
              logo
            </a>
            <a href="#" className="a-header">
              <i className="fa fa-globe" />
            </a>
            <a href="#" className="a-header">
              <i className="fa fa-user" />
            </a>
            <a href="#" className="a-header">
              <i className="fa fa-envelope" />
            </a>
            <a href="#" className="a-header">
              <i className="fa fa-bell" />
            </a>
            <a style={{float: 'right', padding: '11px 24px'}} href="#" className="a-header">
              <img src="https://www.w3schools.com/w3images/avatar2.png" width={23} height={23} className="image-header" />
            </a>
          </div>
        </div>
        <div className="app">
          <div className="content-app">
            <div className="menu-25">
              <div className="top-menu-25">
                <h2 className="div-center">My Profile</h2>
                <p className="div-center">
                  <img src="https://www.w3schools.com/w3images/avatar3.png" style={{width: '106px', height: '106px', borderRadius: '50%'}} />
                </p>
                <hr />
                <p><i className="fa fa-pencil margin-right color " /> Designer, UI</p>
                <p><i className="fa fa-home margin-right color " /> London, UK</p>
                <p><i className="fa fa-birthday-cake margin-right color " /> April 1, 1988</p>
              </div>
              <div className="content-menu-25">
                <a href="#" className="a-25">
                  <i className="fa fa-circle-o-notch margin-right" />
                  My Groups
                </a>
                <a href="#" className="a-25">
                  <i className="fa fa-calendar-check-o margin-right" />
                  My Events
                </a>
                <a href="#" className="a-25">
                  <i className="fa fa-users margin-right" />
                  My Photos
                </a>
              </div>
              <div className="top-menu-25">
                <p>Interests</p>
                <p>
                  <span className="span-25">News</span>
                  <span className="span-25">W3Schools </span>
                  <span className="span-25">Labels</span>
                  <span className="span-25">Games</span>
                  <span className="span-25">Friends</span>
                  <span className="span-25">Games</span>
                  <span className="span-25">Friends</span>
                  <span className="span-25">Food</span>
                  <span className="span-25">Design</span>
                  <span className="span-25">Art</span>
                  <span className="span-25">Photos</span>
                </p>
              </div>
              <div className="footer-25">
                <h3>Hey!</h3>
                <p>People are looking at your profile. Find out who.</p>
                <span className="span-footer-25">
                  <i className="fa fa-remove" />
                </span>
              </div>
            </div>
            <div className="menu-57">
              <div className="content-menu-57">
                <p style={{marginTop: 0, paddingTop: '20px'}}>Social Media template by w3.css</p>
                <input type="text" style={{padding: '10px 0', width: '100%', border: '1px solid #ddd'}} placeholder="Status: Feeling Blue" />
                <button className="button-57"><i className="fa fa-pencil" />
                  post
                </button>
              </div>
              <div className="content-menu-57">
                <br />
                <div className="nam">
                  <img src="https://www.w3schools.com/w3images/avatar2.png" style={{width: '60px', float: 'left', borderRadius: '50%', marginTop: '-15px', marginRight: '10px'}} />
                  <span className="right">1 min</span>
                  <h3>John Doe</h3>
                </div>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="menu-float-small-57">
                  <img src="https://www.w3schools.com/w3images/lights.jpg" width="100%" />
                </div>
                <div className="menu-float-small-57">
                  <img src="https://www.w3schools.com/w3images/nature.jpg" width="100%" />
                </div>
                <p>
                  <button className="button3">
                    <i className="fa fa-thumbs-up" />
                    like
                  </button>
                  <button className="button3">
                    <i className="fa fa-comment" />
                    comment
                  </button>
                </p>
              </div>
              <div className="content-menu-57">
                <br />
                <div className="nam">
                  <img src="https://www.w3schools.com/w3images/avatar2.png" style={{width: '60px', float: 'left', borderRadius: '50%', marginTop: '-15px', marginRight: '10px'}} />
                  <span className="right">1 min</span>
                  <h3>John Doe</h3>
                </div>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>
                  <button className="button3">
                    <i className="fa fa-thumbs-up" />
                    like
                  </button>
                  <button className="button3">
                    <i className="fa fa-comment" />
                    comment
                  </button>
                </p>
              </div>
              <div className="content-menu-57">
                <br />
                <div className="nam">
                  <img src="https://www.w3schools.com/w3images/avatar6.png" style={{width: '60px', float: 'left', borderRadius: '50%', marginTop: '-15px', marginRight: '10px'}} />
                  <span className="right">32 min</span>
                  <h3>Angie Jane</h3>
                </div>
                <hr />
                <p>Have you seen this?</p>
                <img src="https://www.w3schools.com/w3images/nature.jpg" width="100%" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>
                  <button className="button3">
                    <i className="fa fa-thumbs-up" />
                    like
                  </button>
                  <button className="button3">
                    <i className="fa fa-comment" />
                    comment
                  </button>
                </p>
              </div>
            </div>
            <div className="menu-18 center">
              <h3>Upcoming Events:</h3>
              <img style={{marginTop: '10px'}} src="https://www.w3schools.com/w3images/forest.jpg" width="100%" />
              <h3>Holiday</h3>
              <p>Friday 15:00</p>
              <button className="button-18">info</button>
            </div>
            <div className="menu-18 center">
              <h3>Friend Request</h3>
              <img style={{marginTop: '10px'}} src="https://www.w3schools.com/w3images/avatar6.png" width="50%" />
              <p>Jane Doe</p>
              <div className="div-button">
                <button className="button50 green"><i className="fa fa-check" /></button>
                <button className="button50 red "><i className="fa fa-remove" /></button>
              </div>
            </div>
            <div style={{padding: '50px 0'}} className="menu-18 center">
              <span className="span-18">ADS</span>
            </div>
            <div className="menu-18 center">
              <p style={{fontSize: '48px'}}>
                <i className="fa fa-bug w3-xxlarge" />
              </p>
            </div>
          </div>
        </div>
        <footer className="footer">
          <h3 style={{backgroundColor: '#435761', color: '#fff', padding: '20px'}}>Footer</h3>
          <h4 style={{backgroundColor: '#5f727c', color: '#fff', padding: '20px'}}>tran nam</h4>
        </footer>
      </div>
    )
}
export default App;