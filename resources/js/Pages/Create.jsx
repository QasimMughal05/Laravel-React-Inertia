import { useForm } from '@inertiajs/react'
export default function Create(){
   const { data, setData, post, processing, errors } = useForm({
        body: '',
       
      })

    console.log(useForm())
    console.log(errors);
    function submit(e){
        e.preventDefault();
        post("/posts"); 
    }

    return(
    <>
    <h1 className="title">Create a new post</h1>
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
            <button className="primary-btn mt-4">Create Post</button>
        </form>
        </div>
    </>
    )
}