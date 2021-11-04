import { RuntimeOptions } from 'firebase-functions';

interface IResources {
    low: RuntimeOptions;
}

const resources: IResources = {
  low: { timeoutSeconds: 10, memory: '128MB' },
};

export default resources;
