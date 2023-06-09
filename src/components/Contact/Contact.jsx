import { useEffect, useState } from "react";
import { Footer } from "../Home/Footer/Footer";
import { Header } from "../Home/Header/Header";
import { About } from "./About/About";
import { Spinner } from "../Spinner/Spinner";

export const Contact = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    },[])

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Header />
          <About />
          <Footer />
        </>
      )}
    </>
  );
};
