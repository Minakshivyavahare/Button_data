import React from 'react'

const Checkout = () => {
    return (
        <div className="mx-auto my-5" style={{ width: "500px", border: '1px solid grey', padding: "20px", borderRadius: "5px" }}>
          
            <h3 style={{ textAlign: "left"}}><b>Basic Information</b></h3>
           
            <hr />
            <form>

                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form6Example1" className="form-control" style={{ border: '1px solid grey' }} />
                            <label className="form-label" for="form6Example1">First name</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form6Example2" className="form-control" style={{ border: '1px solid grey' }} />
                            <label className="form-label" for="form6Example2">Last name</label>
                        </div>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form6Example1" className="form-control" style={{ border: '1px solid grey' }} />
                            <label className="form-label" for="form6Example1">Phone Number</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form6Example2" className="form-control" style={{ border: '1px solid grey' }}/>
                            <label className="form-label" for="form6Example2">Email Address</label>
                        </div>
                    </div>
                </div>

                <div class="form-outline mb-4" style={{ border: '1px solid black' }}>
                    <textarea class="form-control" id="form4Example3" rows="4"></textarea>
                    <label class="form-label" for="form4Example3">Full Address</label>
                </div>


                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form6Example1" className="form-control" style={{ border: '1px solid grey' }} />
                            <label className="form-label" for="form6Example1">City</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form6Example2" className="form-control" style={{ border: '1px solid grey' }} />
                            <label className="form-label" for="form6Example2">State</label>
                        </div>
                    </div>

                    <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form6Example2" className="form-control" style={{ border: '1px solid grey' }} />
                            <label className="form-label" for="form6Example2">Zip Code</label>
                        </div>
                    </div>
                </div>

                <button class="btn btn-primary" type='Submit'>Place Order</button>
            </form>
        </div>
    )
}

export default Checkout