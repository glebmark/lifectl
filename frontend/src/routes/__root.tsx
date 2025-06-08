import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
// import { Route as TasksRoute } from './tasks'


export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        {/* <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '} */}
        <Link to="/tasks" className="[&.active]:font-bold">
          Tasks
        </Link>
        {/* <Link to={TasksRoute.to}>Tasks</Link> */}

      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})

// import * as React from 'react'
// import { Outlet, createRootRoute } from '@tanstack/react-router'

// export const Route = createRootRoute({
//   component: RootComponent,
// })

// function RootComponent() {
//   return (
//     <React.Fragment>
//       <div>Hello "__root"!</div>
//       <Outlet />
//     </React.Fragment>
//   )
// }
