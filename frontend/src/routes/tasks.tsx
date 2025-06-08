import { createFileRoute } from '@tanstack/react-router'

function Tasks() {
  return <div className="p-2">Hello from Tasks!</div>
}

export const Route: unknown = createFileRoute('/tasks')({
  component: () => Tasks,
})


// import { createFileRoute } from '@tanstack/react-router'

// export const Route = createFileRoute('/tasks')({
//   component: About,
// })

// function About() {
//   return <div className="p-2">Hello from About!</div>
// }