import Sidebar from "@/components/Sidebar"
import Chat from "@/components/Chat"
const index = () => {
  return (
    <div className="app">
      {/* sidebar */}
        <Sidebar/>
        <Chat/>
    </div>
  )
}

export default index
