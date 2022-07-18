export type ProjectIssueType = 'Story' | 'Task' | 'Bug';
export type ProjectIssuePriority =
  | 'Highest'
  | 'High'
  | 'Medium'
  | 'Low'
  | 'Lowest';
export type ProjectIssueStatus = 'TO DO' | 'IN PROGRESS' | 'DONE';

export type ProjectIssueProps = {
  id: string;
  type: ProjectIssueType;
  summary: string;
  assignee: string;
  reporter: string;
  priority: ProjectIssuePriority;
  status: ProjectIssueStatus;
  created: string;
  updated: string;
  due: string;
};
