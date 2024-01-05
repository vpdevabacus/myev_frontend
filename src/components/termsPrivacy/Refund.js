import React from 'react'


const Refund = () => {
    return (
        <>

            <section>

                <div className='container !max-w-[800px] mx-auto pb-20 pt-20 px-6 md:px-4 '>
                    <div className="xl:mb-2 text-center">
                        <h2 className="text-center text-3xl text-black font-semibold md:text-4xl lg:text-5xl mb-10 md:mb-0">Refund Policy</h2>

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
    description: "At myEV Point , our primary goal is to ensure complete customer satisfaction. To ensure a transparent understanding of our refund policy, please carefully read the terms outlined below:",
    conditions: [
        {
            header: "Eligibility for Refund",
            desc: "<ul><li>We understand that circumstances may arise where a refund is warranted. To be eligible for a refund, you must meet the certain criteria:</li><p>The request for a refund must be submitted within stipulated days from the date of purchase or service activation as decided by the company rules </p><p>The reason for the refund request must be genuine and supported by evidence after our investigation.</p></ul>"
        },
        {
            header: "Refund Request Procedure",
            desc: "<ul><p>To request a refund, please contact our customer support team at info@skypro.co.in  with the subject line 'Refund Request'. </p><p>Provide detailed information regarding the reason for the refund along with any supporting documentation or evidence.</p></ul>"
        },
        {
            header: "Limitations",
            desc: "<ul><p>Refunds are processed only for eligible services or products, as specified in the fine print of each deal. Please review the details of your purchase before making any transactions.</p></ul>"
        },
        {
            header: "Our Commitment",
            desc: "<ul><p>We strive to provide the best services to our clients and will make every effort to address and rectify any issues. Your satisfaction is our priority.</p><p>By using our services and making a purchase on info@skypro.co.in, you agree to adhere to the terms and conditions of this refund policy.</p><p>For any questions or concerns regarding our refund policy, please contact us at info@skypro.co.in.</p></ul>"
        },
        

    ]
};

export default Refund;