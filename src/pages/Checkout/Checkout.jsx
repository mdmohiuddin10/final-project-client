import { useParams } from "react-router-dom";


const Checkout = () => {
    const {id} = useParams()
    console.log(id);
    return (
        <div>
            <h2>hlew</h2>
        </div>
    );
};

export default Checkout;