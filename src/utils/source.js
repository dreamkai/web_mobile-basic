/*
 * @Descripttion: 
 * @version: 
 * @Author: 鼠浩渺
 * @Date: 2020-09-14 09:39:45
 * @LastEditors: 鼠浩渺
 * @LastEditTime: 2021-01-25 11:47:29
 */

const source = {}
let requireContext = require.context('../assets/.', true,  /\.(?:jpg|gif|png)$/)
console.log(requireContext)
// requireContext.keys() 返回匹配成功模块的名字组成的数组
requireContext.keys().forEach((key) => {
  // 通过 requireContext(key)导出文件内容
  const mod = requireContext(key)
  source[key.match(/[^.\/，]+/)] = mod.__esModule && mod.default ? mod.default : mod
})

export default{
  ...source
 }