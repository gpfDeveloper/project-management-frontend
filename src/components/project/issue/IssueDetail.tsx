import React, { FunctionComponent, useState } from 'react';
import { People, ProjectIssuePriority, ProjectIssueStatus } from 'types/types';
import { samplePeople } from 'dummyData/dummyData';
import IssueDetailLeft from './IssueDetailLeft';
import IssueDetailRight from './IssueDetailRight';
import { useProject } from 'contexts/project-context';

const IssueDetail: FunctionComponent = () => {
  const { currentIssue: issue } = useProject();
  const [summary, setSummary] = useState(issue!.summary);
  const saveSummaryHandler = () => {
    console.log(summary);
  };
  const [description, setDescription] = useState({
    text: issue!.description || '',
  });
  const changeDescriptionHandler = (content: string) => {
    console.log('des:', content);
    setDescription({ text: content });
  };
  const saveDescriptionHandler = () => {
    console.log(description);
  };

  const [issueStatus, setIssueStatus] = useState<ProjectIssueStatus>(
    issue!.status
  );
  const issueStatusSelectorHandler = (status: ProjectIssueStatus) => {
    setIssueStatus(status);
  };
  const [reporter, setReporter] = useState<People | null>(issue!.reporter);
  const reporterSelectorHandler = (
    event: React.SyntheticEvent<Element, Event>,
    value: People | null
  ) => {
    if (!value) setReporter(samplePeople[0]);
    else setReporter(value);
  };
  const [assignee, setAssignee] = useState<People | null>(issue!.assignee);
  const assigneeSelectorHandler = (
    event: React.SyntheticEvent<Element, Event>,
    value: People | null
  ) => {
    if (!value) setAssignee(samplePeople[0]);
    else setAssignee(value);
  };
  const [priority, setPriority] = useState<ProjectIssuePriority>('Medium');
  const prioritySelectorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriority(e.target.value as ProjectIssuePriority);
  };
  let _due = null;
  if (issue!.dueAt) _due = new Date(issue!.dueAt);
  const [dueDate, setDueDate] = useState<Date | null>(_due);
  const dueDateSelectorHandler = (date: Date | null) => {
    setDueDate(date);
  };
  return (
    <>
      <IssueDetailLeft
        summary={summary}
        onChangeSummary={(e) => setSummary(e.target.value)}
        onSaveSummary={saveSummaryHandler}
        description={description}
        onChangeDescription={changeDescriptionHandler}
        onSaveDescription={saveDescriptionHandler}
      />
      <IssueDetailRight
        allPeople={samplePeople}
        assignee={assignee}
        onChangeAssignee={assigneeSelectorHandler}
        reporter={reporter}
        onChangeReporter={reporterSelectorHandler}
        priority={priority}
        onChangePriority={prioritySelectorHandler}
        issueStatus={issueStatus}
        onChangeIssueStatus={issueStatusSelectorHandler}
        dueDate={dueDate}
        onChangeDueDate={dueDateSelectorHandler}
        createdAt={issue!.createdAt}
        updatedAt={issue!.updatedAt}
      />
    </>
  );
};

export default IssueDetail;
