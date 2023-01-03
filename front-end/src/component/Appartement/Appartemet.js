import React from 'react'

export default function Appartemet() {
  return (
    <div>
         <div>
  <div className="wrapper ">
 <div className="sidebar">
  {/*
  Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red | yellow"
    */}
  <div className="sidebar-wrapper">
    <div className="logo">
      <a href="http://www.creative-tim.com" className="simple-text logo-mini">
        CT
      </a>
      <a href="http://www.creative-tim.com" className="simple-text logo-normal">
        Creative Tim
      </a>
    </div>
    <ul className="nav">
      <li className="active ">
        <a href="./dashboard.html">
          <i className="tim-icons icon-chart-pie-36" />
          <p>Dashboard</p>
        </a>
      </li>
      <li>
        <a href="./icons.html">
          <i className="tim-icons icon-atom" />
          <p>Icons</p>
        </a>
      </li>
      <li>
        <a href="./map.html">
          <i className="tim-icons icon-pin" />
          <p>Maps</p>
        </a>
      </li>
      <li>
        <a href="./notifications.html">
          <i className="tim-icons icon-bell-55" />
          <p>Notifications</p>
        </a>
      </li>
      <li>
        <a href="./user.html">
          <i className="tim-icons icon-single-02" />
          <p>User Profile</p>
        </a>
      </li>
      <li>
        <a href="./tables.html">
          <i className="tim-icons icon-puzzle-10" />
          <p>Table List</p>
        </a>
      </li>
      <li>
        <a href="./typography.html">
          <i className="tim-icons icon-align-center" />
          <p>Typography</p>
        </a>
      </li>
      <li>
        <a href="./rtl.html">
          <i className="tim-icons icon-world" />
          <p>RTL Support</p>
        </a>
      </li>
    </ul>
  </div>
</div>

    <div className="main-panel">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-absolute navbar-transparent   ">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <div className="navbar-toggle d-inline">
              <button type="button" className="navbar-toggler">
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <a className="navbar-brand" href="#pablo">Dashboard</a>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </button>
          <div className="collapse navbar-collapse" id="navigation">
            <ul className="navbar-nav ml-auto ">
              <div className="search-bar input-group">
                {/* <input type="text" class="form-control" placeholder="Search...">
<div class="input-group-addon"><i class="tim-icons icon-zoom-split"></i></div> */}
                <button className="btn btn-link" id="search-button" data-toggle="modal" data-target="#searchModal"><i className="tim-icons icon-zoom-split" /></button>
                {/* You can choose types of search input */}
              </div>
              {/* <div class="modal fade" id="searchModal" tabindex="-1" role="dialog" aria-labelledby="searchModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
<div class="modal-content">
  <div class="modal-header">
    <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="SEARCH">
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <i class="tim-icons icon-simple-remove"></i>
    </button>
  </div>

  <div class="modal-footer">
  </div>
</div>
    </div>
  </div> */}
              <li className="dropdown nav-item">
                <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                  <div className="notification d-none d-lg-block d-xl-block" />
                  <i className="tim-icons icon-sound-wave" />
                  <p className="d-lg-none">
                    New Notifications
                  </p>
                </a>
                <ul className="dropdown-menu dropdown-menu-right dropdown-navbar">
                  <li className="nav-link">
                    <a href="#" className="nav-item dropdown-item">Mike John responded to your email</a>
                  </li>
                  <li className="nav-link">
                    <a href="#" className="nav-item dropdown-item">You have 5 more tasks</a>
                  </li>
                  <li className="nav-link">
                    <a href="#" className="nav-item dropdown-item">Your friend Michael is in town</a>
                  </li>
                  <li className="nav-link">
                    <a href="#" className="nav-item dropdown-item">Another notification</a>
                  </li>
                  <li className="nav-link">
                    <a href="#" className="nav-item dropdown-item">Another one</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown nav-item">
                <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                  <div className="photo">
                    <img src="../assets/img/anime3.png" />
                  </div>
                  <b className="caret d-none d-lg-block d-xl-block" />
                  <p className="d-lg-none">
                    Log out
                  </p>
                </a>
                <ul className="dropdown-menu dropdown-navbar">
                  <li className="nav-link">
                    <a href="#" className="nav-item dropdown-item">Profile</a>
                  </li>
                  <li className="nav-link">
                    <a href="#" className="nav-item dropdown-item">Settings</a>
                  </li>
                  <div className="dropdown-divider" />
                  <li className="nav-link">
                    <a href="#" className="nav-item dropdown-item">Log out</a>
                  </li>
                </ul>
              </li>
              <li className="separator d-lg-none" />
            </ul>
          </div>
        </div>
      </nav>
      <div className="modal fade" id="searchModal" tabIndex={-1} role="dialog" aria-labelledby="searchModal" aria-hidden="true">
        <div className="modal-dialog" role="document">
        <div className="modal-content">


<form >
<div className="modal-header">

  <input type="text" className="form-control"  
  id="inlineFormInputGroup" placeholder="SEARCH" />
  <button type="submit" >
      save
      {/* <i className="tim-icons icon-simple-remove" /> */}
  </button>

</div>
  </form>

<div className="modal-footer">
</div>
</div>
        </div>
      </div>
      {/* End Navbar */}
      <div className="content">
        <div className="row">
          <div className="col-12">
            <div className="card card-chart">
              <div className="card-header ">
                <div className="row">
                  <div className="col-sm-6 text-left">
                    {/* <h5 className="card-category">Total Shipments</h5> */}
                    <h2 className="card-title">dashboard</h2>
                  </div>
                 
                </div>
              </div>

            </div>
          </div>
        </div>
    
      </div>
      <footer className="footer">
        <div className="container-fluid">
          <nav>
            <ul>
              <li>
                <a href="https://www.creative-tim.com">
                  Creative Tim
                </a>
              </li>
              <li>
                <a href="http://presentation.creative-tim.com">
                  About Us
                </a>
              </li>
              <li>
                <a href="http://blog.creative-tim.com">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright float-right">
            ©
            made with <i className="tim-icons icon-heart-2" /> by
            <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a> for a better web.
          </div>
        </div></footer>
    </div>
  </div>
  <div className="fixed-plugin">
    <div className="dropdown show-dropdown">
      <a href="#" data-toggle="dropdown">
        <i className="fa fa-cog fa-2x"> </i>
      </a>
      <ul className="dropdown-menu">
        <li className="header-title"> Sidebar Background</li>
        <li className="adjustments-line">
          <a href="javascript:void(0)" className="switch-trigger background-color">
            <div className="badge-colors text-center">
              <span className="badge filter badge-primary active" data-color="primary" />
              <span className="badge filter badge-blue" data-color="blue" />
              <span className="badge filter badge-green" data-color="green" />
            </div>
            <div className="clearfix" />
          </a>
        </li>
        <li className="adjustments-line text-center color-change">
          <span className="color-label">LIGHT MODE</span>
          <span className="badge light-badge mr-2" />
          <span className="badge dark-badge ml-2" />
          <span className="color-label">DARK MODE</span>
        </li>
        <li className="button-container">
          <a href="https://www.creative-tim.com/product/black-dashboard" target="_blank" className="btn btn-primary btn-block btn-round">Download Now</a>
          <a href="https://demos.creative-tim.com/black-dashboard/docs/1.0/getting-started/introduction.html" target="_blank" className="btn btn-default btn-block btn-round">
            Documentation
          </a>
        </li>
        <li className="header-title">Thank you for 95 shares!</li>
        <li className="button-container text-center">
          <button id="twitter" className="btn btn-round btn-info"><i className="fab fa-twitter" /> · 45</button>
          <button id="facebook" className="btn btn-round btn-info"><i className="fab fa-facebook-f" /> · 50</button>
          <br />
          <br />
          <a className="github-button" href="https://github.com/creativetimofficial/black-dashboard" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
        </li>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}