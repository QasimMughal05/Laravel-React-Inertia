// import Layout from "../Layouts/layout";
import { Link } from '@inertiajs/react';

import { data } from 'autoprefixer';
import React from 'react';

export default function Home({ posts }){

    console.log(posts);
return <>
    {/* <h1 className='title'>Hello {name}</h1> */}
    <h1 className='title'>Hello</h1>

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
