import React from 'react'
import { useTranslations } from 'next-intl'
import Expandable from '@/components/Expandable';

const page = () => {

    const t = useTranslations('Index')
    console.log(t('title'))

    return (
        <div>
            <Expandable title={t('title')}/>
        </div>
    )
}

export default page