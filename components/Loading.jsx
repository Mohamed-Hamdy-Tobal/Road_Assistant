import Spinner from '../components/ui/Spinner'
import classNames from 'classnames'

const DefaultLoading = (props) => {
    const {
        loading,
        children,
        spinnerClass,
        className,
        asElement: Component = 'div',
        customLoader,
    } = props

    return loading ? (
        <Component
            className={classNames(
                !customLoader && 'flex items-center justify-center z-[120] fixed bg-[#f1f1f16b] top-0 left-0 w-full h-full',
                className
            )}
        >
            {customLoader ? (
                <>{customLoader}</>
            ) : (
                <Spinner enableTheme size="40px" className={`${spinnerClass} opacity-100`}/>
            )}
        </Component>
    ) : (
        <>{children}</>
    )
}

const CoveredLoading = (props) => {
    const {
        loading,
        children,
        spinnerClass,
        className,
        asElement: Component = 'div',
        customLoader,
    } = props

    return (
        <Component className={classNames(loading ? 'relative' : '', className)}>
            {children}
            {loading && (
                <div className="w-full h-full bg-white  bg-opacity-50 absolute inset-0" />
            )}
            {loading && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    {customLoader ? (
                        <>{customLoader}</>
                    ) : (
                        <Spinner enableTheme size="40px" className={`${spinnerClass} opacity-100`}/>
                    )}
                </div>
            )}
        </Component>
    )
}

const Loading = ({ type, ...rest }) => {
    switch (type) {
        case 'default':
            return <DefaultLoading {...rest} />
        case 'cover':
            return <CoveredLoading {...rest} />
        default:
            return <DefaultLoading {...rest} />
    }
}

Loading.defaultProps = {
    loading: false,
    type: 'default',
    asElement: 'div',
}

export default Loading
