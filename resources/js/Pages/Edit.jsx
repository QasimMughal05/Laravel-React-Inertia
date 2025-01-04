import { useForm } from '@inertiajs/react'
import { route } from "../../../vendor/tightenco/ziggy/src/js";

export default function Create({post}){
   const { data, setData, put, processing, errors } = useForm({
        body: post.body,
       
      })

    console.log(useForm())
    console.log(errors);
    function submit(e){
        e.preventDefault(); 
        // put(`/posts/${post.id}`); 
        put(route('posts.update', post ))
    }

    return(
    <>
    <h1 className="title">Update Your Post</h1>
    {/* {data.body} */}

    <div className="w-1/2 mx-auto">
        <form onSubmit={submit}> 
            <textarea row="10"
                value={data.body}
                onChange={(e) =>setData('body', e.target.
                value)}
                className={errors.body && "!ring-red-500"}>
            </textarea>

            {errors.body && <p className='error'>{errors .body}</p>}
            <button className="primary-btn mt-4">Update Post</button>
        </form>
        </div>
    </>
    )
}