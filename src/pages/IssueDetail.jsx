import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getIssueDetail } from '../utils/api/apis';
import styled from 'styled-components';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { changeDate } from '../utils/changeDate';

const IssueDetail = () => {
  const { issueNumber } = useParams();
  const [issueDetail, setIssueDetail] = useState({});

  useEffect(() => {
    const fetchIssueDetail = async () => {
      const { data: fetchedIssueDetail } = await getIssueDetail(issueNumber);
      setIssueDetail(fetchedIssueDetail);
    };

    fetchIssueDetail();
  }, [issueNumber]);

  return (
    <Wrap>
      <WrapUser>
        <Avatar url={issueDetail?.user?.avatar_url} />
        <div>
          <div>
            <span># {issueDetail?.number} </span>
            <span>{issueDetail.title}</span>
          </div>
          <br />
          <div>
            <span>작성자: {issueDetail?.user?.login}</span>
            <span>작성일: {changeDate.korea(issueDetail?.created_at)}</span>
          </div>
        </div>
        <WrapComments>
          <span>코멘트: {issueDetail?.comments}</span>
        </WrapComments>
      </WrapUser>
      <ReactMarkdown>{issueDetail?.body}</ReactMarkdown>
    </Wrap>
  );
};

export default IssueDetail;

const Wrap = styled.div``;

const WrapUser = styled.div`
  border-bottom: 1px solid black;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WrapComments = styled.div`
  margin: 1rem;
`;

const Avatar = styled.img`
  border-radius: 50%;
  margin: 12px;
  width: 5rem;
  height: 5rem;
  background: url(${props => props.url}) center/cover no-repeat;
`;
