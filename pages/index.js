import Head from "next/head";
import RestaurantList from "../components/RestaurantsList";
import Container from "../components/styled/Container";

export default function Home({restaurants}) {
  return (
    <Container maxWidth="80%" >
			<Head>
        <title>Restaurant Catalogue</title>
      </Head>
      <RestaurantList restaurants={restaurants} />
    </Container>
  )
}


export async function getStaticProps() {
 const response = await fetch('https://restaurant-api.dicoding.dev/list');
  const { restaurants } = await response.json();

  return {
    props: {
			restaurants
		},
  }
}