import React from 'react'

function Modal() {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" style={{color : "black"}} id="exampleModalLabel">Kodit AI</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

                <h3>About Kodit</h3>
                <p>
                    Kodit is a dynamic software solutions company based in Abidjan,
                    Ivory Coast. With a team that includes a diverse group of African
                    and international programmers & designers, Kodit leverages this rich
                    pool of talent to deliver innovative solutions that meet the unique
                    needs of our clients.
                </p>
                <h3>Our Mission:</h3>
                <p>
                    At Kodit, our mission is to bridge the gap between cutting-edge
                    technology and real-world business challenges. We believe in
                    harnessing the power of software and combining creativity,
                    innovation, and technical expertise to deliver customized solutions
                    that drive growth and efficiency for our clients.
                </p>
                <h3>Our Expertise:</h3>
                <h4>- Software Solutions:</h4>
                <p>
                    From custom software development to mobile app and web development,
                    we offer a range of solutions designed to meet the evolving needs of
                    modern businesses. Our team excels in creating scalable, secure, and
                    user-friendly software applications.
                </p>
                <h4>- Marketing Services:</h4>
                <p>
                    In addition to our software expertise, we also offer a suite of
                    marketing services. Our team specializes in social media management,
                    branding, and packaging design, helping businesses enhance their
                    online presence and reach their target audience effectively.
                </p>
                <h4>Our Approach:</h4>
                <p>
                    At Kodit, we take a collaborative approach to every project. We work
                    closely with our clients to understand their unique requirements and
                    develop solutions that are tailored to their specific needs. Our
                    commitment to excellence and customer satisfaction sets us apart.
                </p>
                <h4>Our Commitment:</h4>
                <p>
                    We are dedicated to delivering high-quality solutions that add
                    tangible value to our clients' businesses. Whether it's developing
                    innovative software applications or crafting compelling marketing
                    strategies, we are passionate about helping our clients succeed.
                </p>

            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Modal