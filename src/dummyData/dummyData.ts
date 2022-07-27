import {
  Comment,
  People,
  ProjectIssueProps,
  History,
  ProjectProps,
} from 'types/types';

export const samplePeople: People[] = [
  { email: '', name: 'Unassigned' },
  { email: 'pengfei@pengfeidevelopment.com', name: 'Pengfei Gao' },
  { email: 'terry@gmail.com', name: 'Terry Smith' },
  { email: 'john@gmail.com', name: 'John Doe' },
];

export const sampleIssues: ProjectIssueProps[] = [
  {
    id: '95cc7df2-35a4-4342-b1ac-b72316a36a01',
    projectId: '65cc7df2-35a4-4342-b1ac-b72316a36a01',
    type: 'Story',
    summary:
      "Detail: As a developer, I'd like to update story status during the sprint >> Click the Active sprints link at the top right of the screen to go to the Active sprints where the current Sprint's items can be updated.",
    description:
      '<p>An issue\'s status indicates its current place in the project\'s workflow.</p><h3>Issue statuses:</h3><p></p><h2><strong style="background-color: rgb(187, 187, 187);"> To do </strong></h2><p>The issue is open and ready for the assignee to start work on it.</p><p></p><h2><strong style="background-color: rgb(0, 102, 204); color: rgb(255, 255, 255);"> In Progress </strong></h2><p>This issue is being actively worked on at the moment by the assignee.</p><p></p><h2><strong style="background-color: rgb(0, 138, 0); color: rgb(255, 255, 255);"> Done </strong></h2><p>Work has finished on the issue.</p>',
    assignee: samplePeople[1],
    reporter: samplePeople[1],
    priority: 'Highest',
    status: 'DONE',
    createdAt: '2022-06-14T17:21:07.5272333Z',
    updatedAt: '2022-07-14T17:21:07.5272333Z',
    dueAt: '2022-08-14T17:21:07.5272333Z',
  },
  {
    id: '95cc7df2-35a4-4342-b1ac-b72316a36a02',
    projectId: '65cc7df2-35a4-4342-b1ac-b72316a36a01',
    type: 'Story',
    summary:
      "Detail: As a developer, I'd like to update story status during the sprint >> Click the Active sprints link at the top right of the screen to go to the Active sprints where the current Sprint's items can be updated.",
    assignee: samplePeople[2],
    reporter: samplePeople[1],
    priority: 'Medium',
    status: 'TO DO',
    createdAt: '2022-06-15T17:21:07.5272333Z',
    updatedAt: '2022-07-15T17:21:07.5272333Z',
    dueAt: '2022-08-15T17:21:07.5272333Z',
  },
  {
    id: '95cc7df2-35a4-4342-b1ac-b72316a36a03',
    projectId: '65cc7df2-35a4-4342-b1ac-b72316a36a01',
    type: 'Task',
    summary:
      'When the last task is done, the story can be automatically closed >> Drag this task to "Done" too',
    assignee: samplePeople[3],
    reporter: samplePeople[1],
    priority: 'Low',
    status: 'TO DO',
    createdAt: '2022-06-16T17:21:07.5272333Z',
    updatedAt: '2022-07-16T17:21:07.5272333Z',
    dueAt: '2022-08-16T17:21:07.5272333Z',
  },
  {
    id: '95cc7df2-35a4-4342-b1ac-b72316a36a04',
    projectId: '65cc7df2-35a4-4342-b1ac-b72316a36a01',
    type: 'Task',
    summary:
      'When the last task is done, the story can be automatically closed >> Drag this task to "Done" too',
    assignee: samplePeople[0],
    reporter: samplePeople[1],
    priority: 'Low',
    status: 'TO DO',
    createdAt: '2022-06-11T17:21:07.5272333Z',
    updatedAt: '2022-07-11T17:21:07.5272333Z',
  },
  {
    id: '95cc7df2-35a4-4342-b1ac-b72316a36a05',
    projectId: '65cc7df2-35a4-4342-b1ac-b72316a36a01',
    type: 'Bug',
    summary:
      "Detail: As a developer, I'd like to update story status during the sprint >> Click the Active sprints link at the top right of the screen to go to the Active sprints where the current Sprint's items can be updated.",
    assignee: samplePeople[1],
    reporter: samplePeople[1],
    priority: 'Lowest',
    status: 'TO DO',
    createdAt: '2022-06-12T17:21:07.5272333Z',
    updatedAt: '2022-07-12T17:21:07.5272333Z',
    dueAt: '2022-08-12T17:21:07.5272333Z',
  },
  {
    id: '95cc7df2-35a4-4342-b1ac-b72316a36a06',
    projectId: '65cc7df2-35a4-4342-b1ac-b72316a36a01',
    type: 'Story',
    summary:
      "Detail: As a developer, I'd like to update story status during the sprint >> Click the Active sprints link at the top right of the screen to go to the Active sprints where the current Sprint's items can be updated.",
    assignee: samplePeople[1],
    reporter: samplePeople[1],
    priority: 'High',
    status: 'IN PROGRESS',
    createdAt: '2022-06-13T17:21:07.5272333Z',
    updatedAt: '2022-07-13T17:21:07.5272333Z',
  },
];

