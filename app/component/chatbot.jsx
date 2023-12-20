"use client";
import React, { useId } from "react";
import Script from "next/script";

const Chatbot = () => {
    const botInit = () => {
        window.botpressWebChat.init({
            "botConversationDescription": "私のことを紹介します。",
            "botId": "b8b5fe09-27e7-4ed0-b7d8-79cb13988292",
            "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
            "messagingUrl": "https://messaging.botpress.cloud",
            "clientId": "b8b5fe09-27e7-4ed0-b7d8-79cb13988292",
            "webhookId": "1bf55724-b2fb-4777-93c9-bd3a29851718",
            "lazySocket": true,
            "themeName": "prism",
            "botName": "lCyou",
            "avatarUrl": "https://avatars.githubusercontent.com/u/87867174?v=4",
            "stylesheet": "https://webchat-styler-css.botpress.app/prod/7eeb17f8-a6e5-4fa5-af5c-56c966b3ba8b/v39960/style.css",
            "frontendVersion": "v1",
            "theme": "prism",
            "themeColor": "#2563eb"
        });
    }
	return (
		<Script 
            src="https://cdn.botpress.cloud/webchat/v1/inject.js"
            onLoad={() => {
                botInit();
            }} 
        />
	);
};

export default Chatbot;