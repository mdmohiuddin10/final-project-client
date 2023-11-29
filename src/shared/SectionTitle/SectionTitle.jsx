const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="md:w-4/12 mx-auto my-5">
            <p className="text-yellow-500 mb-4 text-center">---{subHeading}---</p>
            <h3 className="font-medium border-y-4 py-4 text-3xl text-center">{heading}</h3>
        </div>
    );
};

export default SectionTitle;