import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import IssueDetail from './pages/IssueDetail';
import IssueList from './pages/IssueList';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<IssueList />} />
					<Route path="/:issueNumber" element={<IssueDetail />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
