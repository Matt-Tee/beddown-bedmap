import ProviderList from "../components/ProviderList";
import React from "react";
import defaultPage from "../hocs/defaultPage";

import {
  Alert,
  Button,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  Row
} from "reactstrap";

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  onChange(e) {
    //set the state = to the input typed in the search Input Component
    //this.state.query gets passed into ProviderList to filter the results
    this.setState({ query: e.target.value.toLowerCase() });
  }
  render() {
    return (
      <div className="container-fluid">
        <Row>
          <Col>
            <ProviderList />
          </Col>
        </Row>
        <style jsx>
          {`
            .search {
              margin: 20px;
              width: 500px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default defaultPage(Index);
