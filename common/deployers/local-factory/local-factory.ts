import type {AppDeployContext, DeployFn} from '@teambit/application';

/**
 * 本地部署。拷贝生成的静态文件到目标目录下。
 *
 * peacetrue.developer-helper_apps_wiki@0.0.6/artifacts
 * ├── apps
 * │ └── react-common-js
 * │     └── developer-helper
 * │         └── public
 * │             ├── assets-manifest.json
 * │             ├── index.html
 * │             ├── main.js
 * │             └── static
 * │                 └── css
 * │                     └── main.33fa8c4e.css
 * └── preview
 *     ├── peacetrue_developer_helper_apps_wiki-preview.js
 *
 * @param props 部署选项
 * @return DeployFn 部署函数
 **/
export function localFactory(props: localFactoryProps): DeployFn {
  return (context: AppDeployContext): Promise<void> => {
    let source = `${context.capsule.path}/artifacts/apps/react-common-js`;
    props.appName && (source += `/${props.appName}/public`);
    console.log(`\n copy from '${source}' to '${props.dist}'`);
    return import('fs-extra').then(fs => fs.ensureDir(props.dist).then(() => fs.copy(source, props.dist)));
  }
}

/** 部署选项 */
export type localFactoryProps = {
  /** app name */
  appName?: string;
  /** dist directory */
  dist: string;
};
