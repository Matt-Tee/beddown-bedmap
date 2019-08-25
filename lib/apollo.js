import { HttpLink } from "apollo-link-http";
import { withData } from "next-apollo";

const config = {
  link: new HttpLink({
    uri: "http://beddown.digital8.com.au/graphql", // Server URL (must be absolute)
  })
};
export default withData(config);
