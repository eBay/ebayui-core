import { Input as NoticeBaseInput } from '../components/ebay-notice-base/component';

export interface Input
    extends Omit<NoticeBaseInput, 'role' | 'prefixClass' | 'mainRoot' | `on${string}`> {
    dismissed?: boolean;
    'on-dismiss'?: () => void;
    onDismiss?: this['on-dismiss'];
}

interface State {
    dismissed: boolean;
}

export default class extends Marko.Component<Input, State> {
    onCreate() {
        this.state = { dismissed: false };
    }

    onInput(input: Input) {
        this.state = { dismissed: input.dismissed || false };
    }

    onDismiss() {
        this.state.dismissed = true;
        this.emit('dismiss');
    }
}
