import { Button } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import LinkIcon from '@mui/icons-material/Link';
import { useProject } from 'contexts/project-context';

const CopyLinkBtn: FunctionComponent = () => {
  const { currentIssue } = useProject();
  const [isCopied, setIsCopied] = useState(false);
  let text = 'Copy link';
  if (isCopied) text = 'Link copied';
  const clickHandler = () => {
    if (currentIssue) {
      const link = `${window.location.host}/projects/${currentIssue.projectId}/issues/${currentIssue.id}`;
      navigator.clipboard.writeText(link);
      setIsCopied(true);
    }
  };
  return (
    <Button onClick={clickHandler} color="inherit">
      <LinkIcon sx={{ mr: 0.2 }} />
      {text}
    </Button>
  );
};
export default CopyLinkBtn;
