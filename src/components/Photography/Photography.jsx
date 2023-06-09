import { useEffect, useState } from "react";
import { Footer } from "../Home/Footer/Footer";
import { Header } from "../Home/Header/Header";
import { Photo } from "./Photo/Photo";
import { Spinner } from "../Spinner/Spinner";

export const Photography = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Header />
          <Photo />
          <Footer />
        </>
      )}
    </>
  );
};
