import styles, { layout } from "../style"
import { md_x1,md_x2,md_x3,md_x4,md_x5,md_x6,md_x7,md_x8 } from "../assets"

const Work = ({pounces}) => {

  //array
  const thumbnails = [
    {
      'id':1,
      'coverImg': md_x1,
    },
    {
      'id':2,
      'coverImg': md_x2, 
    },
    {
      'id':3,
      'coverImg': md_x3,
    },
    {
      'id':4,
      'coverImg': md_x4,
    },
    {
      'id':5,
      'coverImg': md_x5,
    },
    {
      'id':6,
      'coverImg': md_x6,
    },
    {
      'id':7,
      'coverImg': md_x7,
    },
    {
      'id':8,
      'coverImg': md_x8,
    }
]

      return (

        <div className='w-full justify-end'>
          <div className='max-w-[100%] mx-auto'>
              <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-3'>

              {/* {blogs.data.map((blog)=>

                <Link key={blog.id} to={`/blog/${blog.id}`}>
                  <div className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                    <img src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`} className='h-56 w-full object-cover' />
                    <div className='p-8'>
                      <h3 className='font-bold text-2xl my-1'>{blog.attributes.blogTitle}</h3>    
                      <p className='text-gray-600 text-xl'>{blog.attributes.blogDesc}</p>
                    </div>
                  </div>
                </Link>

                )} */}


                {/* {thumbnails.map((blog)=>

                      <div className='bg-white'>
                          <img className=' w-[389px] object-cover' src={blog.coverImg} />
                      </div>
                  
                  
                  )} */}
                   
                   {pounces.data.map((pounce) => 
                    <div className='bg-white'>
                        <img className=' w-[389px] object-cover' src={`http://localhost:1337${pounce.attributes.workThumbnail1.data.attributes.url}`} />
                    </div>
                    )}
                    {pounces.data.map((pounce) => 
                    <div className='bg-white'>
                        <img className=' w-[389px] object-cover' src={`http://localhost:1337${pounce.attributes.workThumbnail2.data.attributes.url}`} />
                    </div>
                    )}
                    {pounces.data.map((pounce) => 
                    <div className='bg-white'>
                        <img className=' w-[389px] object-cover' src={`http://localhost:1337${pounce.attributes.workThumbnail3.data.attributes.url}`} />
                    </div>
                    )}
                    {pounces.data.map((pounce) => 
                    <div className='bg-white'>
                        <img className=' w-[389px] object-cover' src={`http://localhost:1337${pounce.attributes.workThumbnail4.data.attributes.url}`} />
                    </div>
                    )}
                    {pounces.data.map((pounce) => 
                    <div className='bg-white'>
                        <img className=' w-[389px] object-cover' src={`http://localhost:1337${pounce.attributes.workThumbnail5.data.attributes.url}`} />
                    </div>
                    )}
                    {pounces.data.map((pounce) => 
                    <div className='bg-white'>
                        <img className=' w-[389px] object-cover' src={`http://localhost:1337${pounce.attributes.workThumbnail6.data.attributes.url}`} />
                    </div>
                    )}
                    {pounces.data.map((pounce) => 
                    <div className='bg-white'>
                        <img className=' w-[389px] object-cover' src={`http://localhost:1337${pounce.attributes.workThumbnail7.data.attributes.url}`} />
                    </div>
                    )}
                    {pounces.data.map((pounce) => 
                    <div className='bg-white'>
                        <img className=' w-[389px] object-cover' src={`http://localhost:1337${pounce.attributes.workThumbnail8.data.attributes.url}`} />
                    </div>
                    )}
                
              </div>
        </div>
    </div>
          
          
        )
}

export default Work