import { Header } from "@/shared/ui/Header/Header.tsx";
import { Footer } from "@/shared/ui/Footer/Footer.tsx";
import { useEffect } from "react";
import { AppRouter } from "@/app/providers/AppRouter";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import { basketSliceActions } from "@/entities/Basket";
import styles from "./assets/styles/app.module.scss";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(basketSliceActions.initBasket());
  }, [dispatch]);
  return (
    <div className={styles.app}>
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
};

export default App;
