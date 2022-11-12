import { useEffect, useState } from 'react';
import { getIssueList } from '../utils/api/apis';
import styled from 'styled-components';
import IssueListItem from '../components/IssueList/IssueListItem';
import { useNavigate } from 'react-router-dom';
import useIntersection from '../hooks/useIntersection';

const DEFAULT_SORT_TYPE = 'comments';

const IssueList = () => {
  const navigate = useNavigate();
  const [issueList, setIssueList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [observeElement, setObserveElement] = useState(null);
  const isShow = useIntersection(observeElement);

  useEffect(() => {
    return () => {
      setIssueList([]);
    };
  }, []);

  useEffect(() => {
    const fetchIssueList = async () => {
      const { data: fetchedIssueList } = await getIssueList(
        currentPage,
        DEFAULT_SORT_TYPE,
      );

      setIssueList(prevIssueList => [...prevIssueList, ...fetchedIssueList]);
    };

    fetchIssueList();
  }, [currentPage]);

  useEffect(() => {
    isShow && handlePageUp();
  }, [isShow]);

  const handlePageUp = () => {
    setCurrentPage(currentPage => currentPage + 1);
  };

  const handleClickIssueListItem = issueNumber => {
    navigate(`/${issueNumber}`);
  };

  return (
    <Wrap>
      {issueList.map(issue => (
        <IssueListItem
          key={issue.id}
          issue={issue}
          onClick={handleClickIssueListItem}
        />
      ))}
      <div ref={setObserveElement}></div>
    </Wrap>
  );
};

export default IssueList;

const Wrap = styled.div`
  max-width: 1200px;
`;
