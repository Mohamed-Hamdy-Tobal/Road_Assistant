import React from 'react'
import { useTranslations } from 'next-intl'
import LandingExpand from './Expand/LandingExpand'

const Landing = () => {

    const t = useTranslations('Landing')


    return (
        <LandingExpand title={t('title')} mainTitle={t('mainTitle')} desc={t('desc')}  button={t('button')}/>
    )
}

export default Landing
