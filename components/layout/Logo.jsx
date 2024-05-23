import classNames from 'classnames'
import Image from 'next/image'

const Logo = (props) => {
    const {
        type = 'full',
        mode = 'light',
        className,
        imgClass,
        style,
        logoWidth = 'auto',
    } = props

    return (
        <div
            className={classNames('logo', className, type == 'full' ? '' : 'p-5')}
            style={{
                ...style,
                ...{ width: logoWidth },
            }}
        >
            {type === 'full' ? (
                <div className='flex justify-start gap-2 items-center text-[30px] py-5 font-medium'>
                    <div className='flex justify-center items-center'>
                        <Image
                            width={45}
                            height={45}
                            className={imgClass}
                            src={`/logo.svg`} 
                            alt={`app logo`}
                        />
                    </div>
                    <h1 className={`text-[22px] ${mode == 'light' ? 'text-[#000]' : 'text-white'}`}>Road Assistant</h1>
                </div>
            ) : (
                <div className='flex justify-center items-center'>
                    <Image
                        width={45}
                        height={45}
                        className={imgClass}
                        src={`/logo.svg`}
                        alt={`app logo`}
                    />
                </div>
            )}
        </div>
    )
}

export default Logo
