import { ANGULAR_REPOSITORY_ISSUES_PATH } from '../constants/api';
import http from './baseConfig';

export const getIssueList = async (currentPage, sortType) => {
	return await http.get({
		url: ANGULAR_REPOSITORY_ISSUES_PATH,
		params: {
			page: currentPage,
			sort: sortType,
		},
	});
};

export const getIssueDetail = async (issueNumber) => {
	return await http.get({
		url: `${ANGULAR_REPOSITORY_ISSUES_PATH}/${issueNumber}`,
	});
};
