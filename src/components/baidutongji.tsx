import { createEffect, createSignal } from "solid-js"

const BaiduTongji = () => {
  const [scriptLoaded, setScriptLoaded] = createSignal(false)

  createEffect(() => {
    const hm = document.createElement("script")
    hm.src = "https://hm.baidu.com/hm.js?80b69c75993f4cea40cd37be02676d59"
    const s = document.getElementsByTagName("script")[0]
    const parent = s?.parentNode || document.head
    parent.insertBefore(hm, s)
    setScriptLoaded(true)
  })

  return scriptLoaded()
}

export default BaiduTongji
