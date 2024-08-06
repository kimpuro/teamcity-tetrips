import NoProject from '@/components/project/NoProject'
import ProjectList from '@/components/project/ProjectList';
import Sidebar from '@/components/project/Sidebar'
import { fetchProjectsByUserId } from '@/services/projectService';


export default async function Page() {
  const userEmail = "testUser@naver.com";
  const projects = await fetchProjectsByUserId(userEmail);

  if (!projects|| projects.length === 0) {
    return (
      <div className="flex">
        <Sidebar />
        <NoProject />
      </div>
    );
  }
  return (
    <main>
      <div className="flex">
        <Sidebar />
        <ProjectList projects={projects} />
      </div>
    </main>
  )
}
