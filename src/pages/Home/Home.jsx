
import Banner from "./Home/Banner/Banner";
import PremiumCards from "./Home/PremiumCards/PremiumCards";
import SuccessCenter from "./Home/SuccessCenter/SuccessCenter";
import SuccessStory from "./Home/SuccessStoryHome/SuccessStoryHome";

import WebsiteWork from "./Home/WebsiteWork/WebsiteWork";




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PremiumCards></PremiumCards>
            <WebsiteWork></WebsiteWork>
            <SuccessCenter></SuccessCenter>
          <SuccessStory></SuccessStory>
        </div>
    );
};

export default Home;