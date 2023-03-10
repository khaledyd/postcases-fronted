
import Nav from '../components/Nav'
import Head from 'next/head'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Sidebar from "../components/userdashboard/Sidebar";
import BlogCard from '../components/index/BlogCard';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>postcases</title>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='    w-fit h-max flex flex-col'>
        <Nav />
        <div className='w-full h-max  b flex justify-center mt-5   p-3  '>
          <input className=' md:w-1/3 sm:8/12  w-8/12 rounded-md h-10  border-2  border-solid p-5

border-brand-primary '/><SearchOutlinedIcon sx={{
            fontSize: "37px",
            alignSelf: "center",
            marginLeft: "-40px",
            color: "#6C5CE6"

          }} />

        </div>
        <div className=' w-11/12 h-max self-center   mt-5 backdrop-blur-3xl flex   gap-x-5  '>
          <div className=' w-1/3 hidden sm:block'>       <Sidebar /></div>


          <div className=' w-full flex  flex-col gap-3'>
            {/* <MobileCard />

            <Card />
            <Card />
            <Card /> */}
            <p className=' text-2xl  font-bold  '>List of Your post</p>
            <Link href="/SinglePost">
              <BlogCard />
            </Link>
            <Link href="/SinglePost">
              <BlogCard />
            </Link>
            <Link href="/SinglePost">
              <BlogCard />
            </Link>
            <Link href="/SinglePost">
              <BlogCard />
            </Link>
            <Link href="/SinglePost">
              <BlogCard />
            </Link>
            <Link href="/SinglePost">
              <BlogCard />
            </Link>
            <Link href="/SinglePost">
              <BlogCard />
            </Link>
            <Link href="/SinglePost">
              <BlogCard />
            </Link>




          </div>

        </div>
      </main>
    </>
  )
}
