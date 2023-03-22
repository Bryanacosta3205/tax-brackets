import Footer from "@components/layouts/footer/Footer";
import Header from "@components/layouts/header/Header";
import { Main, MainWrapper } from "./MainLayout.css";

interface MainLayoutProps {
  children?: React.ReactNode[] | React.ReactNode;
}
const MainLayout: React.FC<MainLayoutProps> = ({ children }): JSX.Element => {
  return (
    <div>
      <Header />
      <MainWrapper>
        <Main>{children}</Main>
      </MainWrapper>
      <Footer/>
    </div>
  );
};

export default MainLayout;
