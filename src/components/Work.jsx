import styles, { layout } from "../style"
import { md_x1,md_x2,md_x3,md_x4,md_x5,md_x6,md_x7,md_x8 } from "../assets"

const Work = () => {

  //array
  const thumbnails = [
    {
      'id':1,
      'title':'Fabio Cannavaro',
      'desc': 'Fabio Cannavaro Ufficiale OMRI is an Italian professional football coach and former player.', 
      'coverImg': md_x1,
      'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat ac felis donec et odio pellentesque diam volutpat commodo. In nibh mauris cursus mattis molestie. Urna nunc id cursus metus aliquam. Lectus urna duis convallis convallis tellus id interdum.',
      'authorName':'John Abruzzi',
      'authorImg' : 'https://avatars.githubusercontent.com/u/9456587?v=4',
      'authorDesc': 'Prison Escapee',
    },
    {
      'id':2,
      'title':'Alessandro Del Piero',
      'desc': 'Alessandro Del Piero Ufficiale OMRI is an Italian former professional footballer.', 
      'coverImg': md_x2,
      'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat ac felis donec et odio pellentesque diam volutpat commodo. In nibh mauris cursus mattis molestie. Urna nunc id cursus metus aliquam. Lectus urna duis convallis convallis tellus id interdum.',
      'authorName':'John Abruzzi',
      'authorImg' : 'https://avatars.githubusercontent.com/u/9456587?v=4',
      'authorDesc': 'Prison Escapee',    
    },
    {
      'id':3,
      'title':'Gianluigi Buffon',
      'desc': 'Gianluigi Buffon, also known as Gigi Buffon, is an Italian former professional goalkeeper.', 
      'coverImg': md_x3,
      'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat ac felis donec et odio pellentesque diam volutpat commodo. In nibh mauris cursus mattis molestie. Urna nunc id cursus metus aliquam. Lectus urna duis convallis convallis tellus id interdum.',
      'authorName':'John Abruzzi',
      'authorImg' : 'https://avatars.githubusercontent.com/u/9456587?v=4',
      'authorDesc': 'Prison Escapee',
    },
    {
      'id':4,
      'title':'Gianluigi Buffon',
      'desc': 'Gianluigi Buffon, also known as Gigi Buffon, is an Italian former professional goalkeeper.', 
      'coverImg': md_x4,
      'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat ac felis donec et odio pellentesque diam volutpat commodo. In nibh mauris cursus mattis molestie. Urna nunc id cursus metus aliquam. Lectus urna duis convallis convallis tellus id interdum.',
      'authorName':'John Abruzzi',
      'authorImg' : 'https://avatars.githubusercontent.com/u/9456587?v=4',
      'authorDesc': 'Prison Escapee',
    },
    {
      'id':5,
      'title':'Gianluigi Buffon',
      'desc': 'Gianluigi Buffon, also known as Gigi Buffon, is an Italian former professional goalkeeper.', 
      'coverImg': md_x5,
      'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat ac felis donec et odio pellentesque diam volutpat commodo. In nibh mauris cursus mattis molestie. Urna nunc id cursus metus aliquam. Lectus urna duis convallis convallis tellus id interdum.',
      'authorName':'John Abruzzi',
      'authorImg' : 'https://avatars.githubusercontent.com/u/9456587?v=4',
      'authorDesc': 'Prison Escapee',
    },
    {
      'id':6,
      'title':'Gianluigi Buffon',
      'desc': 'Gianluigi Buffon, also known as Gigi Buffon, is an Italian former professional goalkeeper.', 
      'coverImg': md_x6,
      'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat ac felis donec et odio pellentesque diam volutpat commodo. In nibh mauris cursus mattis molestie. Urna nunc id cursus metus aliquam. Lectus urna duis convallis convallis tellus id interdum.',
      'authorName':'John Abruzzi',
      'authorImg' : 'https://avatars.githubusercontent.com/u/9456587?v=4',
      'authorDesc': 'Prison Escapee',
    },
    {
      'id':7,
      'title':'Gianluigi Buffon',
      'desc': 'Gianluigi Buffon, also known as Gigi Buffon, is an Italian former professional goalkeeper.', 
      'coverImg': md_x7,
      'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat ac felis donec et odio pellentesque diam volutpat commodo. In nibh mauris cursus mattis molestie. Urna nunc id cursus metus aliquam. Lectus urna duis convallis convallis tellus id interdum.',
      'authorName':'John Abruzzi',
      'authorImg' : 'https://avatars.githubusercontent.com/u/9456587?v=4',
      'authorDesc': 'Prison Escapee',
    },
    {
      'id':8,
      'title':'Gianluigi Buffon',
      'desc': 'Gianluigi Buffon, also known as Gigi Buffon, is an Italian former professional goalkeeper.', 
      'coverImg': md_x8,
      'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat ac felis donec et odio pellentesque diam volutpat commodo. In nibh mauris cursus mattis molestie. Urna nunc id cursus metus aliquam. Lectus urna duis convallis convallis tellus id interdum.',
      'authorName':'John Abruzzi',
      'authorImg' : 'https://avatars.githubusercontent.com/u/9456587?v=4',
      'authorDesc': 'Prison Escapee',
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


                {thumbnails.map((blog)=>

                      <div className='bg-white'>
                          <img className=' w-[389px] object-cover' src={blog.coverImg} />
                      </div>
                  
                  
                  )}
                
              </div>
        </div>
    </div>
          
          
        )
}

export default Work