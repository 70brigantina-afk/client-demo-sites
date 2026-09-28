export function DemoBar({text}:{text:string}){return <div className="demo-bar"><span>Демо-концепция · {text}</span><a href="/client-demo-sites/review">О проекте</a></div>}
export function Footer({name,note}:{name:string,note:string}){return <><footer className="footer"><p>{name} · Демонстрационная версия. {note}</p><a href="/client-demo-sites/">Все три концепции ↗</a></footer></>}
export function Faq({items}:{items:[string,string][]}){return <div className="faq">{items.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>}
