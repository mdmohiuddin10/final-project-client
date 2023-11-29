import {
    Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel,
} from 'react-accessible-accordion';
import feathureImg from '../../../../assets/garden-red-gumboots.jpg'



// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';


const WebsiteWork = () => {
    return (
        <div>
            <div className="bg-[url('https://i.postimg.cc/pVJQPM76/groom-bride-with-pink-hair-stand-before-door-with-flower-garlands-light.jpg')] bg-fixed text-white mb-20">
                <div className="md:pt-10 pt-3">
               
                </div>
                <div className="md:flex md:flex-row pt-8 md:pb-20 pb-5 md:px-32 px-10 md:gap-8 justify-center items-center bg-black bg-opacity-30">
                    <div className='flex-1'>
                        <img src={feathureImg} alt="" />
                    </div>
                    <div className='flex-1'>
                        <Accordion className='w-full h-full'>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is Porinoy.com?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Exercitation in fugiat est ut ad ea cupidatat ut in
                                        cupidatat occaecat ut occaecat consequat est minim minim
                                        esse tempor laborum consequat esse adipisicing eu
                                        reprehenderit enim.
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
                                        In ad velit in ex nostrud dolore cupidatat consectetur
                                        ea in ut nostrud velit in irure cillum tempor laboris
                                        sed adipisicing eu esse duis nulla non.
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
                                        In ad velit in ex nostrud dolore cupidatat consectetur
                                        ea in ut nostrud velit in irure cillum tempor laboris
                                        sed adipisicing eu esse duis nulla non.
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
                                        In ad velit in ex nostrud dolore cupidatat consectetur
                                        ea in ut nostrud velit in irure cillum tempor laboris
                                        sed adipisicing eu esse duis nulla non.
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