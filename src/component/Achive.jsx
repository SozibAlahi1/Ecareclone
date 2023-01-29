import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
function Achive() {
  return (
    <>
        <section className='service-section'>
            <div className="container mb-5">
                <div className="justify-content-center row">
                    <div className="col-lg-7">
                        <div className="text-center mt-5 mb-5">
                        <h2>আমাদের অর্জন</h2>
                        <p>অন্য প্রতিষ্ঠান থেকে আমরা কেন আলাদা? আমাদের প্রতিষ্ঠানকে কেন বেছে নিবেন?</p>
                        </div>
                        <div className="lottiesection mt-3">
                        <Player
                        autoplay
                        loop
                        src="https://assets2.lottiefiles.com/packages/lf20_qqonnlpd.json"
                        style={{ height: '400px', width: '400px' }}
                        >
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                        </Player>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="text-center">
                                <img src="images/content-1.png" alt="" />
                                <h1 className='mt-3 atitle'>41K</h1>
                                <p>শিক্ষা</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="text-center">
                                <img src="images/student-1.png" alt="" />
                                <h1 className='mt-3 atitle'>25K</h1>
                                <p>শিক্ষার্থী</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="text-center">
                                <img src="images/teacher-1.png" alt="" />
                                <h1 className='mt-3 atitle'>17K</h1>
                                <p>শিক্ষক</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="text-center">
                                <img src="images/user-1.png" alt="" />
                                <h1 className='mt-3 atitle'>41K</h1>
                                <p>রিভিউ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Achive