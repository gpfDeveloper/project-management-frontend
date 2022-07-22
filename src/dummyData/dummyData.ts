import { Comment, People, ProjectIssueProps } from 'types/types';

export const samplePeople: People[] = [
  { email: '', name: 'Unassigned' },
  { email: 'pengfei@pengfeidevelopment.com', name: 'Pengfei Gao' },
  { email: 'terry@gmail.com', name: 'Terry Smith' },
  { email: 'john@gmail.com', name: 'John Doe' },
];

export const sampleIssues: ProjectIssueProps[] = [
  {
    id: '95cc7df2-35a4-4342-b1ac-b72316a36a01',
    projectId: 'project1',
    type: 'Bug',
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
    projectId: 'project1',
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
    projectId: 'project1',
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
    projectId: 'project1',
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
    projectId: 'project1',
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
    projectId: 'project1',
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
    updatedAt: '2022-08-13T17:21:07.5272333Z',
    content: 'A test comment.',
  },
  {
    id: '85cc7df2-35a4-4342-b1ac-b72316a36a02',
    issueId: '95cc7df2-35a4-4342-b1ac-b72316a36a01',
    createdBy: samplePeople[2],
    createdAt: '2022-08-14T17:21:07.5272333Z',
    updatedAt: '2022-08-15T17:21:07.5272333Z',
    content: 'Another test comment.',
  },
];
