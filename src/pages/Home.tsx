import Button from "../components/Button";


const Home = () => {
    return (
        <div className="p-5">
            <h1 className="text-lg font-bold text-bold text-center">
                Home page route: `(-,-)`
            </h1>

            <Button type="button" variant="primary" onClick={() => {}}>
                Click here
            </Button>

            <Button type="button" variant="secondry" onClick={() => {}}>
                Click here
            </Button>
        </div>
    );
};

export default Home;