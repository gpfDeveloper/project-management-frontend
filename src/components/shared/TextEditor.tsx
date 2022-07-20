import { Box } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FunctionComponent } from 'react';

const config = {
  theme: 'snow',
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ header: [1, 2, 3, 4, 5, 6] }],
      [{ color: [] }, { background: [] }],
      ['clean'],
    ],
  },
};

type Props = {
  editorState: { text: string };
  onChange: (content: string) => void;
};

const TextEditor: FunctionComponent<Props> = ({ editorState, onChange }) => {
  return (
    <Box sx={{ '& .ql-editor': { minHeight: 120 } }}>
      <ReactQuill value={editorState.text} onChange={onChange} {...config} />
    </Box>
  );
};

export default TextEditor;
