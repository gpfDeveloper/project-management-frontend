import { People, ProjectIssueProps } from 'types/project';
import { v4 as uuid } from 'uuid';

export const samplePeople: People[] = [
  { email: '', name: 'Unassigned' },
  { email: 'pengfei@pengfeidevelopment.com', name: 'Pengfei Gao' },
  { email: 'terry@gmail.com', name: 'Terry Smith' },
  { email: 'john@gmail.com', name: 'John Doe' },
];

export const sampleIssues: ProjectIssueProps[] = [
  {
    id: uuid(),
    projectId: 'project1',
    type: 'Bug',
    summary:
      "Detail: As a developer, I'd like to update story status during the sprint >> Click the Active sprints link at the top right of the screen to go to the Active sprints where the current Sprint's items can be updated.",
    description:
      "<h1>Detail:</h1> As a developer, I'd like to update story status during the sprint >> Click the Active sprints link at the top right of the screen to go to the Active sprints where the current Sprint's items can be updated.",
    assignee: samplePeople[1],
    reporter: samplePeople[1],
    priority: 'Highest',
    status: 'DONE',
    created: '2022-06-14T17:21:07.5272333Z',
    updated: '2022-07-14T17:21:07.5272333Z',
    due: '2022-08-14T17:21:07.5272333Z',
  },
  {
    id: uuid(),
    projectId: 'project1',
    type: 'Story',
    summary:
      "Detail: As a developer, I'd like to update story status during the sprint >> Click the Active sprints link at the top right of the screen to go to the Active sprints where the current Sprint's items can be updated.",
    assignee: samplePeople[2],
    reporter: samplePeople[1],
    priority: 'Medium',
    status: 'TO DO',
    created: '2022-06-15T17:21:07.5272333Z',
    updated: '2022-07-15T17:21:07.5272333Z',
    due: '2022-08-15T17:21:07.5272333Z',
  },
  {
    id: uuid(),
    projectId: 'project1',
    type: 'Task',
    summary:
      'When the last task is done, the story can be automatically closed >> Drag this task to "Done" too',
    assignee: samplePeople[3],
    reporter: samplePeople[1],
    priority: 'Low',
    status: 'TO DO',
    created: '2022-06-16T17:21:07.5272333Z',
    updated: '2022-07-16T17:21:07.5272333Z',
    due: '2022-08-16T17:21:07.5272333Z',
  },
  {
    id: uuid(),
    projectId: 'project1',
    type: 'Task',
    summary:
      'When the last task is done, the story can be automatically closed >> Drag this task to "Done" too',
    assignee: samplePeople[0],
    reporter: samplePeople[1],
    priority: 'Low',
    status: 'TO DO',
    created: '2022-06-11T17:21:07.5272333Z',
    updated: '2022-07-11T17:21:07.5272333Z',
  },
  {
    id: uuid(),
    projectId: 'project1',
    type: 'Bug',
    summary:
      "Detail: As a developer, I'd like to update story status during the sprint >> Click the Active sprints link at the top right of the screen to go to the Active sprints where the current Sprint's items can be updated.",
    assignee: samplePeople[1],
    reporter: samplePeople[1],
    priority: 'Lowest',
    status: 'TO DO',
    created: '2022-06-12T17:21:07.5272333Z',
    updated: '2022-07-12T17:21:07.5272333Z',
    due: '2022-08-12T17:21:07.5272333Z',
  },
  {
    id: uuid(),
    projectId: 'project1',
    type: 'Story',
    summary:
      "Detail: As a developer, I'd like to update story status during the sprint >> Click the Active sprints link at the top right of the screen to go to the Active sprints where the current Sprint's items can be updated.",
    assignee: samplePeople[1],
    reporter: samplePeople[1],
    priority: 'High',
    status: 'IN PROGRESS',
    created: '2022-06-13T17:21:07.5272333Z',
    updated: '2022-07-13T17:21:07.5272333Z',
  },
];
