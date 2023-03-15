import { Editor } from '@tinymce/tinymce-react';

interface Props {
  value: string;
  onChange: (content: string) => void;
}

const TinyMCEEditor = ({ value, onChange }: Props) => {
  const handleEditorChange = (content: string) => {
    onChange(content);
  };
  const editorConfig = {
    // directionality: 'ltr',
    branding: false,
 
    language_url: '/langs/en.js',
    // other configuration options as needed
  };
  
  
  

  return (
    <Editor
      apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
      initialValue={value}
      onEditorChange={handleEditorChange}
      init={editorConfig}
    />
  );
};

export default TinyMCEEditor;
