
const source = {}
let requireContext = require.context('../assets/.', true,  /\.(?:jpg|gif|png)$/)
console.log(requireContext)
// requireContext.keys() 返回匹配成功模块的名字组成的数组
requireContext.keys().forEach((key) => {
  // 通过 requireContext(key)导出文件内容
  const mod = requireContext(key)
  source[key.match(/(?<=.\/).*?(?=.jpg|.gif|.png)/)] = mod.__esModule && mod.default ? mod.default : mod
})
export default{
  ...source
 }