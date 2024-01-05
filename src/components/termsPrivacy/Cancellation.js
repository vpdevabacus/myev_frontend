import React from 'react'


const Cancellations = () => {
    return (
        <>

            <section>

                <div className='container !max-w-[800px] mx-auto pb-20 pt-20 px-6 md:px-4 '>
                    <div className="xl:mb-2 text-center">
                        <h2 className="text-center text-3xl text-black font-semibold md:text-4xl lg:text-5xl mb-10 md:mb-0">Cancellation Policy</h2>

                    </div>
                    <p className='text-[16px] mt-8'>{data.description}</p>
                    <div className='py-6'>
                        {data.conditions.map((index, i) => (
                            <div key={i}>
                                <h4 className='mb-0 font-bold'>{index.header}:</h4>
                                <p
                                    className='text-[16px] para-design'
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
    description: "At myEV Point , we understand that plans can change, and flexibility is essential. Our cancellation policy is designed with your convenience in mind, ensuring a seamless experience for our users.",
    conditions: [
        {
            header: "Flexible Options",
            desc: "<ul><li>We believe in providing flexibility to our users. Whether your needs have evolved, or circumstances have changed, myEV Point offers a variety of cancellation options to accommodate your needs. Our process is simple and hassle free. </li> </ul>"
        },
        {
            header: "Cancellation Deadline",
            desc: "<ul><li>To facilitate smooth operations and allow us to make necessary adjustments, we request that cancellations be made within a specified time frame. This timeframe ensures that both parties have enough time to manage the transition effectively. </li> </ul>"
        },
        {
            header: "Transparent Communication",
            desc: "<ul><li>Communication is important, and we value transparency. In the event of a cancellation, we encourage Users to communicate their decision immediately. This allows us to address any concerns, gather feedback, and ensure that your experience with myEV Point is as positive as possible. </li> </ul>"
        },
        {
            header: "User support",
            desc: "<ul><li>Our dedicated support team is here to assist you during the cancellation process. If you have any questions, concerns, or need assistance, feel free to contact our support team. We are committed to providing excellent customer service and helping you overcome any challenges. </li> </ul>"
        },
        {
            header: "Continuous Improvement",
            desc: "<ul><li>myEV Point reserves the right to suspend or terminate services to users who violate our terms and conditions. Subject to applicable cancellation policies, Users may terminate their Accounts at any time. </li> </ul>"
        },
        {
            header: "Intellectual property",
            desc: "<ul><li>Your feedback matters to us. We use the insights we gain from cancellations to continually improve our services. We appreciate your input and strive to enhance our offerings based on user experiences. At myEV Point,our goal is to make your journey with us as seamless as possible, even if plans change. Our cancellation policy reflects our commitment to providing a user-centric and friendly experience. If you have any questions or would like some clarification from us, please do not hesitate to contact our support team. </li> </ul>"
        },
       

    ]
};

export default Cancellations;