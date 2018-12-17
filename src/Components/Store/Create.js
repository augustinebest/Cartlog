import React from 'react';
// import { NavLink } from 'react-router-dom';
import BodyWrapper from './bodyWrapper';

class Store extends React.Component {
    render() {
        return (
            <div>
                
          <div className="card">
            <div className="card-header card-header-primary">
              Manager
            </div><br /><br />
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                <form className="navbar-form">
                <div className="input-group no-border">
                <input type="text" className="form-control" placeholder="Business Name" />
              </div><br /><br />

              <div className="input-group no-border">
                <input type="text" className="form-control" placeholder="Gender" />
              </div><br /><br />

              <div className="input-group no-border">
                <input type="text" className="form-control" placeholder="Business Size" />
              </div><br /><br />

              <div className="input-group no-border">
                <input type="text" className="form-control" placeholder="Business name" />
              </div>
            </form>
                </div>
                <div className="col-md-6">
                  <h4 className="card-title">Notification states</h4>
                  <div className="alert alert-info">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <i className="material-icons">close</i>
                    </button>
                    <span>
                      <b> Info - </b> This is a regular notification made with ".alert-info"</span>
                  </div>
                  <div className="alert alert-success">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <i className="material-icons">close</i>
                    </button>
                    <span>
                      <b> Success - </b> This is a regular notification made with ".alert-success"</span>
                  </div>
                  <div className="alert alert-warning">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <i className="material-icons">close</i>
                    </button>
                    <span>
                      <b> Warning - </b> This is a regular notification made with ".alert-warning"</span>
                  </div>
                  <div className="alert alert-danger">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <i className="material-icons">close</i>
                    </button>
                    <span>
                      <b> Danger - </b> This is a regular notification made with ".alert-danger"</span>
                  </div>
                  <div className="alert alert-primary">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <i className="material-icons">close</i>
                    </button>
                    <span>
                      <b> Primary - </b> This is a regular notification made with ".alert-primary"</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        )
    }
}

export default BodyWrapper(Store);