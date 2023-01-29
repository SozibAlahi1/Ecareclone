import React from 'react'

function BasicCourse() {
  return (
    <>
        <section className='basic mb-5'>
            <div className="container pb-5">
                <div className="justify-content-center row">
                    <div className="col-lg-7">
                        <div className="text-center mt-5 mb-5">
                        <h2>বেসিক কম্পিউটার কোর্স</h2>
                        <p>আপনি কোন চাকরির জন্য প্রস্তুতি নিচ্ছেন?</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="basic text-center"><img className='img-fluid' src="images/Offce-4.png" alt="" />
                            <h3 className='mt-4 mb-3'>অফিস এপ্লিকেশন</h3>
                            <button class="addtocart mb-3">কোর্সের বিস্তারিত তথ্য</button>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="basic text-center"><img className='img-fluid' src="images/data.jpg" alt="" />
                            <h3 className='mt-4 mb-3'>ডাটাবেজ প্রোগ্রামিং</h3>
                            <button class="addtocart mb-3">কোর্সের বিস্তারিত তথ্য</button>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="basic text-center"><img className='img-fluid' src="images/english.jpg" alt="" />
                            <h3 className='mt-4 mb-3'>স্পোকেন ইংলিশ</h3>
                            <button class="addtocart mb-3">কোর্সের বিস্তারিত তথ্য</button>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="basic text-center"><img className='img-fluid' src="images/hsc.png" alt="" />
                            <h3 className='mt-4 mb-3'>HSC আইসিটি</h3>
                            <button class="addtocart mb-3">কোর্সের বিস্তারিত তথ্য</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default BasicCourse