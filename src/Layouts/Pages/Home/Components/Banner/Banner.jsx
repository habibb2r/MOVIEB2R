import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.css'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import useBanner from '../../../../../Hooks/useBanner';
import {AiFillLike} from 'react-icons/ai'

import {MdVideoCameraBack} from 'react-icons/md'


const Banner = () => {
    const [trendings, loading, refetch] = useBanner();
    refetch();
     console.log(trendings, loading)
    
    return (
        <>
        <div className='text-center h-[100vh]'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
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
                <div className='relative md:h-[88vh] '>
                    <img className='md:w-[100vw] slider-img ' src={`https://image.tmdb.org/t/p/original${trending.backdrop_path}`} alt="" />
                    <img className='md:w-[100vw] md:hidden ' src={`https://image.tmdb.org/t/p/original${trending.poster_path}`} alt="" />
                        <div className='absolute top-[30%] md:top-[40%] z-20 font-mono md:w-2/5 left-[15%] md:left-[10%] flex flex-col gap-5 text-left px-5 md:px-0'>
                            <h2 className='text-2xl font-semibold text-red-700'><span className='text-accent'>|</span> Trendings</h2>
                            <h2 className=' text-4xl font-semibold  text-info'>{trending.original_title}</h2>
                            <div className='flex justify-start gap-6  items-center'>
                               <div className='flex  justify-center items-center gap-1'>
                                <AiFillLike className='text-2xl text-accent'></AiFillLike>
                                <p className='text-lg font-semibold text-info'>{trending.vote_average}</p>
                               </div>
                                <button className='btn btn-accent text-4xl text-black font-semibold'><MdVideoCameraBack></MdVideoCameraBack></button>
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