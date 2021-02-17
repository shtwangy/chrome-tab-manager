import {memo, useCallback} from "react";
import {StyledHeader, StyledH1, StyledSecondaryActionDiv, StyledSummary, StyledDetails} from "./style";
import {faCog} from "@fortawesome/free-solid-svg-icons/faCog";
import SettingBalloon from "./SettingBalloon";
import {useEffect, useRef, useState} from "react";
import {IconButton, SecondaryActionContainer} from "../UIKit";

const Header = memo(() => {
    const [isBalloonOpen, setIsBalloonOpen] = useState(false)
    const detailsRef = useRef<HTMLDetailsElement>(null)
    const summaryRef = useRef<HTMLElement>(null)
    const settingButtonRef = useRef<HTMLButtonElement>(null)
    const settingBalloonRef = useRef<HTMLDivElement>(null)

    const handleSettingButtonClick = useCallback(() => {
        if (summaryRef.current) {
            summaryRef.current.click()
        }
    }, [])

    const handleDetailsToggle = useCallback(() => {
        setIsBalloonOpen(prevState => !prevState)
    }, [])

    const handleDetailSummaryFocus = useCallback(() => {
        if (settingButtonRef.current) {
            settingButtonRef.current.focus()
        }
    }, [])

    const handleClickAway = useCallback((e: MouseEvent) => {
        if (settingBalloonRef.current && !settingBalloonRef.current.contains(e.target as Element) && detailsRef.current) {
            detailsRef.current.open = false
        }
    }, [])

    const handleFocusAway = useCallback((e: FocusEvent) => {
        if (settingBalloonRef.current && !settingBalloonRef.current.contains(e.target as Element) && detailsRef.current) {
            detailsRef.current.open = false
        }
    }, [])

    useEffect(() => {
        if (isBalloonOpen) {
            document.addEventListener('click', handleClickAway)
            document.addEventListener('focusin', handleFocusAway)
        }
        return () => {
            document.removeEventListener('click', handleClickAway)
            document.removeEventListener('focusin', handleFocusAway)
        }
    }, [isBalloonOpen])

    console.log('render Header')
    return (
        <StyledHeader>
            <StyledH1>Tab Manager</StyledH1>
            <SecondaryActionContainer>
                <StyledDetails ref={detailsRef} onToggle={handleDetailsToggle}>
                    <StyledSummary ref={summaryRef} onFocus={handleDetailSummaryFocus}>
                        <IconButton ref={settingButtonRef} icon={faCog} onClick={handleSettingButtonClick} id={'setting balloon'}/>
                    </StyledSummary>
                    <SettingBalloon ref={settingBalloonRef}/>
                </StyledDetails>
            </SecondaryActionContainer>
        </StyledHeader>
    )
})

export default Header
