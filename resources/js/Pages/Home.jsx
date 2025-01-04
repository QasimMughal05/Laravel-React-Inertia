// import Layout from "../Layouts/layout";
import { Head,Link,usePage } from '@inertiajs/react';

import { data } from 'autoprefixer';
import React, { useState } from 'react';
import { useRoute } from "../../../vendor/tightenco/ziggy";

export default function Home({ posts }){
    const route = useRoute();
    const {flash} = usePage().props;
    const [flashgMsg, setFlashMsg ] = useState(flash.message);
    const { component } = usePage();

    setTimeout(()=>{
        setFlashMsg(null)
    },2000);

    // console.log(usePage());
return <>
    <Head title={component}/>
    {/* <h1 className='title'>Hello {name}</h1> */}
    <h1 className='title'>Hello</h1>
    { flashgMsg && <div className='absolute top-26 right-6 bg-rose-500 p-2
     rounded-md text-sm text-white'>
        {flashgMsg}</div> }

        { flash.success && <div className='absolute top-26 right-6 bg-green-500 p-2
     rounded-md text-sm text-white'>
        {flash.success}</div> }

    {/* <Link preserveScroll href='/' className='block title mt-[1000px]'>
    {new Date().toLocaleTimeString()}
    </Link> */}
    <div>
        {posts.data.map(post => {
            return(
                <div className= "p-4 border-b" key={post.id}>
                    <div className='text-sm text-slate-600'>
                        <span>Posted On:</span>
                        <span>{ new Date(post.created_at).toLocaleDateString()
                            }</span>
                    </div>
                    <p className='font-medium'>{post.body}</p>
                    {/* <Link href={`/posts/${post.id}`} className='text-link '>Read More...</Link> */}
                    <Link href={route('posts.show', post)} className='text-link'>Read More...</Link>
            </div>
            )
            
        })}
    </div>
    <div className='py-12 px-12'>
        {
            posts.links.map(link=>( 
                link.url ? 
                <Link
                 key={link.label} 
                 href={link.url} 
                 dangerouslySetInnerHTML={
                    { __html: link.label}
                } className={`p-1 mx-1 ${
                    link.active ? "text-blue-500 font-bold ":" "}`}>
                 </Link> 
                 :
                 <span
                    key={link.label} 
                 dangerouslySetInnerHTML={
                    { __html: link.label}
                } className={"p-1 mx-1 text-slate-300" }>
                 </span>
            ))
        }
    </div>

</>
} 

// Home.layout = page => <Layout children={page}/>
// export default Home
