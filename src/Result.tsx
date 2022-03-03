import { useState } from "react";
import "./Result.css";

function Result() {
    const [result] = useState("結果を表示する");
    return (
        <div className="Result">
            <textarea>{result}</textarea>
        </div>
    );
}

export default Result;