export const sampleComments: Comment[] = [
  {
    id: '85cc7df2-35a4-4342-b1ac-b72316a36a01',
    issueId: '95cc7df2-35a4-4342-b1ac-b72316a36a01',
    createdBy: samplePeople[1],
    createdAt: '2022-08-13T17:21:07.5272333Z',
    updatedAt: '2022-08-14T17:21:07.5272333Z',
    content: 'A test comment.',
  },
  {
    id: '85cc7df2-35a4-4342-b1ac-b72316a36a02',
    issueId: '95cc7df2-35a4-4342-b1ac-b72316a36a01',
    createdBy: samplePeople[2],
    createdAt: '2022-08-14T17:21:07.5272333Z',
    updatedAt: '2022-08-14T17:21:07.5272333Z',
    content: 'Another test comment.',
  },
];

export const sampleHistory: History[] = [
  {
    id: '75cc7df2-35a4-4342-b1ac-b72316a36a01',
    issueId: '95cc7df2-35a4-4342-b1ac-b72316a36a01',
    createdAt: '2022-06-14T17:21:07.5272333Z',
    field: 'Issue',
    updatedBy: samplePeople[1],
  },
  {
    id: '75cc7df2-35a4-4342-b1ac-b72316a36a02',
    issueId: '95cc7df2-35a4-4342-b1ac-b72316a36a01',
    createdAt: '2022-06-14T18:21:07.5272333Z',
    field: 'Priority',
    updatedBy: samplePeople[1],
    from: 'Medium',
    to: 'Highest',
  },
  {
    id: '75cc7df2-35a4-4342-b1ac-b72316a36a03',
    issueId: '95cc7df2-35a4-4342-b1ac-b72316a36a01',
    createdAt: '2022-06-14T18:22:07.5272333Z',
    field: 'Due',
    updatedBy: samplePeople[1],
    from: undefined,
    to: '2022-06-15T20:21:07.5272333Z',
  },
  {
    id: '75cc7df2-35a4-4342-b1ac-b72316a36a04',
    issueId: '95cc7df2-35a4-4342-b1ac-b72316a36a01',
    createdAt: '2022-06-14T18:23:07.5272333Z',
    field: 'Assignee',
    updatedBy: samplePeople[1],
    from: JSON.stringify(samplePeople[0]),
    to: JSON.stringify(samplePeople[2]),
  },
  {
    id: '75cc7df2-35a4-4342-b1ac-b72316a36a05',
    issueId: '95cc7df2-35a4-4342-b1ac-b72316a36a01',
    createdAt: '2022-06-14T18:24:07.5272333Z',
    field: 'Reporter',
    updatedBy: samplePeople[1],
    from: JSON.stringify(samplePeople[1]),
    to: JSON.stringify(samplePeople[3]),
  },
  {
    id: '75cc7df2-35a4-4342-b1ac-b72316a36a06',
    issueId: '95cc7df2-35a4-4342-b1ac-b72316a36a01',
    createdAt: '2022-06-14T19:21:07.5272333Z',
    field: 'Comment',
    updatedBy: samplePeople[3],
  },
  {
    id: '75cc7df2-35a4-4342-b1ac-b72316a36a07',
    issueId: '95cc7df2-35a4-4342-b1ac-b72316a36a01',
    createdAt: '2022-06-14T20:21:07.5272333Z',
    field: 'Status',
    updatedBy: samplePeople[2],
    from: 'TO DO',
    to: 'IN PROGRESS',
  },
  {
    id: '75cc7df2-35a4-4342-b1ac-b72316a36a08',
    issueId: '95cc7df2-35a4-4342-b1ac-b72316a36a01',
    createdAt: '2022-06-15T20:21:07.5272333Z',
    updatedBy: samplePeople[2],
    field: 'Status',
    from: 'IN PROGRESS',
    to: 'DONE',
  },
];

