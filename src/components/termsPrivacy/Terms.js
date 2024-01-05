import React from 'react'

const TermsConditions = () => {
    return (
        <>

            <section>

                <div className='container !max-w-[800px] mx-auto pb-20 pt-20 px-6 md:px-4 '>
                    <div className="xl:mb-2 text-center">
                        <h2 className="text-center text-3xl text-black font-semibold md:text-4xl lg:text-5xl mb-10 md:mb-0">Terms and Conditions</h2>

                    </div>
                    <p className='text-[16px] mt-8'>{data.description}</p>
                    <div className='py-6'>
                        {data.conditions.map((index, i) => (
                            <div key={i}>
                                <h4 className='mb-0 font-bold'>{index.header}:</h4>
                                <p
                                    className='text-[16px]'
                                    dangerouslySetInnerHTML={{ __html: index.desc }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}

const data = {
    description: "Before you begin your journey with our  services, it is essential to understand the terms and conditions that govern our relationship. This overview provides a brief summary of the key points of our terms and conditions.",
    conditions: [
        {
            header: "Acceptance of Terms",
            desc: "By accessing or using the myEV Point Services, you agree to comply with and be bound by our Terms and Conditions. Make sure to read them carefully before proceeding."
        },
        {
            header: "Service Description",
            desc: "myEV Pointprovides a range of EV Point services, computing resources, and applications. Our services are designed to enhance your digital experience and streamline your operations."
        },
        {
            header: "User Responsibilities",
            desc: "Users are responsible for maintaining the confidentiality of their account credentials and ensuring that their use of myEV Point complies with applicable laws and regulations. Any unauthorized use is strictly prohibited."
        },
        {
            header: "Data Security and Privacy",
            desc: "We prioritize the security and privacy of your information. myEV Point takes industry-standard measures to protect your information. However, users should be aware of their responsibilities regarding data security and privacy."
        },
        {
            header: "Payments and Billing",
            desc: "If you subscribe to Premium Services, you agree to timely pay the specified fees. myEV Point reserves the right to modify prices and payment terms by giving notice to Users."
        },
        {
            header: "Termination of Services",
            desc: "myEV Point reserves the right to suspend or terminate services to users who violate our terms and conditions. Subject to applicable cancellation policies, Users may terminate their Accounts at any time."
        },
        {
            header: "Intellectual property",
            desc: "All content and materials provided by myEV Point are protected by intellectual property laws. Users are granted a limited, non-exclusive license to use the Services for their intended purpose."
        },
        {
            header: "Changes in Terms",
            desc: "myEV Point may update these Terms and Conditions from time to time. Users will be notified of any material changes, and continued use of the Services implies acceptance of the revised Terms.<br/>By connecting with myEV PointCloud, Users enter into a mutually beneficial, and understanding and following these Terms and Conditions ensures a smooth and secure collaboration. If you have any questions or concerns, don't hesitate to contact our support team."
        },

    ]
};

export default TermsConditions;