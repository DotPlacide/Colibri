import React from "react"
const BoxDown =() => {
    return (
                <div>
                <div className="card card-body bodyCard">
                    <h5 className="card-title" Style={"color: #3A314E"}>Enter the name of your job post</h5>
                    <section className="col-md-8 m-lg-bottom">
                        <form>
                            <div className="row">
                                <h5>Job Category</h5>
                            </div>
                        </form>
                        <span>Let's categorize your job, which helps us personalize your job details and match your job to relevant our Worker.</span><hr/>
                        <a href="" type="button" data-toggle="modal"
                           data-target="#myModal">See category</a>
                    </section>

                </div>
                <div className="card-footer card-box Btz ">
                    <div>
                        <a href="" className="btn btn-white buttonZone">cancel</a>
                        <a href="/Description" className="btn btn-started buttonZone">continue</a>
                    </div>
                </div>
                </div>
    )
}

export default BoxDown