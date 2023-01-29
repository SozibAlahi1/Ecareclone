import React from 'react'

function Hero() {
  return (
    <>
       <section className="herosection">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="title">
                            <h1>ঘরে বসে দক্ষতা অর্জনের সহজ সমাধান</h1>
                            <p className='f-18 mb-3'>দক্ষ করে গড়ে তুলুন নিজেকে ই কেয়ার একাডেমির সাশ্রয়ী মূল্যের সব কোর্স এর মাধ্যমে।</p>
                            <a href=""><button className='enrolBtn mb-5'>এনরল করুন</button></a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src="images/h1.png " className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
       </section>
    </>
  )
}

export default Hero