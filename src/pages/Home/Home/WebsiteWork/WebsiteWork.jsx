import {
    Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel,
} from 'react-accessible-accordion';
import feathureImg from '../../../../assets/garden-red-gumboots.jpg'



// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import SectionTitle from '../../../../shared/SectionTitle/SectionTitle';


const WebsiteWork = () => {
    return (
        <div className='mt-20'>
            <div className="bg-[url('https://i.postimg.cc/pVJQPM76/groom-bride-with-pink-hair-stand-before-door-with-flower-garlands-light.jpg')] bg-fixed text-white mb-20 bg-black bg-opacity-30">
                <div className="md:pt-10 pt-3">
                    <SectionTitle heading={'how website work'} subHeading={'lets know'}></SectionTitle>
                </div>
                <div className="md:flex md:flex-row pt-8 md:pb-20 pb-5 md:px-10 lg:px-32 px-10 md:gap-8 justify-center items-center bg-black bg-opacity-60">
                    <div className='flex-1 w-full'>
                        <img src={feathureImg} alt="" />
                    </div>
                    <div className='flex-1'>
                        <Accordion className='w-full h-full md:mt-0 mt-5 rounded-lg font-semibold'>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is Porinoy.com?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Porinhoy.com is an online platform that facilitates the process of finding a life partner or spouse. Our website designed to help individuals, typically those seeking marriage, connect with potential partners based on various criteria such as age, religion, caste, interests, and more.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        how does our website work?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Users start by creating an account on the website. After registration, users create detailed profiles, including information about themselves and the type of life partner they are seeking.Users can search for potential matches using the website's search filters.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Are there any facilities for premium member
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Our website offer premium or paid features, such as enhanced search filters, priority listing in search results, and additional communication options. These features are designed to provide a better and more customized experience for users.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Our Mission
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Empowering individuals to discover and build meaningful connections leading to lasting marriage
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default WebsiteWork;