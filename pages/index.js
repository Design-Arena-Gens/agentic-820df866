import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const containerRef = useRef(null)
  const [autoRolled, setAutoRolled] = useState(false)

  const triggerRoll = () => {
    const el = containerRef.current
    if (!el) return
    el.classList.remove('do-roll')
    void el.offsetWidth // force reflow to restart animation
    el.classList.add('do-roll')
  }

  useEffect(() => {
    if (!autoRolled) {
      setAutoRolled(true)
      const t = setTimeout(triggerRoll, 300)
      return () => clearTimeout(t)
    }
  }, [autoRolled])

  return (
    <>
      <Head>
        <title>?????</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="?????? ????? ? ?????? ???????? ????????" />
      </Head>
      <div className="page">
        <div ref={containerRef} className="roll-container">
          <main className="main">
            <h1 className="title">?????!</h1>
            <p className="subtitle">?????, ????? ??????? ?????</p>
            <button className="btn" onClick={triggerRoll}>??????? ?????</button>
          </main>
        </div>
      </div>
    </>
  )
}
