import React, { Component, Fragment } from "react";

import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from "reactstrap";

const BANNER = "https://i.pinimg.com/736x/13/be/84/13be84d59969b40c8db7f426bc18e167.jpg";

class SideCard extends Component {

  constructor(){
    super()

    this.state = {
      isActive: ""
    }
  }

  click(){
      this.setState({isActive: "btn-success"});
      console.log(this.state.isActive);
  }

  render() {
    return (
      <Fragment>
        <Card>
          <CardImg top width="100%" src={BANNER} alt="banner" />
          <CardBody>
            <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">
              TWENTY FIVE TWENTY ONE
            </CardTitle>
            <CardSubtitle
              className="text-secondary mb-3 font-weight-light text-uppercase"
              style={{ fontSize: "0.8rem" }}
            >
              2022
            </CardSubtitle>
            <CardText
              className="text-secondary mb-4"
              style={{ fontSize: "0.75rem" }}
            >
              "Twenty-Five, Twenty-One" tells a love story between Na Hee-Do (Kim Tae-Ri) and Back Yi-Jin (Nam Joo-Hyuk).
            </CardText>
            <Button onClick={() => this.click()} className={"font-weight-bold" + this.isActive}>
              Add to Favorites
            </Button>
          </CardBody>
        </Card>
      </Fragment>
    )
  }
 
}

export default SideCard;
