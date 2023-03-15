import Nav from '@/components/Nav'
import dynamic from 'next/dynamic'
import { useState } from 'react'


const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['code', 'link', 'image', 'video',],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],

    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'code',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',

]

export default function Home() {
  const [content, setContent] = useState("")
  console.log(content)
  const handleChange = (value: string) => {
    setContent(value);
  };
  return (
    <div className='   w-full h-screen flex  flex-col  gap-2  '>
      <Nav />
      <div className=' sm:p-0 min-w-fit sm:w-1/2 flex gap-3 items-center self-center p-5'>

        <input type="text" className=' w-full h-max px-4 py-4 border border-brandv3 rounded-md text-2xl outline-none  self-center' placeholder='Title...' />
        <button className='  w-max px-4 py-1 bg-branv1 text-brand-secondary font-poppins rounded'>Perview</button>
      </div>

      <div className='   w-fit sm:w-1/2  self-center p-5 sm:p-0'>
        <QuillNoSSRWrapper
          modules={modules}
          formats={formats}
          onChange={handleChange}
          value={content}
          theme="snow" />

      </div>
    </div>

  )


}