export const sampleProjects: ProjectProps[] = [
  {
    id: '65cc7df2-35a4-4342-b1ac-b72316a36a01',
    name: 'Sample Project 1',
    type: 'Software',
    createdAt: '2022-07-01T20:21:07.5272333Z',
    updatedAt: '2022-07-02T20:21:07.5272333Z',
    owner: samplePeople[1],
    lead: samplePeople[1],
    avatar: 'Rocket',
    isPrivate: false,
  },
  {
    id: '65cc7df2-35a4-4342-b1ac-b72316a36a02',
    name: 'Sample Project 2',
    type: 'Software',
    createdAt: '2022-06-02T20:21:07.5272333Z',
    updatedAt: '2022-06-02T20:21:07.5272333Z',
    owner: samplePeople[1],
    lead: samplePeople[2],
    avatar: 'Snow',
    isPrivate: false,
  },
  {
    id: '65cc7df2-35a4-4342-b1ac-b72316a36a03',
    name: 'Sample Project 3',
    type: 'Business',
    createdAt: '2022-06-04T20:21:07.5272333Z',
    updatedAt: '2022-06-04T20:21:07.5272333Z',
    owner: samplePeople[1],
    lead: samplePeople[3],
    avatar: 'Castle',
    isPrivate: false,
  },
  {
    id: '65cc7df2-35a4-4342-b1ac-b72316a36a04',
    name: 'Sample Project 4',
    type: 'Software',
    createdAt: '2022-06-05T20:21:07.5272333Z',
    updatedAt: '2022-06-05T20:21:07.5272333Z',
    owner: samplePeople[1],
    lead: samplePeople[1],
    avatar: 'Camera',
    isPrivate: false,
  },
  {
    id: '65cc7df2-35a4-4342-b1ac-b72316a36a05',
    name: 'Sample Project 5',
    type: 'Software',
    createdAt: '2022-06-06T20:21:07.5272333Z',
    updatedAt: '2022-06-06T20:21:07.5272333Z',
    owner: samplePeople[1],
    lead: samplePeople[1],
    avatar: 'Bug',
    isPrivate: false,
  },
  {
    id: '65cc7df2-35a4-4342-b1ac-b72316a36a07',
    name: 'Sample Project 6',
    type: 'Software',
    createdAt: '2022-06-07T20:21:07.5272333Z',
    updatedAt: '2022-06-07T20:21:07.5272333Z',
    owner: samplePeople[1],
    lead: samplePeople[1],
    avatar: 'Tower',
    isPrivate: false,
  },
];

export const queryIssues = (projectId: string) => {
  return sampleIssues.filter((item) => item.projectId === projectId);
};

export const getProject = (projectId: string) => {
  return sampleProjects.filter((item) => item.id === projectId)[0];
};

export const getIssue = (issueId: string) =>
  sampleIssues.find((item) => item.id === issueId);

export const getAllMyProjects = () => sampleProjects;

export const getRecentProjects = () => {
  const recentProjects = sampleProjects.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return recentProjects.slice(0, 5);
};
