// import MockInstalAPPs from 'mock/installedApps';
import type { NextApiRequest, NextApiResponse } from 'next';
import { authSession } from '@/services/backend/auth';
import { GetUserDefaultNameSpace, K8sApi, ListCRD } from '../../../services/backend/kubernetes';
import { jsonRes } from '@/services/backend/response';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const kc = await authSession(req.headers);

    const kube_user = kc.getCurrentUser();
    if (kube_user === null) {
      return jsonRes(res, { code: 403, message: 'user is null' });
    }

    const defaultMeta = {
      group: 'app.sealos.io',
      version: 'v1',
      namespace: 'app-system',
      plural: 'apps'
    };

    const meta = {
      group: 'app.sealos.io',
      version: 'v1',
      namespace: GetUserDefaultNameSpace(kube_user.name),
      plural: 'apps'
    };

    const defaultResult = await ListCRD(kc, defaultMeta);
    const userResult = await ListCRD(kc, meta);

    //@ts-ignore
    const defaultArr = defaultResult?.body?.items.map((item: any) => {
      return { key: `system-${item.metadata.name}`, ...item.spec };
    });
    //@ts-ignore
    const userArr = userResult?.body?.items.map((item: any) => {
      return { key: `user-${item.metadata.name}`, ...item.spec };
    });

    let apps = [...defaultArr, ...userArr];

    jsonRes(res, { data: apps });
  } catch (err) {
    console.log(err);
    jsonRes(res, { code: 500, data: err });
  }
}
