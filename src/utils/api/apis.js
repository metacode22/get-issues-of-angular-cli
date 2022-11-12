import { ANGULAR_REPOSITORY_ISSUES_PATH } from '../constants/api';
import http from './baseConfig';

const INIT_PER_PAGE = 15;

export const getIssueList = async (currentPage, sortType) => {
  return await http.get({
    url: ANGULAR_REPOSITORY_ISSUES_PATH,
    params: {
      page: currentPage,
      per_page: INIT_PER_PAGE,
      sort: sortType,
    },
  });
};

export const getIssueDetail = async issueNumber => {
  return await http.get({
    url: `${ANGULAR_REPOSITORY_ISSUES_PATH}/${issueNumber}`,
  });
};
