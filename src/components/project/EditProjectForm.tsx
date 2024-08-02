import { ClientProject } from "@/types/Project"
import ItineraryBox from "./ItineraryBox"
import { ClientPlace } from "@/types/Place"
import NaverMap from "./NaverMap"
import ChatBox from "./ChatBox"


interface EditProjectFormProps {
  projectData: ClientProject
  placesData: ClientPlace[]
}

export default function EditProjectForm({ projectData, placesData }: EditProjectFormProps) {


  return (
    <div className="flex flex-1 overflow-hidden">
      <div className="w-1/3 h-full overflow-y-auto no-scrollbar border-r">
        <ItineraryBox
          project={projectData}
          initialPlaces={placesData}
        />
      </div>
      <div className="w-1/2 h-full">
        <NaverMap />
      </div>
      <div className="w-1/6 h-full overflow-y-auto no-scrollbar">
        <ChatBox />
      </div>
    </div>
  )
}