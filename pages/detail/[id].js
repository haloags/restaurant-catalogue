import Head from "next/head";
import Card from "../../components/styled/Card";
import Container from "../../components/styled/Container";
import Image from "../../components/styled/Image";

export default function Detail({ restaurant }) {
	const {
		name,
		description,
		pictureId,
		menus: { foods, drinks },
	} = restaurant;
	return (
		<Container maxWidth="80%">
			<Head>
        <title>{name}</title>
      </Head>
			<Card>
				<Image height="400px" src={`https://restaurant-api.dicoding.dev/images/large/${pictureId}`} alt={name} />

				<Container>
					<header>
						<h1>{name}</h1>
						<p>{description}</p>
					</header>
					<main>
						<h2>Informasi Menu</h2>

						<h3>Makanan</h3>
						<ul>
							{foods.map((food) => (
								<li key={food.name}>{food.name}</li>
							))}
						</ul>

						<h3>Minuman</h3>
						<ul>
							{drinks.map((drink) => (
								<li key={drink.name}>{drink.name}</li>
							))}
						</ul>
					</main>
				</Container>
			</Card>
		</Container>
	);
}

export async function getStaticPaths() {
	// call an external API endpoint to get ids of restaurants
	const response = await fetch("https://restaurant-api.dicoding.dev/list");
	const { restaurants } = await response.json();
	const ids = restaurants.map((restaurant) => restaurant.id);

	// Get the paths we want to pre-render based on ids
	return {
		paths: ids.map((id) => ({ params: { id } })),
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	// Fetch necessary data for the restaurant detail page using params.id
	const response = await fetch(`https://restaurant-api.dicoding.dev/detail/${params.id}`);
	const { restaurant } = await response.json();

	return {
		props: {
			restaurant,
		},
	};
}
