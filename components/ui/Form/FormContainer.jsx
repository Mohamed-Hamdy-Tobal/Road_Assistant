"use client"
import { FormContextProvider, FormContextConsumer } from './context';
import { SIZES, LAYOUT } from '../util/constants';
import { useConfig } from '../ConfigProvider/ConfigProvider';

const FormContainer = (props) => {
    const { controlSize } = useConfig();

    const {
        children,
        className,
        labelWidth = 100,
        layout = LAYOUT.VERTICAL,
        size = SIZES.MD,
    } = props;

    const contextValue = {
        labelWidth,
        layout,
        size: size || controlSize,
    };

    return (
        <FormContextProvider value={contextValue}>
            <FormContextConsumer>
                {(context) => {
                    const formContainerClass =
                        'form-container' +
                        (context && context.layout ? ` ${context.layout}` : '') +
                        (className ? ` ${className}` : '');

                    return <div className={formContainerClass}>{children}</div>;
                }}
            </FormContextConsumer>
        </FormContextProvider>
    );
};

FormContainer.displayName = 'FormContainer';

export default FormContainer;
