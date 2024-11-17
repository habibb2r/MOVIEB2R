import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.css'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import useBanner from '../../../../../Hooks/useBanner';
import {AiFillLike} from 'react-icons/ai'

import {MdVideoCameraBack} from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom';


const Banner = () => {
    const [trendings, loading, refetch] = useBanner();
    const navigate = useNavigate()
     console.log(trendings, loading)
    
     const viewDetails = (id) =>{
       navigate(`/details/${id}`)
     }
    return (
        <>
        <div className='text-center h-[100vh]'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
         
        {
            loading ? <span className="loading loading-bars w-full"></span> :
          trendings.results.map(trending => 
            <SwiperSlide key={trending.id} trending={trending}>
                <div onClick={()=> viewDetails(trending.id)}  className='relative '>
                    <img className='md:w-[100vw] slider-img ' src={`https://image.tmdb.org/t/p/original${trending.backdrop_path}`} alt="" />
                    <img className='md:w-[100vw] md:hidden ' src={`https://image.tmdb.org/t/p/original${trending.poster_path}`} alt="" />
                        <div className=' hidden absolute top-[80%] md:top-[40%] z-20 font-mono md:w-2/5 left-[3%] md:left-[10%] md:flex flex-row md:flex-col justify-between gap-10 md:gap-5 text-left md:px-5 px-0 back'>
                            <h2 className='text-2xl font-semibold text-red-700'><span className='text-accent'>|</span> Trendings</h2>
                            <h2 className=' md:block hidden text-4xl font-semibold  text-info'>{trending.original_title}</h2>
                            <div className='flex justify-start gap-6  items-center'>
                               <div className='flex  justify-center items-center gap-1'>
                                <AiFillLike className='text-2xl text-accent'></AiFillLike>
                                <p className='text-lg font-semibold text-info'>{trending.vote_average}</p>
                               </div>
                                <button className='md:flex justify-center items-center gap-2 hidden btn btn-accent text-4xl text-black font-semibold'> <span className='text-xl'>Watch Now</span> <MdVideoCameraBack></MdVideoCameraBack></button>
                            </div>
                        </div>
                        <div className=' trendingsShield'></div>
                </div>
            </SwiperSlide>)
        }
         
        </Swiper>
        </div>
      </>
    );
};

export default Banner;