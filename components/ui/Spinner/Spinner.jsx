"use client"
import { forwardRef } from 'react';
import { CgSpinner } from 'react-icons/cg';
import { useConfig } from '../ConfigProvider/ConfigProvider';

const Spinner = forwardRef((props, ref) => {
    const {
        className,
        color,
        enableTheme = true,
        indicator: Component = CgSpinner,
        isSpining = true,
        size = 20,
        style,
        ...rest
    } = props;

    const { themeColor, primaryColorLevel } = useConfig();

    const spinnerColor =
        color || (enableTheme && `${themeColor}-${primaryColorLevel}`);

    const spinnerStyle = {
        height: size,
        width: size,
        ...style,
    };

    // Direct string concatenation for class names
    const spinnerClass =
        (isSpining ? 'animate-spin ' : '') +
        (spinnerColor ? `text-${spinnerColor} ` : '') +
        (className || '');

    return (
        <Component
            ref={ref}
            style={spinnerStyle}
            className={spinnerClass} // Trim to remove extra spaces
            // className={spinnerClass.trim()} // Trim to remove extra spaces
            {...rest}
        />
    );
});

Spinner.displayName = 'Spinner';

export default Spinner;
