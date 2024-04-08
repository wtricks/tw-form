import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/auth/signup');
    }

    return (
        <div className="flex justify-center items-center flex-col min-h-screen bg-slate-50">
            <h1 className="text-5xl mb-2 font-bold text-pink-500">Welcome to My Site</h1>
            <p className="text-slate-500 text-2xl mt-2">Made using <span className="font-bold">Reactjs</span> and Styled using <span className="font-bold">Tailwind Css</span></p>
        
            <Button type="button" variant="primary" onClick={handleClick} className="mt-10">
                View the actual demo
            </Button>
        </div>
    );
};

export default Home;