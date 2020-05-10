import styled from "styled-components";
import { Navbar } from "../components/Navbar";

const Title = styled.h1`
	font-size: 50px;
`;

const Center = styled.div`
	display: grid;
	justify-items: center;
`;

const Layout = styled.div`
	display: grid;
	padding: 0 200px;
`;

const Index = () => {
	return (
		<Layout>
			<Center>
				<Navbar />
				<Title>Hey, I&apos;m Sreetam Das!👋</Title>
			</Center>
		</Layout>
	);
};

export default Index;
