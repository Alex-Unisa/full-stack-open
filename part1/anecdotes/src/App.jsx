import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";
import { parts, course } from "./components/data";

const App = () => {
  return (
    <div>
      <Header title={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
