import { useEffect, useState } from 'react';
import { getIssueList } from '../utils/api/apis';
import styled from 'styled-components';
import IssueListItem from '../components/IssueList/IssueListItem';

const DEFAULT_ISSUE_STATE = 'open';
const DEFAULT_SORT_TYPE = 'comments';

const IssueList = () => {
	const [issueList, setIssueList] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		const fetchIssueList = async () => {
			const { data: fetchedIssueList } = await getIssueList(
				currentPage,
				DEFAULT_SORT_TYPE
			);

			setIssueList([...issueList, ...fetchedIssueList]);
		};

		fetchIssueList();
	}, [currentPage]);

	return (
		<Wrap>
			{issueList.map((issue) => (
				<IssueListItem key={issue.id} issue={issue} />
			))}
		</Wrap>
	);
};

export default IssueList;

const Wrap = styled.div`
	display: flex;
	flex-direction: column;
`;
