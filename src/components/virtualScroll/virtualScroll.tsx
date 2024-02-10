// import { useRef, useState } from 'react'
// interface ListProps {
//   content: string
//   id: number
// }
// export default function virtualScroll() {
//   const [showList, setShowList] = useState<ListProps[]>([])
//   const containerRef = useRef()
//   const boxScroll = () => {
//     console.log(containerRef.current.value)
//   }
//   return (
//     <div id="container">
//       <h1>虚拟滚动</h1>
//       <div className="scroll-box" onScroll={boxScroll} ref={containerRef}>
//         <div>
//           {showList.map((item) => (
//             <div key={item.id ? item.id : Math.random() + item.content}>
//               {item.content}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
