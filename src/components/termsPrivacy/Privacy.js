import React from 'react'


const PrivacyPolicy = () => {
    return (
        <>

            <section>

                <div className='container !max-w-[800px] mx-auto pb-20 pt-20 px-6 md:px-4 '>
                    <div className="xl:mb-2 text-center">
                        <h2 className="text-center text-3xl text-black font-semibold md:text-4xl lg:text-5xl mb-10 md:mb-0">Privacy Policy</h2>

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
    description: "At myEV Point  we value your privacy and are committed to protecting and processing your personal information responsibly. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services at https://www.themyEV Point.in/.",
    conditions: [
        {
            header: "Information We Collect",
            desc: "<ul><li>Personal Information:</li><p>We may collect  particular information  similar as your name, address, and contact details when you interact with our website, especially when you freely  give it through forms.</p><li>Usage Information:</li><p>We automatically collection-personal information about your commerce with our website, including  runners visited, time spent, and other analytics data to enhance your experience.</p></ul>"
        },
        {
            header: "How We Use Your Information",
            desc: "<ul><li>Service Delivery:</li><p>We use your information to provide, improve, responding to inquiries, and delivering customer support. </p><li>Communication:</li><p>We may use your contact information to  shoot important updates, newsletters, and promotional accoutrements. You can conclude- out of promotional dispatches at any time.</p></ul>"
        },
        {
            header: "Information Sharing",
            desc: "<ul><li>Service Providers:</li><p>We may partake your information with trusted third- party service providers to  help us in delivering our services, subject to confidentiality agreements.</p><li>Legal Compliance:</li><p>We may disclose your information in accordance with applicable laws, regulations or legal process.</p></ul>"
        },
        {
            header: "Security",
            desc: "We employ reasonable security measures to cover your information from unauthorized access,  exposure,  revision, and destruction."
        },
        {
            header: "Cookies",
            desc: "We use cookies to enhance your browsing experience. You can manage cookie preferences through your cybersurfer settings."
        },
        {
            header: "Your Choices",
            desc: "You have the right to review, update, or  cancel your  particular information. Please  communicate  us mailto:info@themyEV Point.in for backing."
        },
        {
            header: "Changes to this Privacy Policy",
            desc: "We may  modernize this Privacy Policy periodically. Any changes will be posted on this runner with the streamlined date."
        },
        {
            header: "Contact Us",
            desc: "If you have questions or concerns about this Privacy Policy, please contact us at <a href='mailto:info@themyEV Point.in' className='text-white text-[16px] mailto:leading-[164.706%]'>info@themyEV Point.in</a>"
        },

    ]
};

export default PrivacyPolicy;