import { forwardRef } from 'react';
import { useConfig } from '../ConfigProvider/ConfigProvider';
import { useForm } from '../Form/context';
import { useInputGroup } from '../InputGroup/context';
import {CONTROL_SIZES} from '../util/constants'

const Addon = forwardRef((props, ref) => {
    const { size, children, className } = props;

    const { controlSize } = useConfig();
    const formControlSize = useForm()?.size;
    const inputGroupSize = useInputGroup()?.size;

    const inputAddonSize = size || inputGroupSize || formControlSize || controlSize;

    const addonClass = [
        'input-addon ',
        `input-addon-${inputAddonSize}`,
        `h-${CONTROL_SIZES[inputAddonSize]}`,
        className
    ].filter(Boolean).join(' ');

    return (
        <div ref={ref} className={addonClass}>
            {children}
        </div>
    );
});

Addon.displayName = 'Addon';

export default Addon;
