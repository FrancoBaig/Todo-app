import "./App.css";
import SelectionBar from "./components/SelectionBar";
import TaskBoard from "./components/TaskBoard";

function App() {
    return (
        <div className="App">
            <header className="title">#todo</header>
            <SelectionBar />
            <TaskBoard />
        </div>
    );
}

export default App;
