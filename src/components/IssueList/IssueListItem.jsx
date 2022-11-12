import styled from 'styled-components';

const IssueListItem = ({
	issue: {
		number,
		title,
		user: { login: name },
		created_at: createdAt,
		comments,
	},
	onClick,
}) => {
	return (
		<>
			<Wrap
				onClick={() => {
					onClick(number);
				}}
			>
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
				<WrapComments>
					<span>코멘트: {comments}</span>
				</WrapComments>
			</Wrap>
			<hr />
		</>
	);
};

export default IssueListItem;

const Wrap = styled.div`
	border-radius: 8px;
	padding: 1rem;
	cursor: pointer;

	display: flex;
	align-items: center;
	justify-content: space-between;

	&:hover {
		background-color: #e2e5e6;
	}
`;

const WrapComments = styled.div`
	margin: 1rem;
`;
