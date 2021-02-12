import {StyledHeader, StyledH1, StyledButton, StyledSecondaryActionDiv, StyledSummary, StyledDetails} from "./style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog} from "@fortawesome/free-solid-svg-icons/faCog";
import SettingBalloon from "./SettingBalloon";
import {useCallback, useEffect, useRef, useState} from "react";

const Header = () => {
    const [isBalloonOpen, setIsBalloonOpen] = useState(false)
    const detailsRef = useRef<HTMLDetailsElement>(null)
    const summaryRef = useRef<HTMLElement>(null)
    const settingButtonRef = useRef<HTMLButtonElement>(null)
    const settingBalloonRef = useRef<HTMLDivElement>(null)

    const handleSettingButtonOnClick = () => {
        if (summaryRef.current) {
            summaryRef.current.click()
        }
    }

    const handleDetailSummaryOnFocus = () => {
        if (settingButtonRef.current) {
            settingButtonRef.current.focus()
        }
    }

    const handleClickAway = useCallback((e: MouseEvent) => {
        if (settingBalloonRef.current && !settingBalloonRef.current.contains(e.target as Element) && detailsRef.current) {
            detailsRef.current.open = false
        }
    }, [])

    useEffect(() => {
        if (isBalloonOpen) {
            document.addEventListener('click', handleClickAway)
        }
        return () => {
            document.removeEventListener('click', handleClickAway)
        }
    }, [isBalloonOpen])

    const handleDetailsToggle = () => {
        setIsBalloonOpen(prevState => !prevState)
    }
    return (
        <StyledHeader>
            <StyledH1>Tab Manager {isBalloonOpen ? 'true' : 'false'}</StyledH1>
            <StyledSecondaryActionDiv>
                <StyledDetails ref={detailsRef} onToggle={handleDetailsToggle}>
                    <StyledSummary ref={summaryRef} onFocus={handleDetailSummaryOnFocus}>
                        <StyledButton ref={settingButtonRef} onClick={handleSettingButtonOnClick}>
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
