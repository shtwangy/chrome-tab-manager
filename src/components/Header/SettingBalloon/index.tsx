import {Ref, forwardRef, FormEvent, useState, useContext, useEffect} from "react";
import {StyledWrapDiv} from "./style";
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
            <form onSubmit={handleSubmit}>
                <label>
                    Webhook URL:
                    <input
                        name='webhook-url-text'
                        type='text'
                        value={webhookUrlText}
                        onChange={e => setWebhookUrlText(e.target.value)}
                    />
                </label>
                <input type="submit" value="Update Setting" />
            </form>
        </StyledWrapDiv>
    )
})

export default SettingBalloon
