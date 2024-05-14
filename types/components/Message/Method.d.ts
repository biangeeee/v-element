import { createProps, MessageContext } from './types';

export declare const createMessage: (props: createProps) => {
    id: string;
    vnode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }>;
    vm: import('vue').ComponentInternalInstance;
    props: {
        id: string;
        onDestroy: () => void;
        type?: "success" | "warning" | "danger" | "info";
        offset?: number;
        message?: string | import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
            [key: string]: any;
        }>;
        duration?: number;
        showClose?: boolean;
        transitionName?: string;
    };
    destory: () => void;
};
export declare const getLastInstance: () => MessageContext;
export declare const getLastBottomOffset: (id: string) => any;
export declare const closeAll: () => void;
