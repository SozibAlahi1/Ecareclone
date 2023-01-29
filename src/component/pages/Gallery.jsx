import React from 'react'
import Header from '../header';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Footer from '../Footer';
function Gallery() {
  return (
    <>
    <Header />
       <div className="container mt-5 pt-5 mb-5 pb-5">
        <div className="justify-content-center row mb-5">
            <div className="col-lg-7">
                <div className="text-center mt-5">
                    <h3 className='fonts fw-bold'>৪৩ তম জাতীয় বিজ্ঞান ও প্রযুক্তি সপ্তাহ ২০২১-বাঘা উপজেলা</h3>
                    <div className="borders"></div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 mt-4">
                <div className="galleryimages">
                    <img src="images/gallery/1.jpg" className="img-fluid" />
                </div>
            </div>
            <div className="col-lg-4 mt-4">
                <div className="galleryimages">
                    <img src="images/gallery/2.jpg" className="img-fluid" />
                </div>
            </div>
            <div className="col-lg-4 mt-4">
                <div className="galleryimages">
                    <img src="images/gallery/3.jpg" className="img-fluid" />
                </div>
            </div>
        </div>
        <div className="justify-content-center row">
            <div className="col-lg-7">
                <div className="text-center mt-5">
                    <h3 className='fonts fw-bold'>ডিজিটাল বাংলাদেশ মেলা 2021</h3>
                    <div className="borders"></div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 mt-4">
                <div className="galleryimages">
                    <img src="images/gallery/4.png" className="img-fluid" />
                </div>
            </div>
            <div className="col-lg-4 mt-4">
                <div className="galleryimages">
                    <img src="images/gallery/5.png" className="img-fluid" />
                </div>
            </div>
            <div className="col-lg-4 mt-4">
                <div className="galleryimages">
                    <img src="images/gallery/6.png" className="img-fluid" />
                </div>
            </div>
            {/* end */}
            </div>
            <div className="justify-content-center row">
            <div className="col-lg-7">
                <div className="text-center mt-5">
                    <h3 className='fonts fw-bold'>সার্টিফিকেট প্রদান অনুষ্ঠান 2021</h3>
                    <div className="borders"></div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 mt-4">
                <div className="galleryimages">
                    <img src="images/gallery/7.jpg" className="img-fluid" />
                </div>
            </div>
            <div className="col-lg-4 mt-4">
                <div className="galleryimages">
                    <img src="images/gallery/8.jpg" className="img-fluid" />
                </div>
            </div>
            <div className="col-lg-4 mt-4">
                <div className="galleryimages">
                    <img src="images/gallery/9.jpg" className="img-fluid" />
                </div>
            </div>
            <div className="col-lg-4 mt-4">
                <div className="galleryimages">
                    <img src="images/gallery/10.png" className="img-fluid" />
                </div>
            </div>
            <div className="col-lg-4 mt-4">
                <div className="galleryimages">
                    <img src="images/gallery/11.png" className="img-fluid" />
                </div>
            </div>
            <div className="col-lg-4 mt-4">
                <div className="galleryimages">
                    <img src="images/gallery/12.png" className="img-fluid" />
                </div>
            </div>
            </div>
            <div className="footertopsection mt-5">
                <div className="row">
                    <div className="col-lg-3">
                    <Player
                        autoplay
                        loop
                        src="https://assets6.lottiefiles.com/packages/lf20_HF41OKnIK9.json"
                        style={{ height: '400', width: '400' }}
                        >
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                        </Player>
                    </div>
                    <div className="col-lg-3">
                        <h2 className='ml-3 fonts mt-5 fw-bold'>আমাদের ফেসবুক কমিউনিটিতে যুক্ত হন</h2>
                    </div>
                    <div className="col-lg-3">
                    <center><a href=""><button className='mt-5 mb-5 btn-subscribe'>Join Now</button></a></center>
                    </div>
                </div>
            </div>
       </div>

<Footer />
    </>
  )
}

export default Gallery