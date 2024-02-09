
import './App.scss'
import avtar from '/images/image-avatar.webp'
import articleImg from '/images/illustration-article.svg'

function App() {

  return (
    <>
      <div className="container-fluid main min-w-screen h-screen bg-yellow flex items-center justify-center">
          <div className="container sub_main h-full flex items-center justify-center">
            <div className="row content flex items-center justify-evenly flex-col shadow-box-2x border-[1px] p-5  border-solid border-black w-[330px] md:w-[420px] min-h-[550px] bg-white rounded-[10px]">
              <div className="image_box flex items-center justify-center overflow-hidden rounded-xl">
                <img className='rounded-[10px] md:w-[380px]' src={articleImg} alt="" />
              </div>
              <div className="text_content">
                <a href="" className='bg-yellow px-2 py-1 rounded-[5px] text-base font-medium '>Learning</a>
                <p className='mt-3 mb-3 text-sm font-medium '>Published 21 Dec 2023</p>
                <h5 className='text-[1.6em] font-medium '>HTML & CSS foundations</h5>
                <p className='text-grey mt-3' >These languages are the backbone of every website, defining structure, content, and presentation.</p>
                <div className='flex mt-5'>
                  <img src={avtar} className='h-9' alt=""/><span className='m-2 text-sm font-semibold'>Greg Hooper</span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
