import React from 'react'

function Children() {
  return (
    <section className='basic mb-5'>
            <div className="container pb-5">
                <div className="justify-content-center row">
                    <div className="col-lg-7">
                        <div className="text-center mt-5 mb-5">
                        <h2>বাচ্চাদের জন্য কম্পিউটার</h2>
                        <p>আপনি কোন চাকরির জন্য প্রস্তুতি নিচ্ছেন?</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="basic text-center"><img className='img-fluid' src="images/programming.jpg" alt="" />
                            <h3 className='mt-4 mb-3'>প্রোগ্রামিং এর হাতে খড়ি</h3>
                            <button class="addtocart mb-3">কোর্সের বিস্তারিত তথ্য</button>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="basic text-center"><img className='img-fluid' src="images/darwin-magic.jpg" alt="" />
                            <h3 className='mt-4 mb-3'>ডারউঁইনের জাদু</h3>
                            <button class="addtocart mb-3">কোর্সের বিস্তারিত তথ্য</button>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="basic text-center"><img className='img-fluid' src="images/scientist.jpg" alt="" />
                            <h3 className='mt-4 mb-3'>হয়ে যাও বিজ্ঞানী</h3>
                            <button class="addtocart mb-3">কোর্সের বিস্তারিত তথ্য</button>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="basic text-center"><img className='img-fluid' src="images/Freelancing-career-1.jpg" alt="" />
                            <h3 className='mt-4 mb-3'>শীঘ্রই আসছে</h3>
                            <button class="addtocart mb-3">কোর্সের বিস্তারিত তথ্য</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Children