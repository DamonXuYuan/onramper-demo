import React from "react";
import { ONRAMPER_API_KEY } from "../../assets/js/onramperConfig";
import styles from "./style.module.scss";

const Home: React.FC = () => {
  const fiats = ["USD", "AUD"];
  const cryptos = ["BTC", "ETH", "SOL"];

  return (
    <div className={styles.AppContainer}>
      <iframe
        src={`https://buy.onramper.dev?apiKey=${ONRAMPER_API_KEY}&mode=buy&onlyFiats=${fiats}&onlyCryptos=${cryptos}`}
        title="Onramper Widget"
        height="630px"
        width="420px"
        allow="accelerometer; autoplay; camera; gyroscope; payment; microphone"
      />
    </div>
  );
};

export default Home;
