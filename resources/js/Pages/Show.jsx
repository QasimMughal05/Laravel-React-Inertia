import { Link, useForm } from "@inertiajs/react"
import { route } from "../../../vendor/tightenco/ziggy/src/js";

export default function Show({post}){

    const { delete:destroy } = useForm();

        // console.log(useForm())

        function submit(e) {
            e.preventDefault();
            destroy(`/posts/${post.id}`);
        }
    return(
        <>
            <h1 className="title">{post.body}</h1>
            <div className= "p-4 border-b" key={post.id}>
                <div className='text-sm text-slate-600'>
                    <span>Posted On:</span>
                    <span>{ new Date(post.created_at).toLocaleDateString()
                    }</span>
                </div>
                <p className='font-medium'>{post.body}</p>
                <div className="flex item-center justify-end gap-2">
                    <form onSubmit={submit}>
                        <button className="bg-red-500 rounded-md
                        text-sm px-4 py-1 text-white">Delete</button>
                    </form>
                        {/* <Link href={`/posts/${post.id}/edit`} className="bg-green-500 rounded-md
                        text-sm px-4 py-1 text-white"> Update </Link> */}
                         <Link href={route('posts.edit', post)} className="bg-green-500 rounded-md
                        text-sm px-4 py-1 text-white"> Update </Link>
                </div>
            </div>
        </>
    )
}