import gql from "graphql-tag";
import { withRouter } from "next/router";
import { graphql } from "react-apollo";
import { compose } from "recompose";

import {
  Button,
  Card,
  CardBody,
  CardColumns,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row
} from "reactstrap";

class Providers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      data: { loading, error, provider },
      router,
      context,
      isAuthenticated
    } = this.props;
    if (error) return "Error Loading Provider Info";

    if (provider) {
      return (
        <>
          <h1>{provider.name}</h1>
          <Row>
            <Col xs="9" style={{ padding: 0 }}>
              <div style={{ display: "inline-block" }} className="h-100">
                mmm put stuff here
              </div>
            </Col>
          </Row>
        </>
      );
    }
    return <h1>Loading</h1>;
  }
}

const GET_PROVIDER_AVAILABILITY = gql`
  query($id: ID!) {
    provider(id: $id) {
      id
      name
      description
      image {
          url
      }
    }
  }
`;
// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (ProviderList)

export default compose(
  withRouter,
  graphql(GET_PROVIDER_AVAILABILITY, {
    options: props => {
      return {
        variables: {
          id: props.router.query.id
        }
      };
    },
    props: ({ data }) => ({ data })
  })
)(Providers);