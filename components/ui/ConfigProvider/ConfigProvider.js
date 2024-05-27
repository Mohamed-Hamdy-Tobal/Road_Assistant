"use client"
import { createContext, useContext } from 'react';
import { SIZES } from '../util/constants';

export const ConfigContext = createContext({
    themeColor: 'green',
    direction: 'ltr',
    mode: 'light',
    locale: 'en',
    primaryColorLevel: 600,
    cardBordered: false,
    controlSize: SIZES.MD,
    navMode: 'light',
});

const ConfigProvider = ConfigContext.Provider;

export const ConfigConsumer = ConfigContext.Consumer;

export function useConfig() {
    return useContext(ConfigContext);
} 

export default ConfigProvider;
