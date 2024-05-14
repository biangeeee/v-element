import { VNode, ComponentInternalInstance } from 'vue';

export interface MessageProps {
    message?: string | VNode;
    duration?: number;
    showClose?: boolean;
    type?: 'success' | 'info' | 'warning' | 'danger';
    onDestroy: () => void;
    offset?: number;
    id: string;
    transitionName?: string;
}
export type createProps = Omit<MessageProps, 'onDestroy' | 'id'>;
export interface MessageContext {
    id: string;
    vnode: VNode;
    vm: ComponentInternalInstance;
    props: MessageProps;
    destory: () => void;
}
