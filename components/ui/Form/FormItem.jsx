"use client"

import { forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from './context';
import { CONTROL_SIZES, LAYOUT } from '../util/constants';
import { useConfig } from '../ConfigProvider/ConfigProvider';

const FormItem = forwardRef((props, ref) => {
    const {
        asterisk,
        children,
        className,
        errorMessage,
        extra,
        htmlFor,
        invalid,
        label,
        labelClass,
        labelWidth,
        layout,
        style,
        size,
    } = props;

    const formContext = useForm();
    const { controlSize } = useConfig();

    const formItemLabelHeight = size || (formContext && formContext.size) || controlSize;
    const formItemLabelWidth = labelWidth || (formContext && formContext.labelWidth);
    const formItemLayout = layout || (formContext && formContext.layout);

    const getFormLabelLayoutClass = () => {
        switch (formItemLayout) {
            case LAYOUT.HORIZONTAL:
                return label
                    ? `h-${CONTROL_SIZES[formItemLabelHeight]} ${label && 'ltr:pr-2 rtl:pl-2'
                    }`
                    : 'ltr:pr-2 rtl:pl-2'
            case LAYOUT.VERTICAL:
                return `mb-2`
            case LAYOUT.INLINE:
                return `h-${CONTROL_SIZES[formItemLabelHeight]} ${label && 'ltr:pr-2 rtl:pl-2'
                    }`
            default:
                break
        }
    }

    // Direct string concatenation for class names
    const formItemClass =
        'form-item' +
        (formItemLayout ? ` ${formItemLayout}` : '') +
        (className ? ` ${className}` : '') +
        (invalid ? ' invalid' : '');

    const formLabelClass =
        'form-label' +
        (label && getFormLabelLayoutClass() ? ` ${label && getFormLabelLayoutClass()}` : '') +
        (labelClass ? ` ${labelClass}` : '');

    const formLabelStyle = () => {
        if (formItemLayout === LAYOUT.HORIZONTAL) {
            return { ...style, ...{ minWidth: formItemLabelWidth } };
        }

        return { ...style };
    };

    const enterStyle = { opacity: 1, marginTop: 3, bottom: -21 };
    const exitStyle = { opacity: 0, marginTop: -10 };
    const initialStyle = exitStyle;

    return (
        <div ref={ref} className={formItemClass}>
            <label
                htmlFor={htmlFor}
                className={formLabelClass}
                style={formLabelStyle()}
            >
                {asterisk && (
                    <span className="text-red-500 ltr:mr-1 rtl:ml-1">*</span>
                )}
                {label}
                {extra && <span>{extra}</span>}
                {label && formItemLayout !== 'vertical' && ':'}
            </label>
            <div
                className={
                    formItemLayout === LAYOUT.HORIZONTAL
                        ? 'w-full flex flex-col justify-center relative'
                        : ''
                }
            >
                {children}
                <AnimatePresence mode="wait">
                    {invalid && (
                        <motion.div
                            className="form-explain"
                            initial={initialStyle}
                            animate={enterStyle}
                            exit={exitStyle}
                            transition={{ duration: 0.15, type: 'tween' }}
                        >
                            {errorMessage}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
});

FormItem.displayName = 'FormItem';

export default FormItem;
