import { container, Compilation, Compiler } from 'webpack'
import { getHooks } from './hooks'
const { ModuleFederationPlugin } = container

const PLUGIN_NAME = 'yylModuleFederation'

function demo() {
  console.log('hello world')
}

/** ，模块联邦配置 - share */
export interface YylModuleFederationShared {
  /** for dependency via the ModuleFederationPlugin */
  eager?: boolean
  /** allow only a single version of shared module in share scope (disabled by default) */
  singleton?: boolean
  /** 要求的版本 */
  requiredVersion?: string
}

export interface YylModuleFedrationWebpackPluginOption {
  /** 组件名称 */
  name?: string
  /** 远程调用的模块 */
  remotes?: {
    [name: string]: string
  }
  /** 模块导出 */
  exposes?: {
    [path: string]: string
  }
  /** 模块分享 */
  shared?: {
    [module: string]: YylModuleFederationShared
  }
}

export default class YylModuleFedrationWebpackPlugin {
  /** 配置 */
  option: YylModuleFedrationWebpackPluginOption = {}
  /** hooks 用方法: 获取 hooks */
  static getHooks(compilation: Compilation) {
    return getHooks(compilation)
  }

  /** hooks 用方法: 获取插件名称 */
  static getName() {
    return PLUGIN_NAME
  }

  constructor(option?: YylModuleFedrationWebpackPluginOption) {
    if (option) {
      this.option = option
    }
  }

  async apply(compiler: Compiler) {
    // TODO:
  }
}
