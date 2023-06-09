import { useEffect, useState } from "react";
import { Footer } from "../Home/Footer/Footer";
import { Header } from "../Home/Header/Header";
import { Video } from "./video/Video";
import { Spinner } from "../Spinner/Spinner";

export const Videography = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Header />
          <Video />
          <Footer />
        </>
      )}
    </>
  );
};
