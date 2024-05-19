import { forwardRef } from 'react';
import { useConfig } from '../ConfigProvider/ConfigProvider';
import { useForm } from '../Form/context';
import { InputGroupContextProvider, InputGroupContextConsumer } from './context';

const InputGroup = forwardRef((props, ref) => {
    const { children, className, size } = props;

    const { controlSize } = useConfig();
    const formControlSize = useForm()?.size;

    const inputGroupSize = size || formControlSize || controlSize;

    const inputGroupClass = ['input-group', className].filter(Boolean).join(' ');

    const contextValue = {
        size: inputGroupSize,
    };

    return (
        <InputGroupContextProvider value={contextValue}>
            <InputGroupContextConsumer>
                {() => {
                    return (
                        <div ref={ref} className={inputGroupClass}>
                            {children}
                        </div>
                    );
                }}
            </InputGroupContextConsumer>
        </InputGroupContextProvider>
    );
});

InputGroup.displayName = 'InputGroup';

export default InputGroup;
