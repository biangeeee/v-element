import { PropType } from 'vue';
import { Placement, Options } from '@popperjs/core';
import { MenuOption } from './types';

declare const _default: import('vue').DefineComponent<{
    placement: {
        type: PropType<Placement>;
        default: string;
    };
    trigger: {
        type: PropType<"click" | "hover">;
        default: string;
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
    openDelay: {
        type: NumberConstructor;
        default: number;
    };
    closeDelay: {
        type: NumberConstructor;
        default: number;
    };
    popperOptions: {
        type: PropType<Options>;
    };
    menuOptions: {
        type: PropType<MenuOption[]>;
        required: true;
    };
    hideAfterClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    manual: {
        type: BooleanConstructor;
    };
}, () => any, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("select" | "visible-change")[], "select" | "visible-change", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    placement: {
        type: PropType<Placement>;
        default: string;
    };
    trigger: {
        type: PropType<"click" | "hover">;
        default: string;
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
    openDelay: {
        type: NumberConstructor;
        default: number;
    };
    closeDelay: {
        type: NumberConstructor;
        default: number;
    };
    popperOptions: {
        type: PropType<Options>;
    };
    menuOptions: {
        type: PropType<MenuOption[]>;
        required: true;
    };
    hideAfterClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    manual: {
        type: BooleanConstructor;
    };
}>> & {
    onSelect?: (...args: any[]) => any;
    "onVisible-change"?: (...args: any[]) => any;
}, {
    transition: string;
    trigger: "click" | "hover";
    placement: Placement;
    manual: boolean;
    openDelay: number;
    closeDelay: number;
    hideAfterClick: boolean;
}, {}>;
export default _default;
