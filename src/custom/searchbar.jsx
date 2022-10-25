import "./searchbar.css"

import { useState } from "react"

export default function Searchbar(props) {

    const testsvar = [ //sökning på "f_"
        {
            begreppId: 209,
            begreppTillagd: "2022-09-14T18:43:52.000Z",
            begreppUppdaterad: "2022-09-14T18:43:52.000Z",
            begreppText: 'fa',
            forklaringId: 209,
            forklaringBegreppId: 209,
            forklaringOrganisationId: 1,
            forklaringKlartext: 'fristående aktör',
            forklaringOriginalText: '',
            forklaringOriginalKalla: '',
            forklaringOriginalVersaler: '',
            forklaringCustomText: '',
            forklaringRelateradeBegrepp: '',
            forklaringInhamtadAutomatiskt: 0,
            organisationId: 1,
            organisationTillagd: "2022-09-14T18:43:52.000Z",
            organisationUppdaterad: "2022-09-14T18:43:52.000Z",
            organisationNamn: 'arbetsförmedlingen',
            organisationForkortning: '',
            organisationHemsida: '',
            organisationLogga: 'Af_logotyp_rgb.svg'
        },
        {
            begreppId: 167,
            begreppTillagd: "2022-09-14T18:43:51.000Z",
            begreppUppdaterad: "2022-09-14T18:43:51.000Z",
            begreppText: 'fk',
            forklaringId: 167,
            forklaringBegreppId: 167,
            forklaringOrganisationId: 1,
            forklaringKlartext: 'Försäkringskassan',
            forklaringOriginalText: '',
            forklaringOriginalKalla: null,
            forklaringOriginalVersaler: '',
            forklaringCustomText: '',
            forklaringRelateradeBegrepp: '',
            forklaringInhamtadAutomatiskt: 0,
            organisationId: 1,
            organisationTillagd: "2022-09-14T18:43:52.000Z",
            organisationUppdaterad: "2022-09-14T18:43:52.000Z",
            organisationNamn: 'arbetsförmedlingen',
            organisationForkortning: '',
            organisationHemsida: '',
            organisationLogga: 'Af_logotyp_rgb.svg'
        },
        {
            begreppId: 167,
            begreppTillagd: "2022-09-14T18:43:51.000Z",
            begreppUppdaterad: "2022-09-14T18:43:51.000Z",
            begreppText: 'fk',
            forklaringId: 168,
            forklaringBegreppId: 167,
            forklaringOrganisationId: 22,
            forklaringKlartext: 'Försäkringskassan',
            forklaringOriginalText: '',
            forklaringOriginalKalla: null,
            forklaringOriginalVersaler: '',
            forklaringCustomText: '',
            forklaringRelateradeBegrepp: '',
            forklaringInhamtadAutomatiskt: 0,
            organisationId: 22,
            organisationTillagd: "2022-09-14T18:43:52.000Z",
            organisationUppdaterad: "2022-09-14T18:43:52.000Z",
            organisationNamn: 'försäkringskassan',
            organisationForkortning: '',
            organisationHemsida: '',
            organisationLogga: 'forsakringskassan.svg'
        },
        {
            begreppId: 970,
            begreppTillagd: "2022-09-14T18:45:08.000Z",
            begreppUppdaterad: "2022-09-14T18:45:08.000Z",
            begreppText: 'fp',
            forklaringId: 1003,
            forklaringBegreppId: 970,
            forklaringOrganisationId: 22,
            forklaringKlartext: 'föräldrapenning',
            forklaringOriginalText: 'förmån som kan betalas ut till en försäkrad när hen inte förvärvsarbetar eller avstår från förvärvsarbete för att vårda sitt barn och i vissa andra situationer som har samband med barnet',
            forklaringOriginalKalla: 'https://forsakringskassan.itermsystem.com/?TermId=866&SrcLang=sv&TrgLang=en',
            forklaringOriginalVersaler: 'FP',
            forklaringCustomText: '',
            forklaringRelateradeBegrepp: '',
            forklaringInhamtadAutomatiskt: 1,
            organisationId: 22,
            organisationTillagd: "2022-09-14T18:43:52.000Z",
            organisationUppdaterad: "2022-09-14T18:43:52.000Z",
            organisationNamn: 'försäkringskassan',
            organisationForkortning: '',
            organisationHemsida: '',
            organisationLogga: 'forsakringskassan.svg'
        },
        {
            begreppId: 981,
            begreppTillagd: "2022-09-14T18:45:08.000Z",
            begreppUppdaterad: "2022-09-14T18:45:08.000Z",
            begreppText: 'fv',
            forklaringId: 1014,
            forklaringBegreppId: 981,
            forklaringOrganisationId: 22,
            forklaringKlartext: 'Avdelningen för funktionsnedsättning och varaktigt nedsatt arbetsförmåga',
            forklaringOriginalText: null,
            forklaringOriginalKalla: 'https://forsakringskassan.itermsystem.com/?TermId=838&SrcLang=sv&TrgLang=en',
            forklaringOriginalVersaler: 'FV',
            forklaringCustomText: '',
            forklaringRelateradeBegrepp: '',
            forklaringInhamtadAutomatiskt: 1,
            organisationId: 22,
            organisationTillagd: "2022-09-14T18:43:52.000Z",
            organisationUppdaterad: "2022-09-14T18:43:52.000Z",
            organisationNamn: 'försäkringskassan',
            organisationForkortning: '',
            organisationHemsida: '',
            organisationLogga: 'forsakringskassan.svg'
        }
    ]
    // const testsvar = [ //sökning på "afli" - 2 svar, samma begrepp
    //     {
    //         begreppId: 10,
    //         begreppTillagd: "2022-09-14T18:43:50.000Z",
    //         begreppUppdaterad: "2022-09-14T18:43:50.000Z",
    //         begreppText: 'afli',
    //         forklaringId: 10,
    //         forklaringBegreppId: 10,
    //         forklaringOrganisationId: 1,
    //         forklaringKlartext: 'Arbetsförmedlingen levererar information',
    //         forklaringOriginalText: 'Tjänst, för handläggare på kommuner, som ger tillgång till viss information som behövs i bedömningen av om ekonomiskt bistånd.',
    //         forklaringOriginalKalla: 'https://arbetsformedlingen.se/for-kommuner/hamta-uppgifter',
    //         forklaringOriginalVersaler: '',
    //         forklaringCustomText: '',
    //         forklaringRelateradeBegrepp: '',
    //         forklaringInhamtadAutomatiskt: 0,
    //         organisationId: 1,
    //         organisationTillagd: "2022-09-14T18:43:52.000Z",
    //         organisationUppdaterad: "2022-09-14T18:43:52.000Z",
    //         organisationNamn: 'arbetsförmedlingen',
    //         organisationForkortning: '',
    //         organisationHemsida: '',
    //         organisationLogga: 'Af_logotyp_rgb.svg' //FIXME: Tillagd i efterhand, justera i DB!
    //     },
    //     {
    //         begreppId: 10,
    //         begreppTillagd: "2022-09-14T18:43:50.000Z",
    //         begreppUppdaterad: "2022-09-14T18:43:50.000Z",
    //         begreppText: 'afli',
    //         forklaringId: 11,
    //         forklaringBegreppId: 10,
    //         forklaringOrganisationId: 11,
    //         forklaringKlartext: 'Arbetsförmedlingen levererar information',
    //         forklaringOriginalText: 'Tjänst, för handläggare på kommuner, som ger tillgång till viss information som behövs i bedömningen av om ekonomiskt bistånd.',
    //         forklaringOriginalKalla: 'https://arbetsformedlingen.se/for-kommuner/hamta-uppgifter',
    //         forklaringOriginalVersaler: '',
    //         forklaringCustomText: '',
    //         forklaringRelateradeBegrepp: '',
    //         forklaringInhamtadAutomatiskt: 0,
    //         organisationId: 11,
    //         organisationTillagd: "2022-09-14T18:43:52.000Z",
    //         organisationUppdaterad: "2022-09-14T18:43:52.000Z",
    //         organisationNamn: 'skr',
    //         organisationForkortning: '',
    //         organisationHemsida: '',
    //         organisationLogga: 'skr.svg' //FIXME: Tillagd i efterhand, justera i DB!
    //     }
    // ]

    function formatDbResponse(dbResponse) {
        const formatedResponse = []

        dbResponse.forEach(forklaring => {
            const previous = formatedResponse.find(prev => prev.begreppId === forklaring.begreppId)

            const { begreppId, begreppText, begreppUppdaterad, begreppTillagd } = forklaring

            if (previous) previous.forklaringar.push(forklaring)
            else formatedResponse.push({
                begreppId,
                begreppText,
                begreppUppdaterad,
                begreppTillagd,
                forklaringar: [forklaring]
            })
        })
        return formatedResponse
    }

    function getResults(searchParam) {
        return new Promise((resolve, reject) => {
            resolve(testsvar)
        })
    }

    async function updateResults() {
        console.log("kör")
        setLoadingState(true)
        const svar = await getResults("")
        const formateratSvar = formatDbResponse(svar)
        setLoadingState(false)
        props.searchFunction(_ => {
            console.log(formateratSvar)
            return formateratSvar
        })
    }

    const [loadingState, setLoadingState] = useState(false)

    return (
        <div className="searchbar" data-loading={loadingState}>
            <label htmlFor="search">Vad vill du söka efter?</label>
            <input type="text" name="search" id="search"
                onInput={() => updateResults()} />
            <button
                className="submit"
                onClick={() => updateResults()}
            ></button>
        </div>
    )
}
