import {StyledHeader, StyledH1, StyledButton, StyledSecondaryActionDiv, StyledSummary, StyledDetails} from "./style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog} from "@fortawesome/free-solid-svg-icons/faCog";
import SettingBalloon from "./SettingBalloon";
import {useEffect, useRef, useState} from "react";

const Header = () => {
    const [isBalloonOpen, setIsBalloonOpen] = useState(false)
    const detailsRef = useRef<HTMLDetailsElement>(null)
    const summaryRef = useRef<HTMLElement>(null)
    const settingButtonRef = useRef<HTMLButtonElement>(null)
    const settingBalloonRef = useRef<HTMLDivElement>(null)

    const handleSettingButtonClick = () => {
        if (summaryRef.current) {
            summaryRef.current.click()
        }
    }

    const handleDetailsToggle = () => {
        setIsBalloonOpen(prevState => !prevState)
    }

    const handleDetailSummaryFocus = () => {
        if (settingButtonRef.current) {
            settingButtonRef.current.focus()
        }
    }

    const handleClickAway = (e: MouseEvent) => {
        if (settingBalloonRef.current && !settingBalloonRef.current.contains(e.target as Element) && detailsRef.current) {
            detailsRef.current.open = false
        }
    }

    const handleFocusAway = (e: FocusEvent) => {
        if (settingBalloonRef.current && !settingBalloonRef.current.contains(e.target as Element) && detailsRef.current) {
            detailsRef.current.open = false
        }
    }

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

    return (
        <StyledHeader>
            <StyledH1>Tab Manager</StyledH1>
            <StyledSecondaryActionDiv>
                <StyledDetails ref={detailsRef} onToggle={handleDetailsToggle}>
                    <StyledSummary ref={summaryRef} onFocus={handleDetailSummaryFocus}>
                        <StyledButton ref={settingButtonRef} onClick={handleSettingButtonClick}>
                            <FontAwesomeIcon icon={faCog} fixedWidth />
                        </StyledButton>
                    </StyledSummary>
                    <SettingBalloon ref={settingBalloonRef}/>
                </StyledDetails>
            </StyledSecondaryActionDiv>
        </StyledHeader>
    )
}

export default Header
