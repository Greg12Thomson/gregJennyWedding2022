import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Rsvp from './Rsvp';
import RsvpEvening from './RsvpEvening';
import Confirmation from "./Confirmation";

export enum Pages {
  Home = "/",
  Details = "/details",
  Story = "/story",
  GettingThere = "/getting-there",
  Rsvp = "/rsvp",
  Evening = "/evening",
  Confirm = "/confirmation"
}

function NavBar() {
  return (
    <div className="home-navbar">
        <div className="content-wrapper">
            <Switch>
                <Route exact path={Pages.Home} component={Home} />
                <Route exact path={Pages.Rsvp} component={Rsvp} />
                <Route exact path={Pages.Evening} component={RsvpEvening} />
                <Route exact path={Pages.Confirm} component={Confirmation} />
                <Route render={function () {
                    return <p>404: Page Not found</p>
                }} />
            </Switch>
        </div>
    </div>
  );
}

export default NavBar;
