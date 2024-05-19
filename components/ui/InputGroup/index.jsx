import { forwardRef } from 'react';
import InputGroup from './InputGroup';
import Addon from './Addon';

const CompoundedComponent = forwardRef((props, ref) => {
    return <InputGroup {...props} ref={ref} />;
});

CompoundedComponent.Addon = Addon;

export { CompoundedComponent as InputGroup };

export default CompoundedComponent;
