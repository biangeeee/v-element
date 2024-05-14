import { InjectionKey } from 'vue';
import { RuleItem, ValidateError, ValidateFieldsError } from 'async-validator';

export interface FormItemProps {
    label: string;
    prop?: string;
}
export interface FormItemRule extends RuleItem {
    trigger?: string;
}
export type FormRules = Record<string, FormItemRule[]>;
export interface FormProps {
    model: Record<string, any>;
    rule: FormRules;
}
export interface ValidateStatusProp {
    state: 'init' | 'success' | 'error';
    errorMsg: string;
    loading: boolean;
}
export interface FormValidateFailure {
    errors: ValidateError[] | null;
    fields: ValidateFieldsError;
}
export interface FormContext extends FormProps {
    addField: (field: FormItemContext) => void;
    removeField: (field: FormItemContext) => void;
    resetFields: () => void;
    clearValidate: () => void;
}
export interface FormItemContext {
    validate: (trigger?: string) => Promise<any>;
    prop: string;
    resetField: () => void;
    clearValidate: () => void;
}
export interface FormInstance {
    validate: () => Promise<any>;
    resetFields: (props?: string[]) => void;
    clearValidate: (props?: string[]) => void;
}
export interface FormItemInstance {
    validateStatus: ValidateStatusProp;
    validate: (trigger?: string) => Promise<any>;
    resetField(): void;
    clearValidate(): void;
}
export declare const formContextKey: InjectionKey<FormContext>;
export declare const formItemContextKey: InjectionKey<FormItemContext>;
