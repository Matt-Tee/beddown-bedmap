import gql from "graphql-tag";
import Link from "next/link";
import { graphql } from "react-apollo";
import {
  Button,
  Card,
  CardBody,
  CardColumns,
  CardImg,
  CardSubtitle
} from "reactstrap";
import { CardText, CardTitle, Col, Row } from "reactstrap";

// const Nominatim = require('nominatim-geocoder')
// const geocoder = new Nominatim()

// geocoder.search( { q: '11 hardgrave rd, west end 4101' } )
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

const ProviderList = (
  { data: { loading, error, providers } },
  req
) => {
  if (error) return "Error loading providers";
  //if providers are returned from the GraphQL query, run the filter query
  //and set equal to variable providerSearch

  if (providers && providers.length) {
    return (
      <div>
        <div className="h-100">
          {providers.map(res => {
            let imageUrl = res.image ? res.image.url : '/uploads/09186112bef94b1491ce6d928a7b3b43.jpg'
            return (
              <Card
                style={{ width: "30%", margin: "0 10px" }}
                className="h-100"
                key={res.id}
              >
                <CardImg
                  top={true}
                  style={{ height: 250 }}
                  src={`http://beddown.digital8.com.au${imageUrl}`}
                />
                <CardBody>
                  <CardTitle>{res.name}</CardTitle>
                  <CardText>{res.description}</CardText>
                </CardBody>
                <div className="card-footer">
                  <Link href={`/providers?id=${res.id}`}>
                    <a className="btn btn-primary">View</a>
                  </Link>
                </div>
              </Card>
            )}
          )}
        </div>

        <style jsx global>
          {`
            a {
              color: white;
            }
            a:link {
              text-decoration: none;
              color: white;
            }
            a:hover {
              color: white;
            }
            .card-columns {
              column-count: 3;
            }
          `}
        </style>
      </div>
    );
  }
  return <h1>Loading</h1>;
};

const query = gql`
  {
    providers {
      id
      name
      description
      geoLocation
      image {
        url
      }
    }
  }
`;

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (ProviderList)
export default graphql(query, {
  props: ({ data }) => ({
    data
  })
})(ProviderList);
