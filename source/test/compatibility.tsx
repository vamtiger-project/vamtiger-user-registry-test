import { expect } from 'chai';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as faker from 'faker';
import { IUser, EventName } from '../types';
import VamtigerUserRegistry from '../element';

const { VamtigerBrowserMethod } = window;

export default () => describe('Compatibility', function () {
    it('React', function () {
        return new Promise(resolve => {
            class VamtigerUserRegistryReact extends React.Component {
                readonly vamtigerUserRegistry: React.RefObject<VamtigerUserRegistry>;

                constructor(props: any) {
                    super(props);

                    this.vamtigerUserRegistry = React.createRef();
                }

                componentDidMount() {
                    const vamtigerUserRegistry = this.vamtigerUserRegistry.current;

                    if (vamtigerUserRegistry) {
                        vamtigerUserRegistry.addEventListener(EventName.connected, () => this.handleConnected());
                    }
                }

                handleConnected() {
                    const container = this.vamtigerUserRegistry.current?.parentElement;

                    if (container) {
                        container.parentElement?.removeChild(container);
                    }

                    resolve();
                }

                render() {
                    return (
                        <vamtiger-user-registry
                            ref={this.vamtigerUserRegistry}
                        >
                        </vamtiger-user-registry>
                    );
                }
            }
            const container = document.createElement('div');

            container.id = 'vamtiger-user-registry-react';

            document.body.appendChild(container);
            ReactDOM.render(
                <VamtigerUserRegistryReact />,
                container
            );
        });
    });
});