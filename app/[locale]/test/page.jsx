import React from 'react'
import Loading from '@/components/Loading'

const Test = () => {
    return (
        <div>
            <Loading spinnerClass='my-spin ' loading={true} type={'default'}/>
        </div>
    )
}

export default Test
