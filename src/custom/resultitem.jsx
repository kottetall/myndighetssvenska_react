import { useState } from "react"

export default function ResultItem(props) {
    const [expanded, setExpanded] = useState(false)
    return (
        <li className="resultItem">

            <div
                className="logo"
                data-usedby={props.data.organisationNamn}
                style={{ backgroundImage: `url(./logos/${props.data.organisationLogga})` }}
            ></div>
            <h3 className="meaning">{props.data.forklaringKlartext || props.data.begreppText}</h3>
            <button
                onClick={() => { setExpanded(current => !current) }}
            >{`${expanded ? "mindre" : "mer"} detaljer`}</button>

            <div className="moreInfo" aria-expanded={expanded}>
                {console.log(props.data)}
                <p className="explanation">
                    {props.data.forklaringOriginalText || <span className="missingExplanation">Detaljerad förklaring saknas</span>}</p>
                <span className="lastUpdated">{props.data.begreppUppdaterad.replace(/T.*/gi, "")}</span>
                <span className="fetchtype" data-fetchtype={props.data.forklaringInhamtadAutomatiskt}></span>
                {props.data.forklaringOriginalKalla ?
                    <a
                        href={props.data.forklaringOriginalKalla}
                        className="source"
                        rel="noreferrer"
                        target="_blank"
                    >mer information</a> : ""
                }
            </div>
        </li>
    )
}