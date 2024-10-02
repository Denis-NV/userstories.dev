import { useUserDefaultRole } from '@nhost/react'

import { Roles } from '@/const'

const roleGroups = {
  [Roles.general_manager]: [Roles.general_manager],
  [Roles.order_manager]: [Roles.general_manager, Roles.order_manager],
  [Roles.production_manager]: [
    Roles.general_manager,
    Roles.order_manager,
    Roles.production_manager,
  ],
  [Roles.logistics_manager]: [Roles.general_manager, Roles.order_manager, Roles.logistics_manager],
  [Roles.user]: [
    Roles.general_manager,
    Roles.order_manager,
    Roles.production_manager,
    Roles.logistics_manager,
    Roles.user,
  ],
}

const isAllowedForUser = (allowedRole: Roles, userRole: Roles) => {
  const group = roleGroups[allowedRole]

  return Boolean(group.find((role) => role === userRole))
}

export const useAllowedForUser = (allowedRole: Roles) => {
  const userRole = useUserDefaultRole() as Roles

  return isAllowedForUser(allowedRole, userRole)
}
export default isAllowedForUser
