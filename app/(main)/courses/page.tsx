import { getCourses, getUserProgress } from "@/db/queries"
import { List } from "./_components/list"

const CoursesPage = async () => {
  const coursesData = getCourses()
  const userProgressData = getUserProgress()

  const [courses, userProgress] = await Promise.all([
    coursesData,
    userProgressData,
  ])

  return (
    <div className="mx-auto h-full max-w-[912px] px-3">
      <h1 className="text-2xl font-bold text-neutral-700">Cursos de idiomas</h1>
      <List courses={courses} activeCourseId={userProgress?.activeCourse?.id} />
    </div>
  )
}

export default CoursesPage
