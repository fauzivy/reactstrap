import React, { Component, Fragment } from "react";
import axios from "axios";
import { Container, Col, Row } from "reactstrap";

class Post extends Component {
  state = { post: null };

  componentDidMount() {
    axios.get(
        "https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text"
      )
      .then((response) => this.setState({ post: response.data }));
  }

  render() {
    return (
      <Fragment>
        {this.state.post && (
          <div className="position-relative">
            <span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold">
              KOREAN DRAMA             
            </span>

            <span className="d-block pb-4 h2 text-dark border-bottom border-gray">
              TWENTY FIVE TWENTY ONE
            </span>

            <Container>
              <Row noGutters className="position-relative w-300 align-items-center">
                <Col>
                  <img
                    src="https://assets.promediateknologi.com/crop/0x0:0x0/750x500/photo/2022/03/12/1918682523.jpg"
                    alt="avatar"
                    className="img-fluid full-width full-height rounded-circle"
                    style={{ width: 120, height: 120}}
                  />
                  <br></br><center>Kim Tae Ri</center>
                </Col>
                <Col>
                  <img
                    src="https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/02/16/302184529.jpeg"
                    alt="avatar"
                    className="img-fluid full-width full-height rounded-circle"
                    style={{ width: 120, height: 120}}
                  />
                  <br></br><center>Nam Joo Hyuk</center>
                </Col>
                <Col>
                  <img
                    src="https://www.kabarbintang.id/wp-content/uploads/2022/03/bona-wjsn.jpeg"
                    alt="avatar"
                    className="img-fluid full-width full-height rounded-circle"
                    style={{ width: 120, height: 120}}
                  />
                  <br></br><center>Lee Bo Na</center>
                </Col>
                <Col>
                  <img
                    src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/01/24/1139506600.jpg"
                    alt="avatar"
                    className="img-fluid full-width full-height rounded-circle"
                    style={{ width: 120, height: 120}}
                  />
                  <br></br><center>Choi Hyun Wook</center>
                </Col>
                <Col>
                  <img
                    src="https://www.dreamers.id/img_editor/58467/images/4AAB0CEA-F0AB-451A-B3D1-E03D6881340C.jpeg"
                    alt="avatar"
                    className="img-fluid full-width full-height rounded-circle"
                    style={{ width: 120, height: 120}}
                  />
                  <br></br><center>Lee Ju Myeong</center>
                </Col>

              </Row>
              
            </Container>

            <article
              className="pt-5 text-secondary text-justify"
              style={{ fontSize: "0.9rem", whiteSpace: "pre-line" }}
            >
              {this.state.post}
            </article>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Post;
