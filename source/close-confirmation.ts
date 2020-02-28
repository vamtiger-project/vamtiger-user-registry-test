import { ICloseConfirmation, IUserRegistryElement, Selector  } from './types';

export default function ({element} : ICloseConfirmation) {
    const { shadowRoot } = element;
    const dataset: IUserRegistryElement['dataset'] = element.dataset;
    const overlay = shadowRoot?.querySelector<HTMLElement>(Selector.overlay);
    const overlayDataset: IUserRegistryElement['dataset'] | undefined = overlay?.dataset;

    if (overlayDataset) {
        delete dataset.confirm;
        delete overlayDataset.confirm;
    }
}