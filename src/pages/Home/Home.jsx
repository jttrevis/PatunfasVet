import { Footer } from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { Hero } from './../../components/Hero/Hero';
import { motion as m } from 'framer-motion';

const Home = () => {
	return (
		<m.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, ease: 'easeOut' }}
			exit={{ opacity: 1 }}
		>
			<Header />
			<Hero />
			<Footer />
		</m.div>
	);
};

export default Home;
