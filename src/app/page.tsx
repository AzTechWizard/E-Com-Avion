import BrandDiff from "./components/BrandDiff/page";
import Hero from "./components/Hero/page";
import ProcList from "./components/ProcLine/page";
import WhereItStarted from "./components/whereItStarted/page";

const Main = () => {
  return (
    <div>
      <Hero />
      <BrandDiff />
      <ProcList />
      <WhereItStarted />
    </div>
  )
}

export default Main;