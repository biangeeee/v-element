export type SwitchValueType = boolean | string | number;
export interface SwitchProps {
    modelValue: SwitchValueType;
    disabled?: boolean;
    activeText?: string;
    inactiveText?: string;
    activeVal?: SwitchValueType;
    inactiveVal?: SwitchValueType;
    name?: string;
    id?: string;
    size?: 'small' | 'large';
}
export interface SwtichEmits {
    (e: 'update:modelValue', value: SwitchValueType): void;
    (e: 'change', value: SwitchValueType): void;
}
