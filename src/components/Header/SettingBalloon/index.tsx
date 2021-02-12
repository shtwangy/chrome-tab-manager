import {Ref, forwardRef, FormEvent, useState, useContext, useEffect} from "react";
import {StyledWrapDiv, StyledContentDiv, StyledLabel, StyledTextInput, StyledSubmitInput, StyledTitle} from "./style";
import {localStorageContext} from "../../../contexts/useLocalStorage";

const SettingBalloon = forwardRef<HTMLDivElement>(({}, ref: Ref<HTMLDivElement>) => {
    const [webhookUrlText, setWebhookUrlText] = useState('')
    const {webhookUrl, updateWebhookUrl} = useContext(localStorageContext)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        updateWebhookUrl(webhookUrlText)
    }

    useEffect(() => {
        setWebhookUrlText(webhookUrl)
    }, [webhookUrl])

    return (
        <StyledWrapDiv ref={ref}>
            <StyledContentDiv>
                <StyledTitle>Setting</StyledTitle>
                <form onSubmit={handleSubmit}>
                    <StyledLabel>
                        Webhook URL
                        <StyledTextInput
                            name='webhook-url-text'
                            type='text'
                            value={webhookUrlText}
                            onChange={e => setWebhookUrlText(e.target.value)}
                        />
                    </StyledLabel>
                    <div className='module-spacer--extra-extra-small'></div>
                    <StyledSubmitInput type="submit" value="Update Setting" />
                </form>
            </StyledContentDiv>
        </StyledWrapDiv>
    )
})

export default SettingBalloon
