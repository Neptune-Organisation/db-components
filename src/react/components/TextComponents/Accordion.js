import { useState } from "react"

export const Accordion = (props) =>{

    const [ accordionClass, setAccordionClass] = useState("accordion-hidden")

    const updateAccordionClass = () => {
        accordionClass === "accordion-hidden" ? setAccordionClass ("accordion-show") : setAccordionClass("accordion-hidden")
    }

    const data = props.data
    const showTxt = data.showTxt
    const showTxtClass = data.showTxtClass
    const hiddenTxt = data.hiddenTxt

    return(
        <div className={accordionClasss} onClick={() => updateAccordionClass()}>
            <p className={`${showTxtClass}`} >{showTxt}</p>
            <p className={`${accordionClass}__child`}>{hiddenTxt}</p>
        </div>
    )
}