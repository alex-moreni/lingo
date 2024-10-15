type Props = {
  children: React.ReactNode
}

const LessonLayout = ({ children }: Props) => {
  return (
    <div className="flex h-full flex-col">
      <div className="w-hull flex h-full flex-col">{children}</div>
    </div>
  )
}

export default LessonLayout
