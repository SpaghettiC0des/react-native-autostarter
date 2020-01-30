declare module "react-native-autostarter" {
  export function getAutoStartPermission(): Promise<boolean>;
  export function isAutoStartPermissionAvailable(): Promise<boolean>;
}
