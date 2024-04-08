/**
 * @extends {ExtensionCommand<DriverType>}
 */
export default class DriverCommand extends ExtensionCommand<"driver"> {
    /**
     * @param {import('./extension-command').ExtensionCommandOptions<DriverType>} opts
     */
    constructor({ config, json }: import('./extension-command').ExtensionCommandOptions<DriverType>);
    install({ driver, installType, packageName }: {
        driver: any;
        installType: any;
        packageName: any;
    }): Promise<import("./extension-command").ExtRecord<"driver">>;
    uninstall({ driver }: {
        driver: any;
    }): Promise<import("./extension-command").ExtRecord<"driver">>;
    update({ driver, unsafe }: {
        driver: any;
        unsafe: any;
    }): Promise<import("./extension-command").ExtensionUpdateResult>;
    run({ driver, scriptName, extraArgs }: {
        driver: any;
        scriptName: any;
        extraArgs: any;
    }): Promise<import("./extension-command").RunOutput>;
    getPostInstallText({ extName, extData }: {
        extName: any;
        extData: any;
    }): string;
}
export type DriverCommandOptions = {
    config: import('../extension/extension-config').ExtensionConfig<DriverType>;
    json: boolean;
};
export type DriverType = import('@appium/types').DriverType;
import ExtensionCommand from "./extension-command";
//# sourceMappingURL=driver-command.d.ts.map