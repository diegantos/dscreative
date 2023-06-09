import { useEffect, useState } from "react";
import { Spinner } from "../Spinner/Spinner";
import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"
import { Intro } from "./Intro/Intro"

export const Home = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, []);

    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Header />
            <Intro />
            <Footer />
          </>
        )}
      </>
    );
}