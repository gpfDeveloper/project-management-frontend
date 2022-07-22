import { Box } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  FunctionComponent,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';

const config = {
  theme: 'snow',
  modules: {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['blockquote', 'code-block'],
      ['clean'],
    ],
    clipboard: {
      matchVisual: false,
    },
  },
};

type Props = {
  editorState: { text: string };
  onChange: (content: string) => void;
  ref?: any;
  placeholder?: string;
};

const TextEditor: FunctionComponent<Props> = forwardRef(
  ({ editorState, onChange, placeholder }, ref) => {
    const inputRef = useRef<any>();
    const focus = () => inputRef.current.focus();
    useImperativeHandle(ref, () => {
      return { focus };
    });
    return (
      <Box sx={{ '& .ql-editor': { minHeight: 120 } }}>
        <ReactQuill
          placeholder={placeholder}
          ref={inputRef}
          value={editorState.text}
          onChange={onChange}
          {...config}
        />
      </Box>
    );
  }
);

export default TextEditor;
