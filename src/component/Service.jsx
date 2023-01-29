import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
function Service() {
  return (
    
    <>
        <section className='service-section mb-5'>
            <div className="container mb-5">
                <div className="justify-content-center row">
                    <div className="col-lg-7">
                        <div className="text-center mt-5 mb-5">
                        <h2>নিজের শেখা নিজেই গুছিয়ে <br /> নেয়ার যাত্রা শুরু হোক</h2>
                        <p>যেকোনো বিষয়ের যেকোনো টপিকে আধুনিক প্রশিক্ষণে আমরা আছি আপনার সাথে</p>
                        </div>
                    </div>
                </div>
                    <div className="row mb-5">
                        <div className="col-lg-4">
                        <div class="shadow mb-3  bg-body rounded">
                        <Player
                        autoplay
                        loop
                        src="https://assets1.lottiefiles.com/packages/lf20_7fwvvesa.json"
                        style={{ height: '200px', width: '150px' }}
                        >
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                        </Player>
                        <div className="card_title">
                        <h3 className='mt-2 mb-2 text-center'>নিজেকে জানো</h3>
                        <p className='text-center'>ই-কেয়ার একাডেমি থেকে বেছে নিন আপনার প্রয়োজনীয় কোর্সটি</p>
                        </div>
                        
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div class="shadow mb-3  bg-body rounded">
                        <Player
                        autoplay
                        loop
                        src="https://assets8.lottiefiles.com/packages/lf20_g9fdypue.json"
                        style={{ height: '200px', width: '150px' }}
                        >
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                        </Player>
                        <div className="card_title">
                        <h3 className='mt-2 mb-2 text-center'>স্কিল ডেভেলপমেন্ট</h3>
                        <p className='text-center'>প্রতিটি বিষয়ের কোর্স ম্যাটেরিয়াল বিশেষজ্ঞ দ্বারা ডিজাইন করা হয়েছে</p>
                        </div>
                        
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div class="shadow mb-3  bg-body rounded">
                        <Player
                        autoplay
                        loop
                        src="https://assets4.lottiefiles.com/packages/lf20_4woj36oz.json"
                        style={{ height: '200px', width: '150px' }}
                        >
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                        </Player>
                        <div className="card_title">
                        <h3 className='mt-2 mb-2 text-center'>সফলতা অর্জন</h3>
                        <p className='text-center'>এই কোর্সগুলো শুধুমাত্র আমাদের ইউজারদের জন্য তৈরিকৃত</p>
                        </div>
                        
                        </div>
                        </div>
                    </div>
            </div>
        </section>
    </>
  )
}

export default Service