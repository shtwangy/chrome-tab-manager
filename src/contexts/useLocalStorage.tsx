import {createContext, useCallback, useEffect, useState} from "react";

type LocalStorageContext = {
    webhookUrl: string
    updateWebhookUrl: (url: string) => void
}

const defaultContext: LocalStorageContext = {
    webhookUrl: '',
    updateWebhookUrl: (url: string) => {}
}

export const localStorageContext = createContext<LocalStorageContext>(defaultContext)

export const useLocalStorage = (): LocalStorageContext => {
    const [webhookUrl, setWebhookUrl] = useState('');
    const saveLocalWebhookUrl = () => {
        localStorage.setItem('webhook-url', webhookUrl);
    }

    const getLocalWebhookUrl = () => {
        if (!localStorage.getItem('webhook-url')) {
            saveLocalWebhookUrl();
        } else {
            const localWebhookUrl = localStorage.getItem('webhook-url') || '';
            setWebhookUrl(localWebhookUrl);
        }
    }

    useEffect(() => {
        getLocalWebhookUrl();
    }, []);

    useEffect(() => {
        saveLocalWebhookUrl()
    }, [webhookUrl]);

    const updateWebhookUrl = useCallback((url: string): void => {
        setWebhookUrl(url)
    }, [])

    return {
        webhookUrl,
        updateWebhookUrl
    }
}
