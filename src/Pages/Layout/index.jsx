import Header from "../../Components/Header";
import "./Layout.scss";


const Layout = (props) => {
    return (

        <div className="wrapper">
            <Header />


            <main className="main">
                {props.children}

            </main>
        </div>
    );
};

export default Layout;