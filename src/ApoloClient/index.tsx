import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ReactElement } from "react";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/'
});

type Props = {
    children: ReactElement
}

const ABApolloClient = ({ children }: Props) => {
   return(
    <ApolloProvider client={client} > {children}</ApolloProvider>
   ) 
}

export default ABApolloClient;