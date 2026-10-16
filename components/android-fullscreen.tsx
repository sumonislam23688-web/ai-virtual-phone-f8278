"use client";

/**
 * 筑境独立窗口不应在点击时重新请求浏览器全屏。
 * 反复调用 requestFullscreen 会让安卓持续显示“从顶部拖动退出全屏”系统提示。
 * 已安装 PWA 的显示模式由 manifest 决定，此组件保持兼容但不执行全屏请求。
 */
export function AndroidFullscreen() {
  return null;
}
