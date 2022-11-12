import styled from 'styled-components';

const IssueListItem = ({
	issue: {
		number,
		title,
		user: { login: name },
		created_at: createdAt,
		comments,
	},
}) => {
	return (
		<Wrap>
			<div>
				<div>
					<span># {number}</span>
					<span>{title}</span>
				</div>
				<div>
					<span>작성자: {name}</span>
					<span>작성일: {createdAt}</span>
				</div>
			</div>
			<div></div>
		</Wrap>
	);
};

export default IssueListItem;

const Wrap = styled.div`
  width: 768px;

	display: flex;
	align-items: center;
`;
