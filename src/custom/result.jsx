import "./result.css"

import ResultItem from "./resultitem"

function Result(props) {
    return (
        <li className="result">
            <h2>{props.data.begreppText}</h2>
            <ul>
                {props.data.forklaringar && props.data.forklaringar.map(forklaring => {
                    return <ResultItem data={forklaring} key={forklaring.forklaringId} />
                })}
            </ul>
        </li>
    )
}

export default Result