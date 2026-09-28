import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Демо-сайты · Ирина Юсупова',description:'Три индивидуальных концепции сайтов: образование, падел и косметология.',robots:{index:false,follow:false},icons:{icon:'/client-demo-sites/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ru"><body>{children}</body></html>}
